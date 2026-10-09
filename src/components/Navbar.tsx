import React, { useState, useEffect, useRef, useCallback } from 'react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData';
import { Phone, ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenConsultation: (initialStep?: number) => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);

  const headerRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Measure and update header height for seamless drawer placement
  const updateHeaderHeight = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Track scroll position to update header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 25;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header height on mount and resize
  useEffect(() => {
    updateHeaderHeight();
    const handleResize = () => {
      updateHeaderHeight();
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [updateHeaderHeight]);

  // Lock body scroll and prevent layout shift when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [mobileMenuOpen]);

  // Handle keyboard navigation (Escape key to close drawer)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Three retained navigation destinations (Selected Work, Disciplines, and The Studio removed from navbar)
  const navLinks = [
    { label: "Materials", href: "#materials" },
    { label: "Process", href: "#process" },
    { label: "Estimator", href: "#estimator" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#estimator' && onOpenEstimator) {
      e.preventDefault();
      onOpenEstimator();
      return;
    }

    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${
          isScrolled ? 'site-header--scrolled' : 'site-header--unscrolled'
        }`}
      >
        <div className="site-header__inner">
          {/* 1. Brand Logo (Anchored Left across all screen sizes) */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="site-header__logo group"
            data-cursor="HOME"
            aria-label="Elite Studios — Home"
          >
            <span
              className={`site-header__logo-title ${
                isScrolled
                  ? 'text-[#111111] group-hover:text-[#E09290]'
                  : 'text-[#FAF8ED] group-hover:text-[#E09290]'
              }`}
            >
              ELITE STUDIOS
            </span>
            <span
              className={`site-header__logo-sub ${
                isScrolled ? 'text-[#575249]' : 'text-[#F2EED8]/85'
              }`}
            >
              Interior Architecture · NCR
            </span>
          </a>

          {/* 2. Desktop Navigation Links (>= 1024px: Balanced horizontal row) */}
          <nav
            className={`site-header__nav ${
              isScrolled ? 'text-[#111111]/85' : 'text-[#FAF8ED]/90'
            }`}
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="site-header__nav-link hover:text-[#E09290]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 3. Desktop Actions Group (>= 1024px: Phone link + Consultation CTA) */}
          <div className="site-header__actions">
            {/* Phone Contact Pill */}
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className={`site-header__contact-link ${
                isScrolled
                  ? 'bg-[#FAF8EE]/90 border-[#111111]/15 text-[#575249] hover:text-[#111111] hover:border-[#111111]/30 hover:bg-[#FAF8EE]'
                  : 'bg-[#111111]/55 border-[#FAF8ED]/20 text-[#FAF8ED]/90 hover:text-[#FAF8ED] hover:border-[#FAF8ED]/40 backdrop-blur-sm'
              }`}
              title="Direct Studio Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#E09290] shrink-0" />
              <span>{STUDIO_INFO.displayPhone}</span>
            </a>

            {/* Book Consultation Pill CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenConsultation(1)}
              data-cursor="BOOK"
              className="font-semibold shadow-md whitespace-nowrap"
              icon={
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              }
            >
              Book Consultation
            </Button>
          </div>

          {/* 4. Mobile / Tablet Menu Toggle (< 1024px: Accessible touch target >= 44x44px) */}
          <button
            ref={toggleButtonRef}
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`site-header__menu-toggle ${
              isScrolled
                ? 'border-[#111111]/15 text-[#111111] hover:text-[#E09290] bg-[#FAF8EE]/90'
                : 'border-[#FAF8ED]/20 text-[#FAF8ED] hover:text-[#E09290] bg-[#111111]/55 backdrop-blur-md'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-200" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>

      {/* 5. Mobile & Tablet Navigation Overlay & Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay (closes on tap outside) */}
          <div
            className="mobile-menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Menu Drawer */}
          <div
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            style={{ top: `${headerHeight}px` }}
            className="mobile-menu-drawer p-5 sm:p-7"
          >
            {/* Top: Header tag & Navigation Links */}
            <div className="space-y-6 pt-1">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3">
                <span className="text-[11px] tracking-[0.24em] uppercase text-[#E09290] font-mono font-bold">
                  Navigation
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#111111]/60 font-mono">
                  Elite Studios NCR
                </span>
              </div>

              <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Links">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group font-serif text-2xl sm:text-3xl text-[#111111] hover:text-[#E09290] active:text-[#E09290] transition-colors flex items-center justify-between py-2 min-h-[48px]"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                    <span className="text-xs font-mono text-[#E09290]/80 font-semibold tracking-wider">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom: Studio Address, Phone Line & Action CTAs (Within thumb reach) */}
            <div className="border-t border-[#111111]/10 pt-5 mt-6 space-y-4">
              <div className="text-xs text-[#575249] space-y-1 font-sans">
                <p className="text-[#111111] font-semibold text-sm">
                  Gaur World SmartStreet Flagship
                </p>
                <p className="text-[12px] text-[#575249]">
                  Office 255, 4th Floor, Greater Noida West
                </p>

                {/* Direct tap-to-call Phone contact */}
                <div className="pt-2">
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#111111] bg-[#FAF8EE] border border-[#111111]/15 px-3.5 py-2 rounded-full font-semibold hover:border-[#E09290] hover:text-[#E09290] transition-colors min-h-[40px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E09290] shrink-0" />
                    <span>{STUDIO_INFO.displayPhone}</span>
                  </a>
                </div>
              </div>

              {/* Consultation & WhatsApp Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  href={getWhatsAppUrl("Hi Elite Studios, I would like to inquire about interior design services.")}
                  target="_blank"
                  className="font-semibold w-full"
                  iconPosition="left"
                  icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation(1);
                  }}
                  className="font-semibold shadow-sm w-full"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

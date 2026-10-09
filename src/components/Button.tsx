import React from 'react';

export type ButtonVariant = 'primary' | 'glass' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  'data-cursor'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'btn--sm',
    md: 'btn--md',
    lg: 'btn--lg',
  };

  const getVariantClass = (v: ButtonVariant) => {
    switch (v) {
      case 'primary':
        return 'btn--primary';
      case 'glass':
        return 'btn--glass';
      case 'secondary':
        return 'btn--secondary';
      default:
        return 'btn--primary';
    }
  };

  const variantClass = getVariantClass(variant);
  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `btn ${variantClass} ${sizeClasses[size] || ''} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="btn__icon inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      {children && (
        <span className="btn__label inline-flex items-center">
          {children}
        </span>
      )}
      {icon && iconPosition === 'right' && (
        <span className="btn__icon inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      {content}
    </button>
  );
};


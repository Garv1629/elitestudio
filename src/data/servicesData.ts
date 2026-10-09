export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  imageUrl: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "turnkey-interiors",
    number: "01",
    title: "Turnkey Interior Solutions",
    tagline: "From first sketch to final handover.",
    summary: "One accountable partner managing your complete home transformation. We coordinate architectural space planning, 3D visualization, civil alterations, electrical rewiring, plumbing, false ceiling, painting, joinery, and final deep-cleaning handover across Delhi NCR.",
    deliverables: [
      "Photorealistic 3D spatial visualization & curated material boards",
      "Structural & civil enhancements with dedicated site supervisor",
      "Precision electrical grid, false ceiling & architectural cove lighting",
      "End-to-end milestone tracking with weekly video progress reports"
    ],
    specs: [
      { label: "Execution Timeline", value: "45 – 75 Working Days" },
      { label: "Warranty", value: "10-Year Craftsmanship Guarantee" },
      { label: "Accountability", value: "Single Project Director" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "modular-kitchens",
    number: "02",
    title: "Modular Kitchens",
    tagline: "Designed around how you cook, live and move.",
    summary: "Ergonomically engineered for Indian cooking styles with zero aesthetic compromise. We configure marine-grade BWR/BWP plywood carcasses, German Blum soft-close motion hardware, anti-fingerprint acrylic or matte PU finishes, and heat-resistant quartz waterfall counters.",
    deliverables: [
      "Custom ergonomic work triangle (prep, cook, wash, store zones)",
      "German Blum & Hafele lifetime-warranted motion hardware",
      "Engineered quartz & granite surfaces with anti-stain nano sealers",
      "Seamless built-in appliance integration (hobs, ovens & concealed ducts)"
    ],
    specs: [
      { label: "Core Material", value: "100% Calibrated Marine Ply (IS 710)" },
      { label: "Hardware Grade", value: "Blum Antaro / Legrabox Soft-Close" },
      { label: "Warranty", value: "15-Year Structural & Hardware Warranty" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "custom-furniture",
    number: "03",
    title: "Custom Wooden Furniture",
    tagline: "Beds, TV units and furniture made specifically for your space.",
    summary: "Off-the-shelf furniture rarely fits your apartment's exact room dimensions. In our dedicated manufacturing facility, we craft custom hydraulic storage beds, floating media consoles, solid dining tables, and accent credenzas tailored to the millimeter.",
    deliverables: [
      "Custom upholstered headboards & hydraulic storage platform beds",
      "Cantilevered floating TV units with concealed wire management",
      "Solid teak, oak & smoked walnut dining suites crafted for family life",
      "Architectural display vitrines with warm 2700K integrated LED profiles"
    ],
    specs: [
      { label: "Wood Species", value: "Kiln-Dried Teak, Oak, Smoked Walnut" },
      { label: "Finish Quality", value: "Italian Zero-VOC Matte PU Polish" },
      { label: "Precision", value: "Millimeter-level In-House Joinery" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "home-decor",
    number: "04",
    title: "Home Décor & Tactile Surfaces",
    tagline: "Blinds · Wallpapers · Architectural Louvers.",
    summary: "Elevating the tactile boundaries of your home. We install architectural fluted louvers, acoustic wooden slats, breathable European textured wallpapers, and automated motorized day/night blinds controlled via remote or smart home systems.",
    deliverables: [
      "High-density charcoal & wooden louvers with seamless mitering",
      "Imported textured wallpapers with anti-peel moisture seal primers",
      "Motorized honeycomb, roller, and zebra blinds for thermal comfort",
      "Custom acoustic slat wall treatments for living zones and lounges"
    ],
    specs: [
      { label: "Wall Coverings", value: "Imported Belgian & German Vinyl/Textiles" },
      { label: "Louver Material", value: "High-Density Polystyrene & Natural Wood" },
      { label: "Motorization", value: "Somfy / Smart Automation" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
  },
  {
    id: "wardrobes",
    number: "05",
    title: "Wardrobes & Dressing Suites",
    tagline: "Walk-ins, sliding systems and floor-to-ceiling cabinetry.",
    summary: "Intelligently organized wardrobe architecture designed for effortless daily routines. Featuring floor-to-ceiling glass vitrines, fluted acoustic shutters, internal sensor illumination, integrated vanity dressing stations, and specialized velvet accessory organizers.",
    deliverables: [
      "Full-height floor-to-ceiling wardrobes with zero wasted top clearance",
      "Smoked bronze glass vitrine doors with slim anodized aluminium frames",
      "Internal sensor LED profiles that illuminate on touch or door open",
      "Custom jewelry drawers, tie pull-outs, and hydraulic wardrobe lifts"
    ],
    specs: [
      { label: "Core Structure", value: "BWP Grade Moisture-Sealed Marine Ply" },
      { label: "Shutter Types", value: "Fluted Wood, PU Matte & Tinted Glass" },
      { label: "Illumination", value: "Concealed 2700K Sensor Warm Lighting" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85"
  }
];

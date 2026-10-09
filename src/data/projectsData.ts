export interface ProjectRoom {
  name: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  typology: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  brief: string;
  direction: string;
  materials: string[];
  keyFeatures: string[];
  rooms: ProjectRoom[];
  testimonial?: {
    quote: string;
    client: string;
    society: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "the-modern-residence",
    title: "The Modern Residence",
    subTitle: "Contemporary / Warm Minimalism",
    typology: "3 BHK Apartment",
    location: "Greater Noida West",
    area: "1,850 sq ft",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief: "A warm contemporary sanctuary designed for a young tech leadership family in Greater Noida West. The brief demanded seamless open-plan living, decluttered sightlines, and generous custom carpentry that elevated daily living without sterile coldness.",
    direction: "Natural tactile materials, low-glare architectural cove lighting, fluted natural oak louvers, and an integrated modular kitchen with acoustic dampening.",
    materials: ["European White Oak", "Italian Bottochino Marble", "Textured Belgian Bouclé", "Brushed Champagne Brass"],
    keyFeatures: [
      "Concealed flush-to-wall storage and hidden pantry",
      "Ergonomic island modular kitchen with Blum servo-drive drawers",
      "Custom fluted acoustic panelling in living and master suite",
      "Motorised automated day/night solar screens"
    ],
    rooms: [
      {
        name: "Living & Dining Lounge",
        description: "Open-plan entertaining zone anchored by a sculptural stone plinth, fluted oak media wall, and bespoke low-slung seating.",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        details: ["Fluted oak panelling", "Micro-cement plinth", "Concealed 2700K ambient cove"]
      },
      {
        name: "Ergonomic Modular Kitchen",
        description: "Zero-handle anti-fingerprint matte PU cabinetry paired with engineered quartz countertops and built-in Bosch appliances.",
        imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        details: ["German Blum hardware", "Quartz waterfall edge", "Smoked glass accent vitrine"]
      },
      {
        name: "Master Suite & Walk-in",
        description: "Quiet hotel-grade retreat featuring an upholstered bouclé bed wall, fluted profile wardrobe with internal sensor lighting, and warm oak flooring.",
        imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        details: ["Full-height floor-to-ceiling wardrobe", "Acoustic fabric headboard", "Concealed ducted AC grilles"]
      },
      {
        name: "Study & Guest Studio",
        description: "Versatile work-from-home enclave with custom cantilevered oak desk, integrated cable management, and display shelving.",
        imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        details: ["Cantilevered desk joinery", "Warm LED profile shelving", "Textured acoustic wallpaper"]
      }
    ],
    testimonial: {
      quote: "The entire process felt effortless — from the first 3D render at Gaur World SmartStreet to the final handover. Our home feels like a calm luxury hotel every evening.",
      client: "Aarav & Meera S.",
      society: "Gaur City 2, Greater Noida West"
    }
  },
  {
    id: "the-quiet-home",
    title: "The Quiet Home",
    subTitle: "Japandi & Reclaimed Teak Architecture",
    typology: "4 BHK Apartment",
    location: "Jaypee Greens, Noida",
    area: "2,700 sq ft",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    aspect: "portrait",
    brief: "Crafted for a doctor couple seeking an antidote to chaotic city noise. The design marries Scandinavian restraint with handcrafted Indian teak wood accents and serene organic plaster textures.",
    direction: "Muted earth tones, hand-troweled limewash finishes, raw linen drapery, and low-profile artisanal wooden furniture manufactured in our in-house facility.",
    materials: ["Handcrafted Indian Teak", "Travertine Stone", "Limewash Wall Finish", "Organic Raw Linen"],
    keyFeatures: [
      "Handmade bespoke solid wood dining table for eight",
      "Shoji-inspired slatted sliding screens separating prayer and lounge spaces",
      "Full turnkey civil restructuring to expand natural light penetration",
      "Zero-toxic low-VOC finishes throughout all living and resting spaces"
    ],
    rooms: [
      {
        name: "Main Sanctuary Lounge",
        description: "Earthy, grounding living area with low teak seating, linen floor cushions, and textured limewash walls.",
        imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        details: ["Handcrafted solid teak furniture", "Limewash texture", "Custom linen sheers"]
      },
      {
        name: "Artisanal Kitchen & Pantry",
        description: "Monolithic travertine island with fluted timber base, concealed pull-out spices, and minimalist wall storage.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        details: ["Travertine slab island", "Solid wood joinery", "Concealed pantry organization"]
      },
      {
        name: "Primary Bedroom",
        description: "Low platform bed frame crafted from reclaimed teak with floating side ledges and soft dim-to-warm lighting.",
        imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
        details: ["Floating timber ledges", "Woven cane wardrobe shutters", "Soft indirect perimeter lighting"]
      }
    ],
    testimonial: {
      quote: "Elite Studios took complete turnkey responsibility. We didn't have to chase carpenters or vendors once. The precision in teak woodworking is world-class.",
      client: "Dr. Vikram & Dr. Radhika M.",
      society: "Jaypee Greens, Sector 128"
    }
  },
  {
    id: "the-courtyard-penthouse",
    title: "The Courtyard Penthouse",
    subTitle: "Sculptural Stone & Monolithic Brass",
    typology: "Duplex Penthouse",
    location: "Noida Expressway",
    area: "3,400 sq ft",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    aspect: "wide",
    brief: "A grand duplex with 18-foot ceilings designed for executive entertaining and family gatherings. The owners requested a commanding, high-contrast palette with bespoke statement pieces.",
    direction: "Deep charcoal backdrops, patinated bronze accents, fluted granite bar, custom architectural louvers, and museum-grade directional lighting.",
    materials: ["Nero Marquina Marble", "Smoked Eucalyptus Veneer", "Patinated Bronze", "Acoustical Slat Louvers"],
    keyFeatures: [
      "Double-height feature wall with bookmatched Italian stone slabs",
      "Concealed wet bar with motorized illuminated pocket doors",
      "Executive study with soundproof fluted acoustic wall panels",
      "Custom bespoke dining console with brass inlay"
    ],
    rooms: [
      {
        name: "The Grand Salon",
        description: "Double-height living space framed by floor-to-ceiling glass, architectural acoustic louvers, and a custom marble fireplace.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        details: ["18-ft bookmatched stone wall", "Bespoke brass chandeliers", "Architectural louver panelling"]
      },
      {
        name: "Cocktail Bar & Lounge",
        description: "Dedicated entertainment zone with temperature-controlled wine storage and backlit onyx counters.",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        details: ["Backlit onyx stone", "Bronze glass cabinetry", "Integrated sound system"]
      },
      {
        name: "Master Haven",
        description: "Private upper-level sanctuary with an en-suite dressing lounge and smoked eucalyptus wardrobes.",
        imageUrl: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
        details: ["Walk-in glass vitrine wardrobe", "Silk-blend carpet inlay", "Motorised blackout louvers"]
      }
    ],
    testimonial: {
      quote: "When guests enter our home, the reaction is unanimous awe. Elite Studios elevated our space into something truly timeless.",
      client: "Sameer K.",
      society: "ATS Knightsbridge, Expressway"
    }
  },
  {
    id: "the-earth-pavilion",
    title: "The Earth Pavilion",
    subTitle: "Travertine, Walnut & Tactile Linen",
    typology: "Private Luxury Villa",
    location: "Greater Noida",
    area: "4,200 sq ft",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    aspect: "landscape",
    brief: "Complete turnkey interior architecture for a newly constructed villa. The objective was grounding architectural purity, indoor-outdoor garden connectivity, and luxurious custom millwork.",
    direction: "Rich American walnut wood, fluted natural limestone, custom upholstered walls, and bespoke loose furniture handcrafted to the client's dimensions.",
    materials: ["American Walnut", "Silver Travertine", "Brushed Bronze", "Belgian Linen"],
    keyFeatures: [
      "Custom architectural staircase joinery and brass handrails",
      "Bespoke chef's kitchen + dirty utility pantry with commercial extraction",
      "Home theater with acoustic micro-perforated wood panels",
      "Turnkey garden terrace styling with weather-resistant custom loungers"
    ],
    rooms: [
      {
        name: "Courtyard Drawing Room",
        description: "Light-filled formal living area overlooking the private water body and internal courtyard.",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        details: ["Silver travertine floor", "American walnut millwork", "Floor-to-ceiling pivot windows"]
      },
      {
        name: "Family Dining Pavilion",
        description: "10-seater walnut dining suite framed by textured wall coverings and warm pendant illumination.",
        imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        details: ["Custom 10-seater solid table", "Louvered backdrop wall", "Dimmable architectural lighting"]
      },
      {
        name: "Presidential Bedroom Suite",
        description: "Expansive primary bedroom featuring custom leather and walnut headboard with integrated nightstands.",
        imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        details: ["Full leather headboard", "Engineered timber floors", "Custom motorized double blinds"]
      }
    ],
    testimonial: {
      quote: "Managing a 4,200 sq ft villa interior from scratch was daunting, but Elite Studios handled every civil tweak, carpentry detail, and decor element with total transparency.",
      client: "Rohan & Devika G.",
      society: "Jaypee Greens Villa, Greater Noida"
    }
  }
];

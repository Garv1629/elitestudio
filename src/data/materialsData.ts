export interface MaterialItem {
  id: string;
  category: string;
  label: string;
  sublabel: string;
  headline: string;
  description: string;
  imageUrl: string;
  finishes: string[];
  tactileFeel: string;
  recommendedUse: string;
  studioGuarantee: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "wood",
    category: "WOOD",
    label: "Natural Timber & Fine Veneers",
    sublabel: "European Oak · Burma Teak · Smoked Walnut",
    headline: "Natural warmth, organic grain, and generational durability.",
    description: "Every timber piece is hand-selected for grain consistency, moisture stabilization, and tactile depth. We finish our veneers with zero-sheen matte polyurethanes that protect against Delhi NCR climate humidity without concealing the wood's organic soul.",
    imageUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Wire-brushed European White Oak", "Natural Hand-rubbed Burma Teak", "Smoked Crown Cut Walnut", "Fluted Solid Ash Louvers"],
    tactileFeel: "Warm, textured micro-grain with velvety low-sheen touch",
    recommendedUse: "Custom wardrobes, fluted wall panelling, dining centerpieces, bespoke TV credenzas",
    studioGuarantee: "10-Year Anti-Termite & Moisture-Sealed Warranty"
  },
  {
    id: "stone",
    category: "STONE",
    label: "Architectural Marble & Engineered Quartz",
    sublabel: "Italian Botticino · Silver Travertine · Calacatta Quartz",
    headline: "Timeless geological permanence with zero maintenance compromise.",
    description: "From monolithic kitchen islands to sculptural bathroom vanities, we specify natural bookmatched slabs and high-durability engineered quartz treated with nano-pore sealers to resist turmeric, wine, and daily kitchen rigour.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Honed Italian Botticino", "Filled & Brushed Silver Travertine", "High-Definition Calacatta Gold Quartz", "Leather-finish Black Granite"],
    tactileFeel: "Cool, silk-matte planar smoothness with soft chamfered architectural edges",
    recommendedUse: "Modular kitchen countertops, waterfall breakfast bars, vanity plinths, fireplace surrounds",
    studioGuarantee: "Stain-Resistant Nano-Sealed Certification"
  },
  {
    id: "fabric",
    category: "FABRIC",
    label: "Tactile Weaves & Performance Textiles",
    sublabel: "Belgian Bouclé · Slub Linen · Performance Velvet",
    headline: "Softness that cushions life, woven for daily family endurance.",
    description: "We curate drapery and upholstery from premier European and boutique Indian mills. Our fabrics boast high Martindale rub counts (40,000+) while retaining the effortless drape and breathable touch essential for luxury living.",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Heavy Belgian Bouclé in Oatmeal", "Raw Slub Linen Sheers", "Hydrophobic Matte Micro-Velvet", "Woven Chenille Textured Twill"],
    tactileFeel: "Plush, cloud-soft textural dimension with breathable drape",
    recommendedUse: "Custom sofa suites, upholstered acoustic headboards, motorized sheer drapery, accent armchairs",
    studioGuarantee: "High-Rub Martindale Commercial Grade & Stain Guard"
  },
  {
    id: "glass",
    category: "GLASS",
    label: "Architectural & Reeded Glass",
    sublabel: "Fluted Vitrines · Smoked Bronze Mirrors · Lacquered Profiles",
    headline: "Luminous transparency that refracts ambient light.",
    description: "Used to create subtle spatial division without blocking daylight. Our fluted reeded glass doors and smoked bronze mirrors bring architectural depth and ambient reflections to modular wardrobes and kitchen displays.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Narrow-reeded Fluted Glass", "Smoked Bronze Architectural Mirror", "Low-Iron Extra Clear Glass", "Anti-fingerprint Matte Lacquered Glass"],
    tactileFeel: "Crisp, rhythmic linear ribs with softly diffused light transmission",
    recommendedUse: "Walk-in wardrobe shutters, kitchen display units, partition screens, backsplashes",
    studioGuarantee: "Tempered Safety Glass to EN 12150 Standards"
  },
  {
    id: "metal",
    category: "METAL",
    label: "PVD Stainless & Patinated Bronze",
    sublabel: "Champagne Gold · Anodized Charcoal · Aged Brass",
    headline: "Subtle metallic accents that ground modern luxury.",
    description: "We avoid gaudy chrome. Instead, our custom joinery integrates brushed champagne gold PVD trims, anodized charcoal aluminium framing, and hand-patinated brass hardware that develops a rich, noble character over decades.",
    imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    finishes: ["Brushed Champagne Gold PVD", "Satin Matte Black Anodized Aluminium", "Hand-patinated Antique Brass", "Gunmetal Inlay Profiles"],
    tactileFeel: "Subtle brushed grain with cool, weighty precision",
    recommendedUse: "Wardrobe slimline handles, kitchen profile channels, custom metal open shelving, door ironmongery",
    studioGuarantee: "PVD Scratch & Tarnish-Resistant Coating"
  },
  {
    id: "texture",
    category: "TEXTURE",
    label: "Architectural Louvers & Textured Surfaces",
    sublabel: "Charcoal Louvers · European Wallpapers · Venetian Plaster",
    headline: "Three-dimensional walls that replace flat painted plaster.",
    description: "Walls are the largest canvas in your home. We transform them with fluted polymer louvers, acoustic wooden slats, breathable imported textured wallpapers, and hand-applied Italian limewash plaster that catches sunlight naturally.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    finishes: ["High-Density Fluted Charcoal Louvers", "Imported Textured Textile Wallpapers", "Venetian Micro-plaster Limewash", "Acoustical Timber Wall Slats"],
    tactileFeel: "Sculptural reliefs that catch warm sidelight and dampen echo",
    recommendedUse: "Living room feature walls, bed backdrop panelling, foyer statement entrances, TV focal walls",
    studioGuarantee: "Seamless Pattern Alignment & Washable Surfaces"
  }
];

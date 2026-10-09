export interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
  society: string;
  location: string;
  scope: string;
  rating: number;
  highlight: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: "review-1",
    quote: "The entire process felt effortless — from the first design discussion at their Gaur World SmartStreet studio to the final handover. What impressed us most was how closely the finished apartment matched their 3D visualization. No hidden costs, no delays.",
    author: "Abhishek & Neha Verma",
    role: "Homeowners",
    society: "Gaur City 2, Greater Noida West",
    location: "Greater Noida West",
    scope: "3 BHK Turnkey Interiors + Modular Kitchen",
    rating: 5,
    highlight: "100% Match to 3D Visualization"
  },
  {
    id: "review-2",
    quote: "Elite Studios took complete turnkey responsibility for our 4 BHK. The modular kitchen with Blum fittings is absolute perfection, and the custom oak dining table they built in their workshop is the hero of our living room. True craftsmen.",
    author: "Prashant Singhal",
    role: "Architect & Homeowner",
    society: "Jaypee Greens, Sector 128",
    location: "Noida Expressway",
    scope: "4 BHK Turnkey Execution + Custom Joinery",
    rating: 5,
    highlight: "Exceptional Joinery & Carpentry"
  },
  {
    id: "review-3",
    quote: "We compared four design studios across Noida and Greater Noida West before choosing Elite Studios. Their material transparency and on-site supervisor made all the difference. Delivered our home in exactly 55 days as promised.",
    author: "Tanvi & Saurabh Goel",
    role: "Homeowners",
    society: "Ace City, Sector 1",
    location: "Greater Noida West",
    scope: "Complete 3 BHK Interiors & Wallpapers",
    rating: 5,
    highlight: "Delivered in 55 Days as Promised"
  },
  {
    id: "review-4",
    quote: "The fluted louvers, concealed lighting, and motorized blinds transformed our standard builder flat into a penthouse feeling. Having their studio right at Gaur World SmartStreet made coordination effortless.",
    author: "Manish Agarwal",
    role: "Homeowner",
    society: "Cherry County, Techzone IV",
    location: "Greater Noida West",
    scope: "Living Room, Kitchen & Master Suite",
    rating: 5,
    highlight: "Bespoke Hotel-Grade Luxury"
  }
];

export interface StudioInfo {
  name: string;
  tagline: string;
  eyebrow: string;
  address: {
    line1: string;
    line2: string;
    mall: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  hours: string;
  rating: {
    score: number;
    count: number;
    source: string;
  };
  serviceAreas: string[];
}

export const STUDIO_INFO: StudioInfo = {
  name: "Elite Studios",
  tagline: "Spaces worth coming home to.",
  eyebrow: "INTERIOR DESIGN · DELHI NCR",
  address: {
    line1: "Office No. 255, 4th Floor",
    line2: "Gaur World SmartStreet Mall",
    mall: "Gaur World SmartStreet",
    area: "Greater Noida West",
    city: "Greater Noida, Ghaziabad",
    state: "Uttar Pradesh",
    pincode: "201318",
    fullAddress: "Office no. 255, 4th Floor, Gaur World SmartStreet Mall, Greater Noida West, Greater Noida, Ghaziabad, Uttar Pradesh 201318",
    googleMapsUrl: "https://maps.google.com/?q=Gaur+World+SmartStreet+Mall+Greater+Noida+West"
  },
  phone: "+919818854320",
  displayPhone: "+91 98188 54320",
  whatsappNumber: "919818854320",
  email: "connect@elitestudios.co.in",
  hours: "Tuesday – Sunday: 10:30 AM – 8:00 PM (Monday by appointment)",
  rating: {
    score: 5.0,
    count: 17,
    source: "Verified Google Reviews"
  },
  serviceAreas: [
    "Greater Noida West (Noida Extension)",
    "Noida Expressway & Sector 128/137/150",
    "Jaypee Greens & Central Noida",
    "Indirapuram & Ghaziabad",
    "South Delhi & Gurugram (Select Residences)"
  ]
};

export const getWhatsAppUrl = (message?: string): string => {
  const defaultText = "Hello Elite Studios team, I came across your portfolio and would like to discuss interior design for my home in Delhi NCR.";
  const encodedText = encodeURIComponent(message || defaultText);
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodedText}`;
};

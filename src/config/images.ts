export const images = {
  "hero": {
    src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Professional home renovation project",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Modern kitchen renovation with marble countertops",
    width: 1200,
    height: 800,
  },
  "about": {
    src: "https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Craftsman working on home improvement",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Beautiful modern home exterior",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Luxurious modern bathroom renovation",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://images.pexels.com/photos/5691640/pexels-photo-5691640.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Professional tradesperson at work",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Modern home interior with natural light",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Elegant living room with contemporary design",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Clean organized workshop tools",
    width: 1200,
    height: 800,
  },
  "cta": {
    src: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Stunning home exterior at golden hour",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Modern home with landscaped garden",
    width: 1200,
    height: 800,
  },
  "gallery-4": {
    src: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Contemporary house front entrance",
    width: 1200,
    height: 800,
  },
} as const;
export type ImageSlot = keyof typeof images;
// ═══════════════════════════════════════════════════════════
//  SRI KRISHNA PG — CONTENT FILE
//  Edit this file to update text, photos, locations, etc.
//  No need to touch component files.
// ═══════════════════════════════════════════════════════════

// ───── BRAND COLOURS (from your logo) ─────
export const BRAND = {
  navy: '#1A2D6E',
  navyDeep: '#0E1F50',
  gold: '#D4A14A',
  goldBright: '#E8B84C',
  teal: '#0F8B8D',
  tealLight: '#2BA8AA',
  ink: '#1A1A2E',
  inkMuted: '#5C5C70',
  white: '#FFFFFF',
  offWhite: '#FAFAFA',
  grid: 'rgba(26, 45, 110, 0.06)',
};

// ───── CONTACT ─────
export const CONTACT = {
  phone: '+91 99227 45016',
  phoneTel: 'tel:+919922745016',
  whatsapp:
    'https://wa.me/919922745016?text=Hi%20Sri%20Krishna%20PG%2C%20I%27m%20interested%20in%20your%20PG%20accommodation%20in%20Baner.%20Please%20share%20details.',
  email: 'info@srikrishnapg.com',
  visitHours: '9 AM – 9 PM',
};

// ───── HERO CAROUSEL (top of page) ─────
// Replace `src` with your own room photos (put in public/images/ and use '/images/your-photo.jpg')
export const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'A home for students & professionals',
    title: 'Stay where Baner feels like home.',
    sub: 'Premium PG accommodation for boys & girls — across 4 carefully chosen locations in Baner, Pune.',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Furnished. Spacious. Calm.',
    title: 'Rooms designed for rest and focus.',
    sub: 'Single, double and triple sharing — every bed has its own space to study, sleep and unwind.',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Ghar jaisa khaana, daily',
    title: 'Three home-cooked meals a day.',
    sub: 'Hot, hygienic, vegetarian meals prepared in-house — the kind that reminds you of home.',
  },
  {
    src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Safe, 24×7',
    title: 'Security you can actually feel.',
    sub: 'CCTV-covered premises, biometric entry, and on-site caretakers — peace of mind for you and your family.',
  },
];

// ───── PHOTO GALLERY (NEW) ─────
// Add as many photos as you like, just keep the same structure.
// Categories: 'rooms' | 'common' | 'dining' | 'exterior'
export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80', category: 'rooms', caption: 'Single sharing room — Branch 1' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80', category: 'rooms', caption: 'Double sharing — spacious & furnished' },
  { src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80', category: 'rooms', caption: 'Triple sharing with study desks' },
  { src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=80', category: 'rooms', caption: 'AC room — Branch 3' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80', category: 'dining', caption: 'In-house dining hall' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80', category: 'dining', caption: 'Fresh, home-cooked thali' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80', category: 'dining', caption: 'Vegetarian meals daily' },
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80', category: 'common', caption: 'Common lounge area' },
  { src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80', category: 'common', caption: 'Study & co-work zone' },
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80', category: 'exterior', caption: 'Branch entrance' },
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80', category: 'exterior', caption: 'Building exterior' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', category: 'common', caption: 'Recreation area' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All photos' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'common', label: 'Common areas' },
  { id: 'dining', label: 'Dining' },
  { id: 'exterior', label: 'Exterior' },
];

// ───── AMENITIES ─────
// (Icon names match lucide-react — change in components if you want different icons)
export const AMENITIES = [
  { icon: 'Utensils', title: 'Home-cooked meals', desc: '3 vegetarian meals daily, prepared fresh in-house' },
  { icon: 'Wifi', title: 'High-speed Wi-Fi', desc: 'Unlimited fibre internet across all floors' },
  { icon: 'ShieldCheck', title: '24×7 security', desc: 'CCTV surveillance, biometric entry, caretakers on-site' },
  { icon: 'Snowflake', title: 'AC & Non-AC rooms', desc: 'Choose what fits your comfort and budget' },
  { icon: 'Droplets', title: 'Hot water + RO', desc: 'Round-the-clock hot water and purified drinking water' },
  { icon: 'Zap', title: 'Power backup', desc: 'Inverter & generator backup so you never miss a deadline' },
  { icon: 'Shirt', title: 'Laundry & housekeeping', desc: 'Washing machine access and daily room cleaning' },
  { icon: 'Coffee', title: 'Common lounges', desc: 'TV, refrigerator and chill-out spaces on every floor' },
];

// ───── FOOD / MEALS (NEW) ─────
export const FOOD = {
  meals: [
    { name: 'Breakfast', time: '7:30 – 9:30 AM', items: 'Poha, upma, paratha, idli, dosa, sandwich — rotating daily', icon: 'Sunrise' },
    { name: 'Lunch', time: '12:30 – 2:30 PM', items: 'Dal, sabzi, chapati, rice, salad, pickle & buttermilk', icon: 'Sun' },
    { name: 'Dinner', time: '8:00 – 10:00 PM', items: 'Dal, sabzi, chapati, rice — sweet treats on weekends', icon: 'Moon' },
  ],
  highlights: [
    'Pure vegetarian, hygienic kitchen',
    'In-house chef — no third-party tiffin',
    'Weekly menu rotation, no repetition',
    'Special meals on festivals & birthdays',
  ],
  image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
};

// ───── ROOM TYPES ─────
export const ROOMS = [
  {
    type: 'Single Sharing',
    desc: 'A room of your own. Ideal for working professionals who need quiet and privacy.',
    features: ['Private bed & wardrobe', 'Personal study desk', 'AC option available', 'Attached / shared bath'],
  },
  {
    type: 'Double Sharing',
    desc: 'Most popular. Share with one roommate — a great balance of space and value.',
    features: ['2 beds with side tables', 'Twin wardrobes', 'Spacious layout', 'AC option available'],
  },
  {
    type: 'Triple Sharing',
    desc: 'Most affordable. Perfect for students new to the city, especially in groups.',
    features: ['3 beds with storage', 'Individual lockers', 'Lively, social vibe', 'Best value for money'],
  },
];

// ───── PRICING (NEW) ─────
export const PRICING = {
  intro:
    'Transparent, all-inclusive monthly rent. For current rates at each branch, please call or WhatsApp us — we will share the latest pricing instantly.',
  included: [
    'Furnished room (bed, mattress, wardrobe, study desk)',
    '3 home-cooked vegetarian meals daily',
    'Unlimited high-speed Wi-Fi',
    'Electricity (fair use, up to 100 units)',
    'Hot water & RO drinking water',
    'Daily housekeeping & garbage pickup',
    '24×7 security with CCTV and biometric entry',
    'Access to common lounges, TV & refrigerator',
  ],
  notIncluded: [
    'AC charges (separate for AC rooms)',
    'Laundry detergent (machine is free to use)',
    'Personal toiletries',
    'Refundable security deposit (one-time)',
  ],
};

// ───── HOW IT WORKS (NEW) ─────
export const STEPS = [
  { num: '01', title: 'Book a Visit', desc: 'Call or WhatsApp us to schedule a tour at your preferred branch — usually same day or next day.' },
  { num: '02', title: 'Take the Tour', desc: 'Walk through the rooms, meet our caretakers, see the kitchen, and ask any question you like.' },
  { num: '03', title: 'Pick Your Room', desc: 'Choose single, double or triple sharing. AC or non-AC. We will show you whatever is available.' },
  { num: '04', title: 'Move In', desc: 'Quick paperwork, refundable deposit, and you are home. Bring just your bags — we have the rest.' },
];

// ───── LOCATIONS ─────
export const LOCATIONS = [
  { name: 'Sri Krishna PG — Branch 1', area: 'Baner, Pune', tag: 'Boys & Girls', url: 'https://maps.app.goo.gl/N2HtxncdvZnSS7tz8?g_st=aw' },
  { name: 'Sri Krishna PG — Branch 2', area: 'Baner, Pune', tag: 'Boys & Girls', url: 'https://maps.app.goo.gl/sbyK7tx2WVDXUHE18?g_st=aw' },
  { name: 'Sri Krishna PG — Branch 3', area: 'Baner, Pune', tag: 'Boys & Girls', url: 'https://maps.app.goo.gl/wbUgUvqQ3yYsuS5W9?g_st=aw' },
  { name: 'Sri Krishna PG — Branch 4', area: 'Baner, Pune', tag: 'Boys & Girls', url: "https://www.google.com/maps/place/18%C2%B033'18.6%22N+73%C2%B046'01.8%22E/@18.5550032,73.7666972,18.35z" },
];

// ───── NEARBY LANDMARKS (NEW) ─────
export const LANDMARKS = [
  { name: 'Hinjewadi IT Park (Phase 1)', dist: '5 km', type: 'Work', icon: 'Briefcase' },
  { name: 'Balewadi High Street', dist: '2 km', type: 'Lifestyle', icon: 'ShoppingBag' },
  { name: 'Aundh', dist: '3 km', type: 'Lifestyle', icon: 'Coffee' },
  { name: 'Symbiosis Vishwabhavan', dist: '4 km', type: 'Education', icon: 'GraduationCap' },
  { name: 'D-Mart Baner', dist: '500 m', type: 'Daily needs', icon: 'ShoppingCart' },
  { name: 'Sahyadri Hospital', dist: '1.5 km', type: 'Healthcare', icon: 'Heart' },
  { name: 'Mumbai-Pune Expressway', dist: '4 km', type: 'Transport', icon: 'Car' },
  { name: 'Pune Railway Station', dist: '12 km', type: 'Transport', icon: 'Train' },
];

// ───── TESTIMONIALS ─────
export const TESTIMONIALS = [
  {
    name: 'Aditi Sharma',
    role: 'IT Professional, Hinjewadi',
    text: 'I moved into Sri Krishna PG when I shifted from Delhi for work. The food honestly tastes like my mom\'s cooking, and the caretaker aunty checks on us like family. Two years in and I\'m still here.',
    rating: 5,
  },
  {
    name: 'Rohan Patil',
    role: 'MBA Student, Symbiosis',
    text: 'Wi-Fi never drops during my online classes, hot water is actually hot in winter, and Baner has everything within walking distance. The price-to-value ratio is honestly unbeatable.',
    rating: 5,
  },
  {
    name: 'Priya Deshmukh',
    role: 'Software Engineer',
    text: 'As a girl staying in a new city, safety was my parents\' biggest worry. The biometric entry and CCTV made them comfortable in one visit. Plus the rooms are bigger than what I saw in 3 other PGs.',
    rating: 5,
  },
  {
    name: 'Karan Mehta',
    role: 'Product Designer',
    text: 'I\'ve stayed in 4 PGs in Pune over 5 years. Sri Krishna is the first one where I actually feel at home. The owners genuinely care — not just collecting rent.',
    rating: 5,
  },
];

// ───── FAQ ─────
export const FAQS = [
  {
    q: 'What is included in the monthly rent?',
    a: 'Your rent covers the room, 3 home-cooked vegetarian meals daily, Wi-Fi, electricity (up to a fair limit), hot water, RO drinking water, daily housekeeping, and 24×7 security. There are no hidden charges.',
  },
  {
    q: 'Do you accommodate both boys and girls?',
    a: 'Yes. We have dedicated floors and separate entries for boys and girls across all 4 of our Baner locations. Each branch is fully equipped for both.',
  },
  {
    q: 'Is there a security deposit?',
    a: 'Yes, we collect a refundable security deposit (typically equal to one month\'s rent) at the time of move-in. It is fully refunded at check-out after a quick room inspection.',
  },
  {
    q: 'What is the notice period to vacate?',
    a: 'We ask for a 30-day notice before vacating. This helps us plan housekeeping and the next resident\'s move-in smoothly.',
  },
  {
    q: 'Can I visit the PG before booking?',
    a: 'Absolutely — and we strongly recommend it. Tap "Book a Visit" or message us on WhatsApp and we will schedule a walk-through at the branch closest to your workplace or college.',
  },
  {
    q: 'Are guests allowed?',
    a: 'Day visitors are welcome in our common areas with prior intimation. Overnight stays are not permitted, to keep the environment safe and comfortable for everyone.',
  },
  {
    q: 'Is the food really included? What if I don\'t like the menu?',
    a: 'Yes, all 3 meals are included — no extra cost. The menu rotates weekly and we take feedback seriously. If you have dietary preferences, just tell our caretaker.',
  },
  {
    q: 'Do I need to bring my own bedding?',
    a: 'No. We provide bed, mattress, pillow and bedsheets. You only need to bring your personal items and clothes.',
  },
];

// ───── STATS ─────
export const STATS = [
  { num: 4, suffix: '+', label: 'Baner Locations' },
  { num: 500, suffix: '+', label: 'Happy Residents' },
  { num: 24, suffix: '/7', label: 'Security & Support' },
  { num: 8, suffix: '+', label: 'Years of Trust' },
];

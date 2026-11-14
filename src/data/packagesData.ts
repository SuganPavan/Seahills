export interface ResortPackage {
  slug: string;
  badge: string;
  category: 'Honeymoon' | 'Adventure' | 'Family' | 'Luxury';
  title: string;
  duration: string;
  destinations: string;
  price: string;
  priceNote: string;
  image: string;
  summary: string;
  highlights: string[];
  stays: string[];
  itinerary: { day: string; detail: string }[];
}

export const RESORT_PACKAGES: ResortPackage[] = [
  {
    slug: 'couples-choice-romantic-escape',
    badge: 'Couples Choice',
    category: 'Honeymoon',
    title: 'Couples Choice · Romantic Escape',
    duration: '6 Nights · 7 Days',
    destinations: 'Port Blair · Havelock · Neil Island',
    price: '₹34,900',
    priceNote: 'per couple · CP Breakfast Plan & ferry transfers',
    image: '/images/facilities/dining.jpg',
    summary:
      'Tailored for newlyweds and couples—blending Sea Hills Port Blair suites & La Bougainvillea bathtub rooms at Havelock with candlelight dinners under the stars and sunset evenings at Anubis Bar.',
    highlights: [
      'Candlelight Dinner Under the Stars',
      'La Bougainvillea Room with Private Bathtub',
      'Sunset Cocktails at Anubis Bar',
      'Port Blair · Havelock · Neil Island Ferries',
    ],
    stays: ['Sea Hills Port Blair · Premium Suite', 'Sea Hills Havelock · La Bougainvillea'],
    itinerary: [
      { day: 'Day 1', detail: 'Port Blair arrival, Corbyn’s Cove sunset & Cellular Jail Sound and Light Show.' },
      { day: 'Day 2', detail: 'Morning ferry to Havelock Island, check-in & Radhanagar Beach sunset.' },
      { day: 'Day 3', detail: 'Elephant Beach water sports & romantic candlelight dinner under the stars.' },
      { day: 'Day 4', detail: 'Kalapathar Beach sunrise, Alfalfa Spa & tropical pool relaxation.' },
      { day: 'Day 5', detail: 'Ferry to Neil Island (Natural Bridge & Laxmanpur Beach) then return to Port Blair.' },
      { day: 'Day 6', detail: 'Ross Island & North Bay coral tour, evening dining at Cleopatra Restaurant & Anubis Bar.' },
      { day: 'Day 7', detail: 'Complimentary buffet breakfast & private airport drop-off.' },
    ],
  },
  {
    slug: 'island-hopping-adventure',
    badge: 'Andaman Adventure',
    category: 'Adventure',
    title: 'Island Hopping Adventure',
    duration: '4 Nights · 5 Days',
    destinations: 'Port Blair · Havelock · Elephant Beach',
    price: '₹26,500',
    priceNote: 'per guest · CP Plan, ferries & water sports',
    image: '/images/facilities/pool-bright.jpg',
    summary:
      'Pair exhilarating Andaman water adventures—Sea Walk, Scuba, Parasailing & Jet Ski—with spacious 410 sq. ft. Bamboo Saa rooms, Cleopatra dining, and palm-fringed pools.',
    highlights: [
      'Sea Walk & Parasailing at North Bay / Elephant Beach',
      '410 sq. ft. Bamboo Saa Forest & Pool-View Stay',
      'Dining at Cleopatra Restaurant & Anubis Bar',
      'High-Speed Inter-Island Ferry Transfers',
    ],
    stays: ['Sea Hills Port Blair · Premium Room', 'Sea Hills Havelock · Bamboo Saa (410 sq. ft.)'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrival in Port Blair, Cellular Jail visit & Corbyn’s Cove Beach.' },
      { day: 'Day 2', detail: 'Ferry to Havelock Island & Parasailing / Jet Ski at Elephant Beach.' },
      { day: 'Day 3', detail: 'Scuba discovery / snorkelling, Radhanagar Beach & poolside unwind.' },
      { day: 'Day 4', detail: 'Return to Port Blair, Egyptian-themed dinner at Cleopatra & Anubis Bar.' },
      { day: 'Day 5', detail: 'Buffet breakfast & smooth airport transfer.' },
    ],
  },
  {
    slug: 'andaman-family-tour-special',
    badge: 'Family Holiday',
    category: 'Family',
    title: 'Andaman Family Tour Special',
    duration: '5 Nights · 6 Days',
    destinations: 'Port Blair · Havelock · Ross Island',
    price: '₹42,000',
    priceNote: 'per family · CP Plan & private AC sightseeing',
    image: '/images/facilities/restaurant.jpg',
    summary:
      'Designed for families—featuring spacious Bamboo Saa rooms (accommodating up to 4 guests), dedicated children’s swimming pool at Havelock, open-air buffets, and guided heritage tours.',
    highlights: [
      '410 sq. ft. Family Rooms (Up to 4 Guests)',
      'Outdoor Pool & Dedicated Kids’ Pool',
      'Cleopatra Multi-Cuisine Buffets',
      'Cellular Jail, Ross Island & Radhanagar Beach',
    ],
    stays: ['Sea Hills Port Blair · Premium Deluxe', 'Sea Hills Havelock · Bamboo Saa Room'],
    itinerary: [
      { day: 'Day 1', detail: 'Port Blair arrival, Cellular Jail, Corbyn’s Cove & Sound and Light Show.' },
      { day: 'Day 2', detail: 'Morning ferry to Havelock Island & Radhanagar Beach family sunset.' },
      { day: 'Day 3', detail: 'Glass-bottom boat ride at Elephant Beach & kids’ pool afternoon.' },
      { day: 'Day 4', detail: 'Leisure morning amidst Havelock greenery & return ferry to Port Blair.' },
      { day: 'Day 5', detail: 'Ross Island heritage walk & farewell multi-cuisine dinner at Cleopatra.' },
      { day: 'Day 6', detail: 'Buffet breakfast & airport transfer.' },
    ],
  },
  {
    slug: 'pearl-of-the-andamans',
    badge: 'Signature Luxury',
    category: 'Luxury',
    title: 'Pearl of the Andamans',
    duration: '6 Nights · 7 Days',
    destinations: 'Port Blair · Havelock · Baratang · Ross',
    price: '₹54,500',
    priceNote: 'per guest · Sea View Suite & private chauffeur',
    image: '/images/facilities/bar.jpg',
    summary:
      'Our flagship Andaman circuit uniting Sea View Suites at Middle Point Port Blair, La Bougainvillea bathtub rooms at Havelock, Alfalfa Spa wellness, and Baratang Caves.',
    highlights: [
      'Sea View Suites & La Bougainvillea Bathtub Rooms',
      'Alfalfa Spa & Anubis Bar Privileges',
      'Baratang Limestone Caves & Ross Island',
      'Priority Ferry & Airport Concierge',
    ],
    stays: ['Sea Hills Port Blair · Sea View Suite', 'Sea Hills Havelock · La Bougainvillea'],
    itinerary: [
      { day: 'Day 1–2', detail: 'Port Blair arrival, Ross Island & Egyptian-themed dining at Cleopatra.' },
      { day: 'Day 3', detail: 'Private expedition to Baratang Limestone Caves & mangrove creeks.' },
      { day: 'Day 4–5', detail: 'Havelock retreat: scuba, candlelight dinner, Alfalfa Spa & pool leisure.' },
      { day: 'Day 6', detail: 'Return to Port Blair, sunset spirits at Anubis Bar & farewell feast.' },
      { day: 'Day 7', detail: 'VIP airport departure.' },
    ],
  },
  {
    slug: 'island-time-retreat',
    badge: 'Quick Escape',
    category: 'Luxury',
    title: 'Island Time Retreat',
    duration: '3 Nights · 4 Days',
    destinations: 'Port Blair & Havelock Island',
    price: '₹18,900',
    priceNote: 'per guest · CP Plan & ferry transfers',
    image: '/frames/rooms/frame_0060.webp',
    summary:
      'A crisp 4-day island escape connecting Sea Hills Port Blair (near Marine Drive) with Sea Hills Havelock—complete with breakfast buffets, Radhanagar sunset, and Anubis Bar.',
    highlights: [
      'Both Port Blair & Havelock Resorts',
      'Complimentary Buffet Breakfast (CP Plan)',
      'Cleopatra Dining & Anubis Bar Access',
      'Cellular Jail & Radhanagar Beach',
    ],
    stays: ['Sea Hills Port Blair · Premium Room', 'Sea Hills Havelock · Bamboo Saa'],
    itinerary: [
      { day: 'Day 1', detail: 'Port Blair arrival, Cellular Jail Light & Sound Show & Cleopatra dinner.' },
      { day: 'Day 2', detail: 'Ferry to Havelock Island & sunset at Radhanagar Beach.' },
      { day: 'Day 3', detail: 'Morning pool leisure, return ferry to Port Blair & Anubis Bar.' },
      { day: 'Day 4', detail: 'Buffet breakfast & airport drop-off.' },
    ],
  },
  {
    slug: 'havelock-reef-wellness',
    badge: 'Island Wellness',
    category: 'Honeymoon',
    title: 'Havelock La Bougainvillea Retreat',
    duration: '3 Nights · 4 Days',
    destinations: 'Havelock Island (Swaraj Dweep)',
    price: '₹22,800',
    priceNote: 'per guest · ferry & breakfast included',
    image: '/frames/rooms/frame_0105.webp',
    summary:
      'Unwind in our 410 sq. ft. La Bougainvillea rooms with private soaking bathtubs and forest views—steps from Govind Nagar Beach and our palm-fringed outdoor pool.',
    highlights: [
      'La Bougainvillea Room (410 sq. ft. + Bathtub)',
      'Outdoor Pool & Children’s Pool Access',
      'Candlelight Dining Under the Stars',
      'Radhanagar & Govind Nagar Beaches',
    ],
    stays: ['Sea Hills Havelock · La Bougainvillea Room'],
    itinerary: [
      { day: 'Day 1', detail: 'Morning ferry to Havelock, check-in & sunset at Radhanagar Beach.' },
      { day: 'Day 2', detail: 'Elephant Beach snorkelling & candlelight dinner under the stars.' },
      { day: 'Day 3', detail: 'Morning by the pool, Kalapathar Beach & private bathtub soak.' },
      { day: 'Day 4', detail: 'Buffet breakfast & return ferry to Port Blair.' },
    ],
  },
];

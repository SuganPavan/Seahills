export interface ResortPackage {
  slug: string;
  badge: string;
  category: 'Havelock' | 'Port Blair' | 'Both Islands' | 'Honeymoon' | 'Adventure' | 'Family';
  title: string;
  subtitle: string;
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

export interface IslandPropertyGuide {
  id: 'havelock' | 'port-blair';
  name: string;
  tagline: string;
  badge: string;
  totalRooms: string;
  videoUrl: string;
  galleryUrl: string;
  howToReach: {
    mode: string;
    title: string;
    details: string[];
  }[];
  roomCategories: {
    count: string;
    name: string;
    size: string;
    viewOrFeature: string;
    highlights: string[];
  }[];
  diningAndEvents: {
    name: string;
    type: string;
    capacity: string;
    description: string;
  }[];
  nearbyPlaces: {
    place: string;
    distance: string;
    driveTime?: string;
    note?: string;
  }[];
  activities: string[];
  facilities: string[];
}

export const ISLAND_PROPERTY_GUIDES: Record<'havelock' | 'port-blair', IslandPropertyGuide> = {
  havelock: {
    id: 'havelock',
    name: 'Sea Hills Resort · Havelock (Swaraj Dweep)',
    tagline: 'Experience the Ultimate Luxury Retreat on Havelock Island',
    badge: 'Pristine Beaches · 40 Luxury Rooms',
    totalRooms: '40 Rooms (410 Sq. Ft. Each)',
    videoUrl: 'https://youtu.be/XBJrHd9-nEw',
    galleryUrl: 'https://drive.google.com/drive/folders/1tNaTqewEcZEozCv-0c2Kxs5VcoCHZKjh',
    howToReach: [
      {
        mode: 'Private Ferry',
        title: 'Makruzz / Green Ocean / Nautica',
        details: ['1.5 hrs to Havelock', 'Faster & Comfy luxury catamarans', 'Subject to weather conditions'],
      },
      {
        mode: 'Govt Ferry',
        title: 'Morning till 2:00 PM',
        details: ['2.5 hrs to Havelock', 'Budget Friendly!', 'Cabs easily available outside Jetty (Rs 400–500 per way)'],
      },
    ],
    roomCategories: [
      {
        count: '25 Rooms',
        name: 'Bamboo Saa Rooms',
        size: '410 Sq. Ft.',
        viewOrFeature: 'Private Balcony · Forest / Pool View*',
        highlights: [
          'Elegant cane-inspired interiors & sound-proofing',
          '40 Inch Smart TV, Wi-Fi & Noiseless Duct AC',
          'Work Desk, Tea/Coffee Kettle, RO Water & In-room Safe',
          'Seating Area, Blackout Curtains & Daily Housekeeping',
        ],
      },
      {
        count: '15 Rooms',
        name: 'La Bougainvillea with Bathtub',
        size: '410 Sq. Ft.',
        viewOrFeature: 'Private Balcony + Bathtub · Forest / Pool View*',
        highlights: [
          'Premium soaking bathtub in room & private balcony',
          '40 Inch Smart TV, Noiseless Duct AC & Mini Bar (chargeable)',
          'Cotton Robes, Pool Towels & Wall-mounted Makeup Mirror',
          'Sound-proofing technology, Work Desk & Seating Area',
        ],
      },
    ],
    diningAndEvents: [
      {
        name: 'Kramuka Restaurant',
        type: 'Multi-Cuisine · Fine Dining',
        capacity: '50 – 80 Pax',
        description:
          'Savor Indian, Continental, Chinese, and authentic local Andaman flavours — ideal for romantic dinners, family gatherings, and celebrations.',
      },
      {
        name: 'Zriya Banquet & Conference Hall',
        type: 'Meet · Gather · Celebrate (1150 Sq. Ft. · 15m × 8m)',
        capacity: 'Boardroom: 30–40 | U-Shape: 40–50 | Cluster: 50–60 | Theatre: 70–80 Pax',
        description:
          'Equipped on request with mike, projector screen, loudspeaker, and stationery for corporate meetings or social gatherings.',
      },
    ],
    nearbyPlaces: [
      { place: 'Elephant Beach Trekking Point', distance: '2.4 Kms', driveTime: 'Boat or trek', note: 'Vibrant coral reefs & water sports' },
      { place: 'Primary Health Center', distance: '2.9 Kms', driveTime: '5 mins' },
      { place: 'Main Market', distance: '3.0 Kms', driveTime: '5–10 mins' },
      { place: 'Scuba Diving Spot', distance: '3.5 Kms', driveTime: '5–10 mins' },
      { place: 'Govind Nagar Beach', distance: '3.6 Kms', driveTime: '5–10 mins', note: 'Peaceful sunrise & sunset beach' },
      { place: 'Havelock Jetty', distance: '4.5 – 5 Kms', driveTime: '10–15 mins' },
      { place: 'Radhanagar Beach', distance: '6.0 Kms', driveTime: '10–15 mins', note: 'World-famous white sand beach' },
      { place: 'Kalapathar Beach', distance: '7.0 Kms', driveTime: '10–15 mins', note: 'Scenic black rocks & photography' },
    ],
    activities: [
      'Scuba Diving',
      'Snorkeling',
      'Kayaking',
      'Glass Bottom Boat',
      'Jet Ski',
      'Banana Boat Ride',
      'Speed Boat Ride',
      'Fishing Trips',
      'Evening Bonfire with Music',
    ],
    facilities: [
      'Outdoor Swimming Pool',
      'Garden & Sit-out Area',
      'Bonfire Area',
      'Kids Play Area',
      'Travel Desk',
      'Kramuka Restaurant & Room Service',
      'Power Backup & CCTV Security',
      'Free Wi-Fi, Laundry & Parking',
    ],
  },
  'port-blair': {
    id: 'port-blair',
    name: 'Sea Hills Hotel · Port Blair (Sri Vijaya Puram)',
    tagline: 'Your Gateway to the Andaman Islands',
    badge: 'The Gateway · 21 Boutique Rooms & Suites',
    totalRooms: '21 Rooms & Suites (269 – 452 Sq. Ft.)',
    videoUrl: 'https://youtu.be/HaWeEUTotFs',
    galleryUrl: 'https://drive.google.com/drive/folders/1Pb0JKoTf_H2h50Qe13a_2F_mtYLybePP?usp=sharing',
    howToReach: [
      {
        mode: 'By Air',
        title: 'Veer Savarkar Airport (Port Blair)',
        details: ['3.9 Kms Away (10–15 Minutes)', 'Taxis easily available outside the Airport', 'Airport transfer assistance available'],
      },
      {
        mode: 'By Sea',
        title: 'Port Blair Jetty (Phoenix Bay Jetty)',
        details: ['Approx. 3.2 Kms (10–15 Minutes)', 'Direct ferry connections to Havelock, Neil & other Islands'],
      },
    ],
    roomCategories: [
      {
        count: '05 Rooms',
        name: 'Standard Room',
        size: '269 Sq. Ft.',
        viewOrFeature: 'King Bed · Max 3 Guests (2A + 1C) · EP ₹5,309 / CP ₹5,579 (10% Direct Off)',
        highlights: [
          'Cosily designed 269 sq. ft. room with wooden furniture & luxurious King size bed (Rack: ₹5,899 EP / ₹6,199 CP)',
          'Complimentary RO Water & Snacks Basket, Mini Fridge, Kettle, Work Desk, Blackout Curtains, TV & Wi-Fi',
        ],
      },
      {
        count: '05 Rooms',
        name: 'Premium Deluxe with Bathtub',
        size: '323 Sq. Ft.',
        viewOrFeature: 'King Bed · Max 4 Guests (3A + 2C) · Balcony & Bathtub · EP ₹6,659 / CP ₹6,839',
        highlights: [
          'Private balcony, soothing bathtub, sofa seating area & pillow menu (Rack: ₹7,399 EP / ₹7,599 CP)',
          'Complimentary Snacks Basket & RO Water, HD TV, Noiseless Duct AC, Mini Fridge & Work Desk',
        ],
      },
      {
        count: '06 Suites',
        name: 'Premium Suite with Bathtub - Pool View',
        size: '366 Sq. Ft. (323–366 Sq. Ft.)',
        viewOrFeature: 'King Bed · Max 4 Guests (3A + 2C) · Pool View Balcony & Bathtub · EP ₹8,009 / CP ₹8,369',
        highlights: [
          'Private balcony overlooking the sparkling pool, King size bed & soothing bathtub (Rack: ₹8,899 EP / ₹9,299 CP)',
          'Minibar, Pillow Menu, Sofa & Centre Table, Cable TV, Kettle, Slippers & Complimentary Snacks Basket',
        ],
      },
      {
        count: '04 Suites',
        name: 'Premium Suite with Bathtub - Sea View',
        size: '366 Sq. Ft. (323–366 Sq. Ft.)',
        viewOrFeature: 'King Bed · Max 4 Guests (3A + 2C) · Sea View Balcony & Bathtub · EP/CP ₹8,369',
        highlights: [
          'Expansive glass doors & balcony framing stunning sea views + blissful bathtub (Rack: ₹9,299 EP/CP)',
          'Pillow Menu, Sofa & Centre Table, Work Desk, Mini Fridge, Laundry Service & Complimentary Snacks Basket',
        ],
      },
      {
        count: '01 Suite',
        name: 'VIP Lounge with Bathtub - Sea View',
        size: '450–452 Sq. Ft.',
        viewOrFeature: 'King Bed · Max 4 Guests (3A + 2C) · Lounge, Dining Area, Sea View Balcony & Bathtub · EP ₹10,619 / CP ₹10,799',
        highlights: [
          'Separate Lounge (Sofa & Centre Table), Dining Area, Sea View Balcony, Shower Cubicle & Bathtub (Rack: ₹11,799 EP / ₹11,999 CP)',
          'Direct Booking Policy: 10% Off OTA Prices · Book with 50% Payment & Pay 50% at Check-In',
        ],
      },
    ],
    diningAndEvents: [
      {
        name: 'Cleopatra Restaurant',
        type: 'Egyptian Heritage Multi-Cuisine Dining',
        capacity: '30 – 50 Pax',
        description:
          'Inspired by ancient Egyptian heritage with authentic friezes and sculpture emboss — serving contemporary multi-cuisine delicacies.',
      },
      {
        name: 'Anubis Rooftop Lounge Bar',
        type: 'Rooftop Lounge Bar · Scenic City View',
        capacity: 'Rooftop Lounge',
        description:
          'Unwind with premium cocktails, relaxing ambience, and a panoramic nighttime overview of Port Blair city.',
      },
      {
        name: 'Conference & Business Events',
        type: 'Convertible Conference Hall',
        capacity: '30 – 50 Pax',
        description:
          'Restaurant converts into a Conference Hall on request with microphone, projector screen, loudspeaker, and stationery support.',
      },
    ],
    nearbyPlaces: [
      { place: 'Aberdeen Bazaar (Main Market)', distance: '2.0 Kms', driveTime: '5–10 mins' },
      { place: 'Water Sports Complex', distance: '2.0 Kms', driveTime: '5–10 mins' },
      { place: 'Cellular Jail', distance: '2.7 Kms', driveTime: '7–10 mins', note: 'Historic National Memorial & Light Show' },
      { place: 'GB Pant Hospital', distance: '2.9 Kms', driveTime: '7–10 mins' },
      { place: 'Port Blair Jetty (Phoenix Bay)', distance: '3.2 Kms', driveTime: '10–15 mins' },
      { place: 'Veer Savarkar Airport', distance: '3.9 Kms', driveTime: '10–15 mins' },
      { place: "Corbyn's Cove Beach", distance: '4.0 Kms', driveTime: '10–15 mins' },
      { place: 'Day Trips: Mount Harriet (14.5 Km) · Chidiyatapu (23.3 Km) · Wandoor (25.8 Km) · Baratang (107.9 Km)', distance: 'Day Excursions' },
    ],
    activities: [
      'Candlelight Dinner by the Pool / Rooftop',
      'Honeymoon Room Decorations',
      'Outdoor Swimming Pool with Baby Pool',
      'Anubis Rooftop Evening Cocktails',
      'Cellular Jail & Corbyn’s Cove Excursions',
      'Chidiyatapu, Wandoor, Mount Harriet & Baratang Day Trips',
    ],
    facilities: [
      'Cleopatra Multi-Cuisine Restaurant',
      'Anubis Rooftop Lounge Bar',
      'Outdoor Swimming Pool with Baby Pool',
      '24×7 Reception, Elevator / Lift & Concierge',
      'Airport Transfers, Ferry Info & Sightseeing Desk',
      'In-Room Dining, Laundry, Free Wi-Fi & Power Backup',
    ],
  },
};

export const OFFICIAL_RESORT_DOSSIER = ISLAND_PROPERTY_GUIDES;

export const RESORT_PACKAGES: ResortPackage[] = [
  {
    slug: 'havelock-pristine-beach-retreat',
    badge: 'Swaraj Dweep Retreat',
    category: 'Havelock',
    title: 'Havelock Island · Pristine Beaches',
    subtitle: 'Pristine Beaches',
    duration: '3 Nights · 4 Days',
    destinations: 'Havelock Island (Swaraj Dweep)',
    price: '₹22,800',
    priceNote: 'per guest · 410 Sq. Ft. Rooms, Kramuka Dining & Ferry Assist',
    image: '/frames/Destination/frame_0055.webp',
    summary:
      'Experience the ultimate luxury retreat at Sea Hills Resort Havelock — featuring 410 sq. ft. Bamboo Saa & La Bougainvillea bathtub rooms, Kramuka fine dining, evening bonfires, and easy access to Radhanagar (6 km) & Elephant Beach (2.4 km).',
    highlights: [
      '25 Bamboo Saa & 15 La Bougainvillea Bathtub Rooms (410 Sq. Ft.)',
      'Kramuka Multi-Cuisine Restaurant (50–80 Pax) & Zriya Banquet (1150 Sq. Ft.)',
      'Radhanagar Beach (6 km), Elephant Beach (2.4 km) & Govind Nagar (3.6 km)',
      'Scuba Diving, Snorkeling, Kayaking, Jet Ski, Pool & Bonfire',
    ],
    stays: ['Sea Hills Resort Havelock · Bamboo Saa (410 Sq. Ft.)', 'Sea Hills Resort Havelock · La Bougainvillea with Bathtub (410 Sq. Ft.)'],
    itinerary: [
      { day: 'Day 1', detail: 'Reach Havelock by Private Ferry (Makruzz / Green Ocean / Nautica · 1.5 hrs) or Govt Ferry (2.5 hrs). 10–15 min transfer (4.5 km) to Sea Hills Resort & sunset at Govind Nagar Beach (3.6 km).' },
      { day: 'Day 2', detail: 'Excursion to world-famous Radhanagar Beach (6 km, 10–15 mins drive) & evening bonfire with music by the outdoor pool.' },
      { day: 'Day 3', detail: 'Water sports at Elephant Beach (2.4 km to trekking point) — Snorkeling, Scuba Diving (3.5 km), Jet Ski & Glass Bottom Boat, followed by dinner at Kramuka Restaurant.' },
      { day: 'Day 4', detail: 'Sunrise photography at Kalapathar Beach (7 km), breakfast at Kramuka & return transfer to Havelock Jetty.' },
    ],
  },
  {
    slug: 'complete-andaman-island-journey',
    badge: 'Most Popular',
    category: 'Both Islands',
    title: 'Both Islands · Island at Its Best',
    subtitle: 'Island at Its Best',
    duration: '5 Nights · 6 Days',
    destinations: 'Port Blair · Havelock Island · Coral Reefs',
    price: '₹34,900',
    priceNote: 'per couple · Port Blair + Havelock Stays, Ferries & Sightseeing',
    image: '/frames/Destination/frame_0045.webp',
    summary:
      'Our signature dual-island holiday uniting Sea Hills Hotel Port Blair (3.9 km from Airport) and Sea Hills Resort Havelock (Swaraj Dweep) — complete with high-speed private ferries, bathtub suites, Cleopatra & Kramuka dining, Anubis Rooftop Bar, and coral reef water sports.',
    highlights: [
      'Dual Stay: Sea Hills Port Blair Suites + Havelock 410 Sq. Ft. Rooms',
      'Makruzz / Green Ocean / Nautica High-Speed Ferry (1.5 hrs)',
      'Candlelight Pool/Rooftop Dinner, Cleopatra, Kramuka & Anubis Bar',
      'Cellular Jail (2.7 km), Radhanagar Beach (6 km) & Elephant Beach Scuba',
    ],
    stays: ['Sea Hills Hotel Port Blair · Premium Suite / Deluxe', 'Sea Hills Resort Havelock · La Bougainvillea with Bathtub'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive at Veer Savarkar Airport (3.9 km, 10–15 mins to hotel). Visit Corbyn’s Cove Beach (4 km) & Cellular Jail Light & Sound Show (2.7 km). Dinner at Cleopatra Restaurant.' },
      { day: 'Day 2', detail: 'Transfer to Phoenix Bay Jetty (3.2 km) for 1.5-hr Private Ferry to Havelock. Check in to 410 sq. ft. room & visit Radhanagar Beach (6 km).' },
      { day: 'Day 3', detail: 'Scuba Diving, Snorkeling, Kayaking & Jet Ski at Elephant Beach (2.4 km). Evening bonfire & poolside unwind at Havelock.' },
      { day: 'Day 4', detail: 'Morning at Kalapathar Beach (7 km) & Govind Nagar Beach (3.6 km). Afternoon ferry return to Port Blair & cocktails at Anubis Rooftop Lounge Bar.' },
      { day: 'Day 5', detail: 'Day trip option to Chidiyatapu Beach (23.3 km), Wandoor Beach (25.8 km), or Mount Harriet (14.5 km). Candlelight dinner by the pool/rooftop.' },
      { day: 'Day 6', detail: 'Breakfast & 10–15 minute airport drop-off (3.9 km) with our travel assistance team.' },
    ],
  },
  {
    slug: 'port-blair-gateway-escape',
    badge: 'Capital Hub',
    category: 'Port Blair',
    title: 'Port Blair · The Gateway',
    subtitle: 'The Gateway',
    duration: '3 Nights · 4 Days',
    destinations: 'Port Blair (Sri Vijaya Puram) · Day Excursions',
    price: '₹18,900',
    priceNote: 'per guest · Bathtub Rooms, Cleopatra Dining & City Sightseeing',
    image: '/frames/Destination/frame_0001.webp',
    summary:
      'Stay in the heart of Port Blair just 10–15 minutes from the Airport (3.9 km) and Phoenix Bay Jetty (3.2 km). Choose from 5 bathtub-equipped room categories up to the 452 sq. ft. VIP Lounge Sea View, with Egyptian-themed dining at Cleopatra and city views from Anubis Rooftop Bar.',
    highlights: [
      '5 Room Categories (269–452 Sq. Ft.) · All Equipped with Bathtubs',
      'Cleopatra Egyptian Restaurant (30–50 Pax) & Anubis Rooftop Lounge Bar',
      'Outdoor Pool with Baby Pool, Candlelight Dinners & Honeymoon Decor',
      'Minutes from Aberdeen Bazaar (2 km), Cellular Jail (2.7 km) & Corbyn’s Cove (4 km)',
    ],
    stays: ['Sea Hills Hotel Port Blair · Standard / Premium Deluxe / Pool & Sea View Suites / VIP Lounge (452 Sq. Ft.)'],
    itinerary: [
      { day: 'Day 1', detail: 'Airport pickup (3.9 km, 10–15 mins). Afternoon at Corbyn’s Cove Beach (4 km) & Cellular Jail (2.7 km). Egyptian-themed dinner at Cleopatra.' },
      { day: 'Day 2', detail: 'Water Sports Complex (2 km) & shopping at Aberdeen Bazaar (2 km). Evening cocktails overlooking the city at Anubis Rooftop Lounge Bar.' },
      { day: 'Day 3', detail: 'Full-day excursion to Wandoor Beach (25.8 km) & Chidiyatapu sunset (23.3 km) or Mount Harriet (14.5 km). Poolside candlelight dinner.' },
      { day: 'Day 4', detail: 'Morning dip in the Outdoor Pool, breakfast & transfer to Airport (3.9 km) or Jetty (3.2 km).' },
    ],
  },
  {
    slug: 'honeymoon-bougainvillea-vip-luxury',
    badge: 'Couples Choice',
    category: 'Honeymoon',
    title: 'VIP Sea View & La Bougainvillea Honeymoon',
    subtitle: 'Romantic Luxury Across Both Islands',
    duration: '6 Nights · 7 Days',
    destinations: 'Port Blair VIP Lounge · Havelock La Bougainvillea',
    price: '₹48,500',
    priceNote: 'per couple · Bathtub Suites, Candlelight Dinner & Honeymoon Decor',
    image: '/images/facilities/dining.jpg',
    summary:
      'Crafted for honeymooners — combining our one-of-a-kind 452 sq. ft. VIP Lounge Sea View (or 323–366 sq. ft. Sea View Suite) in Port Blair with the 410 sq. ft. La Bougainvillea Bathtub Room in Havelock, honeymoon room decorations, and rooftop/poolside candlelight dining.',
    highlights: [
      'Honeymoon Room Decorations & Pool/Rooftop Candlelight Dinner',
      'Port Blair Sea View Suite / 452 Sq. Ft. VIP Lounge with Bathtub',
      'Havelock 410 Sq. Ft. La Bougainvillea Room with Private Balcony & Bathtub',
      'Private Ferry Transfers (Makruzz / Green Ocean / Nautica · 1.5 hrs)',
    ],
    stays: ['Sea Hills Port Blair · VIP Lounge Sea View (452 Sq. Ft.)', 'Sea Hills Havelock · La Bougainvillea with Bathtub (410 Sq. Ft.)'],
    itinerary: [
      { day: 'Day 1–2', detail: 'Port Blair arrival (3.9 km), floral honeymoon room decoration, Cellular Jail (2.7 km) & rooftop candlelight dinner at Anubis / Poolside.' },
      { day: 'Day 3–5', detail: '1.5-hr Private Ferry to Havelock. Stay in La Bougainvillea Bathtub room, visit Radhanagar (6 km), Kalapathar (7 km) & scuba/snorkeling at Elephant Beach (2.4 km).' },
      { day: 'Day 6–7', detail: 'Return to Port Blair, sunset at Chidiyatapu Beach (23.3 km), farewell feast at Cleopatra & airport drop-off.' },
    ],
  },
  {
    slug: 'andaman-water-sports-adventure',
    badge: 'Island Adventure',
    category: 'Adventure',
    title: 'Scuba, Reefs & Baratang Explorer',
    subtitle: 'Adventure • Fun • Memories',
    duration: '5 Nights · 6 Days',
    destinations: 'Port Blair · Baratang (107.9 Km) · Havelock Reefs',
    price: '₹29,500',
    priceNote: 'per guest · Water Sports, Ferries & Sightseeing Assistance',
    image: '/images/facilities/pool-bright.jpg',
    summary:
      'Action-packed island adventure featuring Scuba Diving (3.5 km from Havelock resort), Snorkeling, Kayaking, Jet Ski, Banana Boat, and Speed Boat rides at Elephant Beach, plus Port Blair Water Sports Complex (2 km) and Baratang excursion (107.9 km).',
    highlights: [
      'Scuba Diving (3.5 km), Snorkeling, Kayaking & Glass Bottom Boat',
      'Jet Ski, Banana Boat Ride, Speed Boat Ride & Fishing Trips',
      'Baratang Day Trip (107.9 km) & Mount Harriet (14.5 km)',
      'Evening Bonfire, Outdoor Swimming Pools & Travel Desk Support',
    ],
    stays: ['Sea Hills Port Blair · Premium Deluxe (323 Sq. Ft.)', 'Sea Hills Havelock · Bamboo Saa Room (410 Sq. Ft.)'],
    itinerary: [
      { day: 'Day 1', detail: 'Arrive Port Blair, visit Water Sports Complex (2 km) & Corbyn’s Cove Beach (4 km).' },
      { day: 'Day 2', detail: 'Early morning excursion to Baratang (107.9 km) through tropical reserves & mangrove creeks.' },
      { day: 'Day 3–4', detail: 'Ferry to Havelock. Scuba Diving (3.5 km), Elephant Beach (2.4 km) Jet Ski, Banana Boat & Speed Boat rides, plus evening resort bonfire.' },
      { day: 'Day 5–6', detail: 'Return to Port Blair, Anubis Rooftop Bar evening & airport transfer (3.9 km).' },
    ],
  },
  {
    slug: 'family-corporate-group-escape',
    badge: 'Family & Groups',
    category: 'Family',
    title: 'Family & Group Celebration Retreat',
    subtitle: 'Meet • Gather • Celebrate',
    duration: '4 Nights · 5 Days',
    destinations: 'Port Blair & Havelock Island',
    price: '₹42,000',
    priceNote: 'per family / customizable for corporate & banquet groups',
    image: '/images/facilities/restaurant.jpg',
    summary:
      'Designed for families and groups — with Outdoor Swimming Pool + Baby Pool in Port Blair, Kids Play Area & Garden sit-out in Havelock, Kramuka Restaurant (50–80 Pax), Zriya Banquet Hall (1150 Sq. Ft., up to 80 Pax), and convertible Conference Facilities in Port Blair.',
    highlights: [
      'Outdoor Pool with Baby Pool (Port Blair) & Kids Play Area (Havelock)',
      'Zriya Banquet Hall (1150 Sq. Ft. · up to 80 Pax) & Port Blair Conference Setup',
      'Spacious 410 Sq. Ft. Bamboo Saa & 323–366 Sq. Ft. Pool View Suites',
      'Dedicated Travel Desk for Airport, Jetty & Sightseeing Transfers',
    ],
    stays: ['Sea Hills Port Blair · Premium Suite Pool View (323–366 Sq. Ft.)', 'Sea Hills Havelock · Bamboo Saa Room (410 Sq. Ft.)'],
    itinerary: [
      { day: 'Day 1', detail: 'Port Blair arrival (3.9 km), Aberdeen Bazaar (2 km), Cellular Jail (2.7 km) & family dinner at Cleopatra (30–50 Pax).' },
      { day: 'Day 2–3', detail: 'Ferry to Havelock. Glass Bottom Boat ride, Radhanagar Beach (6 km), Kids Play Area, Garden bonfire & Kramuka dining (50–80 Pax).' },
      { day: 'Day 4–5', detail: 'Return to Port Blair, Wandoor Beach (25.8 km) day trip, Baby Pool relaxation & departure.' },
    ],
  },
];

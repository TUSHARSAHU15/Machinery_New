import { Machine, MachineCategory, ServiceItem, FaqItem, CompanyInfo } from '../types';

export const IMAGES = {
  hero: '/assets/machines/heidelberg-speedmaster-hero.jpg',
  heidelbergFront: '/assets/machines/heidelberg-speedmaster-front.jpg',
  heidelbergHero: '/assets/machines/heidelberg-speedmaster-hero.jpg',
  heidelbergCard: '/assets/machines/heidelberg-speedmaster-card.jpg',
  notebook: '/assets/notebook-DtCPrakx.jpg',
  offset: '/assets/machines/heidelberg-speedmaster-hero.jpg',
  cutting: '/assets/cutting-BxZQ6G3Y.jpg',
  binding: '/assets/binding-B3zQgJDp.jpg',
  processing: '/assets/processing-B9OWsBlQ.jpg',
  parts: '/assets/parts-V94LPd2_.jpg',
  service: '/assets/service-C2pzLkO0.jpg',
  // Real Machinery Hub Uploaded Assets
  manualCutter: '/assets/machines/manual-paper-cutter.jpg',
  semiAutoCutter: '/assets/machines/semi-auto-paper-cutter.jpg',
  polarCutter: '/assets/machines/polar-paper-cutter.png',
  stitchingMotor: '/assets/machines/notebook-stitching-motor.jpg',
  edgeSquaring: '/assets/machines/edge-squaring-port-making.jpg',
  lSealer: '/assets/machines/l-sealer-shrink-tunnel.jpg',
};

export const COMPANY_INFO: CompanyInfo = {
  name: 'Machinery Hub',
  tagline: 'Your Trusted Partner in Printing & Paper Industry Machinery',
  about:
    'Machinery Hub is one of Nepal’s leading importers and suppliers of notebook manufacturing machinery, pre-owned offset printing machinery, and a comprehensive range of equipment for the printing, paper converting and bookbinding industries. We also operate our own notebook manufacturing facility and printing press, giving us practical first-hand production expertise.',
  establishedYear: '2020',
  natureOfBusiness:
    'Trading, Import, Supply and Distribution of New, Pre-Owned and Refurbished Printing Machinery, Paper Industry Machinery and Related Equipment, including Installation, Maintenance and After-Sales Services',
  contactPerson: 'Mr. Anand Karna',
  contactDesignation: 'Director',
  phone: '+977-9857024409, 9824421727',
  phones: ['+977-9857024409', '+977-9824421727'],
  whatsapp: '9779857024409',
  whatsappSecondary: '9779824421727',
  email: 'karnfile@gmail.com',
  address: 'Siddharthanagar-6, Rupandehi, Bhairahawa, Nepal',
  mapsUrl:
    'https://www.google.com/maps?q=Siddharthanagar-6,+Rupandehi,+Bhairahawa,+Nepal&output=embed',
  hours: '10 AM - 6 PM',
  facebook: 'https://www.facebook.com/machineryhubbhw/',
};

export const NEPALI_WELCOME_MESSAGE = `🙏 नमस्ते! Machinery Hub मा तपाईंलाई हार्दिक स्वागत छ।
हामीबाट तपाईंले अर्डरमा सिधै आयात (Direct Import) गर्न सक्नुहुन्छ:
✅ Pre-Owned Offset Presses: 28×40 (1-8 Col), 20×29 (1-8 Col), 19×26 (1-4 Col) & Small Sizes (10×12, 12×15, 14×19, 15×20)
✅ Paper Cutting Machines (Manual, Semi-Auto & Polar in sizes 32'' to 61'')
✅ Notebook Stitching Machines with Motor
✅ Edge Squaring (Port Making) Machines
✅ Notebook Packing Machines (L Sealer with Shrink Tunnel)
✅ Stallion 3-in-1 Notebook Making Machines (German Heads)
✅ Authorized Dealer for Autoprint & Sahil in Nepal
✅ Delivery, Machine Installation & Operator Training

Machinery Hub
👤 Mr. Anand Karna, Director (20+ Years Experience)
📞 +977-9857024409, 9824421727
📧 karnfile@gmail.com
📍 Siddharthanagar-6, Rupandehi, Bhairahawa, Nepal
Facebook: https://www.facebook.com/machineryhubbhw/`;

export const getWhatsAppUrl = (text: string) =>
  `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;

export const BRANDS = [
  { name: 'HEIDELBERG', origin: 'Germany', category: 'Offset & Post-Press' },
  { name: 'KOMORI', origin: 'Japan', category: 'Offset Printing Presses' },
  { name: 'POLAR', origin: 'Germany', category: 'Paper Cutting Systems' },
  { name: 'STAHL', origin: 'Germany', category: 'Folding & Finishing' },
  { name: 'STALLION', origin: 'India / German Heads', category: '3-in-1 Notebook Machines' },
  { name: 'AUTOPRINT', origin: 'Authorized Dealer', category: 'Offset & Allied Machinery' },
  { name: 'SAHIL', origin: 'Authorized Dealer', category: 'Printing Machinery' },
  { name: 'CHETAN', origin: 'India', category: 'Notebook Machinery' },
  { name: 'HARBHAJAN', origin: 'India', category: 'Notebook Machinery' },
  { name: 'RYOBI', origin: 'Japan', category: 'Offset Presses' },
  { name: 'MBO', origin: 'Germany', category: 'Paper Folding Machines' },
  { name: 'SHOEI', origin: 'Japan', category: 'Paper Folding Machines' },
  { name: 'ITOH', origin: 'Japan', category: 'Paper Cutters' },
  { name: 'NAGAI', origin: 'Japan', category: 'Paper Cutters' },
  { name: 'HAMADA', origin: 'Japan', category: 'Mini Offset Presses' },
  { name: 'ADAST', origin: 'Czech Republic', category: 'Offset Presses' },
];

export const WHY_US_POINTS = [
  'Led by Mr. Anand Karna, Director, bringing over 20 years of hands-on industry experience.',
  'We operate our own notebook manufacturing facility and printing press, giving us practical first-hand knowledge of machine performance.',
  'Direct Import on Order from Germany, Japan & India: guaranteed quality machines sourced to your exact specs without dead inventory overhead.',
  'Offset Press Specialists: 28"×40" (1-8 Col), 20"×29" (1-8 Col), 19"×26" (1-4 Col) & Small Sizes (10×12, 12×15, 14×19, 15×20).',
  'Authorized Dealer in Nepal for renowned Autoprint and Sahil machinery brands.',
  'Complete Paper Cutting range: Manual with motor, Semi-Automatic, and Polar in sizes 32" to 61".',
  'Notebook production specialists: Motorized Stitching, Edge Squaring (Port Making), and L-Sealer Shrink Packaging.',
  'Suppliers of Stallion 3-in-1 (German heads), Chetan, Harbhajan, and pre-owned offset presses (Heidelberg, Komori).',
  'Every machine is pre-inspected, tested, and backed by nationwide delivery, installation, and operator training.',
];

export const CATEGORIES: MachineCategory[] = [
  {
    slug: 'offset',
    name: 'Offset Printing Machinery',
    short: 'Offset Printing',
    image: IMAGES.heidelbergCard,
    subcategories: [
      '28" × 40" Offset Press (Available in 8, 6, 5, 4, 2, 1 Colour)',
      '20" × 29" Offset Press (Available in 8, 6, 5, 4, 2, 1 Colour)',
      '19" × 26" Offset Press (Available in 4, 2 & 1 Colour)',
      'Small Size Offset Presses (10"×12", 12"×15", 14"×19", 15"×20")',
      'Multi-Colour Offset Presses (4, 5, 6 & 8 Colours)',
      'Two-Colour Offset Printing Machines',
      'Single-Colour Offset Printing Machines',
      'Authorized Dealer in Nepal: Autoprint & Sahil',
    ],
  },
  {
    slug: 'cutting-processing',
    name: 'Paper Cutting & Processing Machinery',
    short: 'Paper Cutting & Processing',
    image: IMAGES.manualCutter,
    subcategories: [
      'Manual Type Paper Cutting Machine with Motor (32" to 60")',
      'Semi Automatic Paper Cutting Machine (33" to 61")',
      'Polar Cutting Machine (33" to 61")',
      'Reel-to-Sheet Cutting Machines',
      'Paper Slitting Machines',
      'Knife Sharpening Machines',
      'Nepali Kagaj Pressing Machines',
    ],
  },
  {
    slug: 'folding-ruling',
    name: 'Paper Folding & Ruling Machinery',
    short: 'Folding & Ruling',
    image: IMAGES.processing,
    subcategories: [
      'Paper Folding Machines',
      'Lineomatic Ruling Machines',
      'Paper Ruling Machines',
    ],
  },
  {
    slug: 'die-cutting-creasing',
    name: 'Die Cutting & Creasing Machinery',
    short: 'Die Cutting & Creasing',
    image: IMAGES.parts,
    subcategories: [
      'Automatic Die Cutting Machines',
      'Manual Die Cutting Machines',
      'Creasing Machines',
      'Gluing Machine',
    ],
  },
  {
    slug: 'notebook',
    name: 'Notebook & Exercise Book Manufacturing Machinery',
    short: 'Notebook Manufacturing',
    image: IMAGES.edgeSquaring,
    subcategories: [
      'Notebook Stitching Machine with Motor',
      'Edge Squaring (Port Making) Machine',
      '3-in-1 Notebook Making Machines (Stallion)',
      'Automatic Notebook Making Machines',
      'Notebook Packing Machines',
      'Notebook Ruling Machines',
      'Notebook Pressing Machines',
    ],
  },
  {
    slug: 'book-binding',
    name: 'Book Binding & Finishing Machinery',
    short: 'Book Binding & Finishing',
    image: IMAGES.binding,
    subcategories: [
      'Glue Binding Machines (1-Clamp to 16-Clamp)',
      'Book Stitching Machines',
      'File Master Machines',
      'Hard Case Making Machines',
      'Automatic File Eyeleting Machines',
    ],
  },
  {
    slug: 'packaging',
    name: 'Paper & Packaging Machinery',
    short: 'Paper & Packaging',
    image: IMAGES.lSealer,
    subcategories: [
      'Notebook Packing Machine (L Sealer With Shrink Tunnel)',
      'Automatic Notebook Packing Machines',
      'Lamination Machines',
      'Paper Pressing Machines',
    ],
  },
  {
    slug: 'bag-making',
    name: 'Non-Woven & Fiber Bag Manufacturing Machinery',
    short: 'Non-Woven Bag Machinery',
    image: IMAGES.processing,
    subcategories: [
      'Non-Woven Fabric Bag Making Machines',
      'Non-Woven Bag Printing Machines',
      'Non-Woven Bag Sewing Machines',
    ],
  },
  {
    slug: 'allied',
    name: 'Other Printing & Allied Machinery',
    short: 'Allied Machinery & Spares',
    image: IMAGES.parts,
    subcategories: [
      'Sewing Machines',
      'Paper Finishing Equipment',
      'Binding & Post-Press Equipment',
      'Other Printing and Packaging Machinery',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Offset Printing Machinery Import',
    desc: 'Direct import of quality-tested pre-owned offset presses (Heidelberg, Komori, Ryobi, Autoprint, Sahil). Available in sizes: 28"×40" (1 to 8 Colour), 20"×29" (1 to 8 Colour), 19"×26" (1, 2 & 4 Colour), and Small Sizes (10"×12", 12"×15", 14"×19", 15"×20").',
  },
  {
    title: 'Paper Cutting Machines',
    desc: 'Manual Type with Motor, Semi-Automatic, and Polar computerized cutters available in sizes 32", 33", 36", 37", 42", 43", 48", 49", 52", 53", 60", 61".',
  },
  {
    title: 'Notebook Manufacturing Machinery',
    desc: 'Notebook Stitching Machines with Motor, Edge Squaring (Port Making) Machines, Stallion 3-in-1 (German heads), Chetan & Harbhajan solutions.',
  },
  {
    title: 'Notebook Packing & Shrink Tunnels',
    desc: 'L-Sealer with Shrink Packaging Tunnel machines for bundle packing school notebooks, exercise books, registers, and stationery.',
  },
  {
    title: 'Authorized Dealership Solutions',
    desc: 'Official authorized dealer in Nepal for Autoprint and Sahil brands, supplying genuine machinery, original parts, and factory-backed support.',
  },
  {
    title: 'Machine Delivery & Installation',
    desc: 'Safe door-to-door transport, unloading, machine positioning, electrical connection, leveling, and trial runs across all districts in Nepal.',
  },
  {
    title: 'Practical Operator Training',
    desc: 'Practical, production-grounded training for your operators drawn from our own active experience running a printing press and notebook plant.',
  },
];

export const MACHINES: Machine[] = [
  // 1. Manual Type Paper Cutting Machine with Motor
  {
    slug: 'manual-paper-cutting-machine-motor',
    name: 'Manual Type Paper Cutting Machine with Motor',
    model: 'MH-MC Series',
    category: 'cutting-processing',
    condition: 'New',
    available: true,
    capacity: 'Heavy-Duty Motorized Guillotine',
    capacityValue: 3000,
    price: null,
    power: '3 Phase / Single Phase Motorized Drive',
    dimensions: 'Heavy Cast Iron Heavy-Duty Frame',
    description:
      'Robust manual type paper cutting machine equipped with heavy electric motor and balanced fly-wheel for smooth, fatigue-free continuous paper cutting. Available in a wide range of widths to fit all printing presses and bookbinderies.',
    images: [IMAGES.manualCutter, IMAGES.cutting],
    specs: [
      ['Sizes Available', '32", 36", 42", 48", 52" & 60"'],
      ['Drive Type', 'Electric Motor with Heavy Flywheel & Clutch'],
      ['Backgauge', 'Precision Handwheel Micro-Adjustment'],
      ['Clamp System', 'Manual Handwheel Pressure Clamp'],
      ['Blade Quality', 'High-Grade Alloy Tool Steel Knife'],
    ],
    support: 'Blade sharpening, on-site foundation leveling, installation, and operator guidance.',
  },

  // 2. Semi Automatic Paper Cutting Machine
  {
    slug: 'semi-automatic-paper-cutting-machine',
    name: 'Semi Automatic Paper Cutting Machine',
    model: 'Royal / MH-SA Series',
    category: 'cutting-processing',
    condition: 'New',
    available: true,
    capacity: 'High-Speed Semi-Auto Cutting Cycle',
    capacityValue: 4000,
    price: null,
    power: '3 Phase, 415V, 3.7 kW',
    dimensions: 'Heavy Steel Plated Bed with Side Tables',
    description:
      'Semi-automatic paper cutting guillotine featuring automatic motorized clamping, safety dual push buttons, optical cutting line indicator, and smooth hydraulic/motorized cutting action.',
    images: [IMAGES.semiAutoCutter, IMAGES.cutting],
    specs: [
      ['Sizes Available', '33", 37", 43", 49", 53" & 61"'],
      ['Operation', 'Semi-Automatic Motorized Cutting Cycle'],
      ['Safety System', 'Dual Hand Push Buttons & Emergency Stop'],
      ['Table', 'Extended Chrome Plated / Stainless Bed'],
    ],
    support: 'Complete delivery, leveling, electrical connection, and operator training.',
  },

  // 3. Polar Cutting Machine
  {
    slug: 'polar-cutting-machine',
    name: 'Polar Cutting Machine (Computerized / High-Speed)',
    model: 'Polar / MH-PC Series',
    category: 'cutting-processing',
    condition: 'Used',
    available: true,
    capacity: 'High-Speed Computerized Cutting Cycle',
    capacityValue: 5000,
    price: null,
    power: '3 Phase, 415V, 4.5 kW',
    dimensions: 'Heavy Duty Digital Guillotine Bed with Air Cushion',
    description:
      'International standard Polar paper cutting guillotine with digital microprocessor programming, optical infrared safety light curtains, hydraulic clamping, and air-cushion bed table for effortless paper ream movement.',
    images: [IMAGES.polarCutter, IMAGES.cutting],
    specs: [
      ['Sizes Available', '33", 37", 43", 49", 53" & 61"'],
      ['Control System', 'Digital Touch Programming with Multi-Memory Slots'],
      ['Safety Curtains', 'Optical Infrared Safety Light Curtains'],
      ['Table System', 'Air Bed Table for Easy Paper Glide'],
    ],
    support: 'Installation, computerized backgauge calibration, blade setup, and operator training.',
  },

  // 4. Notebook Stitching Machine with Motor
  {
    slug: 'notebook-stitching-machine-motor',
    name: 'Notebook Stitching Machine with Motor',
    model: 'MH-SM Series',
    category: 'notebook',
    condition: 'New',
    available: true,
    capacity: '1,500 – 2,500 stitches / hour',
    capacityValue: 2500,
    price: null,
    power: 'Single Phase / 3 Phase Motor, 0.75 kW',
    dimensions: '0.8 m × 0.6 m × 1.4 m',
    description:
      'Heavy-duty motorized wire stitching machine for school notebooks, registers, bill books, and pamphlets. Features foot-pedal electro-mechanical clutch for rapid, precise, and effortless wire binding.',
    images: [IMAGES.stitchingMotor, IMAGES.notebook],
    specs: [
      ['Drive', 'Electric Motor with Foot Pedal Actuation'],
      ['Stitching Thickness', 'Up to 25 mm (1 Inch)'],
      ['Wire Compatibility', 'Round & Flat Stitching Wire (20–24 Gauge)'],
      ['Work Table', 'Flat & Saddle Convertible Table for Center Stitching'],
    ],
    support: 'Wire threading guidance, spare head parts, and operator training.',
  },

  // 5. Edge Squaring (Port Making) Machine
  {
    slug: 'edge-squaring-port-making-machine',
    name: 'Edge Squaring (Port Making) Machine',
    model: 'MH-ESM Port Pro',
    category: 'notebook',
    condition: 'New',
    available: true,
    capacity: '3,500 – 5,000 notebooks / hour',
    capacityValue: 4000,
    price: null,
    power: '3 Phase, 415V, 3 kW',
    dimensions: '1.4 m × 1.2 m × 1.2 m',
    description:
      'High-performance Edge Squaring (Port Making) Machine designed to press the rounded, bulky spine of centre-stitched notebooks and exercise books into a sharp, flat, rectangular paperback-style spine. Enables flat stacking and uniform carton packaging.',
    images: [IMAGES.edgeSquaring, IMAGES.notebook],
    specs: [
      ['Application', 'Notebook Spine Edge Squaring & Port Making'],
      ['Spine Style', 'Flat Back Square Spine (Paperback Style)'],
      ['Book Thickness', 'Up to 20 mm'],
      ['Control', 'Digital Timer & Foot-Pedal Clamp Activation'],
    ],
    support: 'Installation, pressure adjustment, and operator training.',
  },

  // 6. Notebook Packing Machine : L Sealer With Shrink Tunnel
  {
    slug: 'notebook-packing-l-sealer-shrink-tunnel',
    name: 'Notebook Packing Machine : L Sealer With Shrink Tunnel',
    model: 'MH-LST 5545',
    category: 'packaging',
    condition: 'New',
    available: true,
    capacity: '20 – 35 packs / minute',
    capacityValue: 1800,
    price: null,
    power: '3 Phase, 415V, 9 kW',
    dimensions: '3.6 m × 1.1 m × 1.5 m',
    description:
      'Complete notebook bundle packing solution featuring an automatic L-sealing station and continuous heated shrink tunnel. Produces tight, crystal-clear, moisture-proof and dust-proof shrink-wrapped bundles of notebooks, copies, and registers.',
    images: [IMAGES.lSealer, IMAGES.service],
    specs: [
      ['Configuration', 'L-Sealer Machine + Continuous Shrink Tunnel'],
      ['Sealing Size', '550 × 450 mm'],
      ['Film Compatibility', 'POF / PVC / Polyolefin Shrink Films'],
      ['Temperature Control', 'Digital PID Intelligent Temperature Controller'],
    ],
    support: 'Temperature calibration, conveyor setup, and operator training.',
  },

  // 7. Offset Printing Machinery (Sourced & Imported to Order)
  {
    slug: 'offset-28x40-press',
    name: '28" × 40" Offset Printing Press (8, 6, 5, 4, 2, 1 Colour)',
    model: 'Heidelberg SM/CD 102 · Komori Lithrone 40',
    category: 'offset',
    condition: 'Used',
    available: true,
    capacity: '13,000 – 15,000 sheets / hour',
    capacityValue: 15000,
    price: null,
    power: '3 Phase, 415V, 45 kW',
    dimensions: '10.5 m × 3.6 m × 2.2 m',
    description:
      'Full-size heavy-duty commercial and packaging offset printing presses imported directly on order from Germany, Europe, and Japan. Available in 1, 2, 4, 5, 6, and 8 colour units with CPC/PQC computer controls, continuous dampening, perfecting options, and infrared/UV dryers.',
    images: [IMAGES.heidelbergCard, IMAGES.heidelbergFront, IMAGES.heidelbergHero],
    specs: [
      ['Available Size', '28" × 40" (720 × 1020 mm)'],
      ['Colours Available', '8, 6, 5, 4, 2 & 1 Colour Configurations'],
      ['Top Brands Imported', 'HEIDELBERG, KOMORI, MITSUBISHI, KBA'],
      ['Import Status', 'Import Directly on Order with Complete Pre-Inspection'],
    ],
    support: 'Pre-shipment inspection report, safe transport to Nepal, foundation setup, precision leveling, and operator training.',
  },
  {
    slug: 'offset-20x29-press',
    name: '20" × 29" Offset Printing Press (8, 6, 5, 4, 2, 1 Colour)',
    model: 'Heidelberg SM-74/CD-74 · Komori Lithrone 28/29',
    category: 'offset',
    condition: 'Used',
    available: true,
    capacity: '13,000 – 15,000 sheets / hour',
    capacityValue: 13000,
    price: null,
    power: '3 Phase, 415V, 32 kW',
    dimensions: '7.8 m × 3.1 m × 2.0 m',
    description:
      'The most versatile half-size offset printing press, ideal for publishing, textbook printing, high-end commercial jobs, packaging cartons, and calendars. Imported directly on order in configurations ranging from single-colour to 8-colour presses.',
    images: [IMAGES.heidelbergCard, IMAGES.heidelbergFront, IMAGES.heidelbergHero],
    specs: [
      ['Available Size', '20" × 29" (520 × 740 mm)'],
      ['Colours Available', '8, 6, 5, 4, 2 & 1 Colour Configurations'],
      ['Top Brands Imported', 'HEIDELBERG (Speedmaster), KOMORI (Lithrone), RYOBI'],
      ['Import Status', 'Import Directly on Order with Complete Pre-Inspection'],
    ],
    support: 'Full electrical connection, cylinder certification, test runs, and hands-on press operator training.',
  },
  {
    slug: 'offset-19x26-press',
    name: '19" × 26" Offset Printing Press (4, 2 & 1 Colour)',
    model: 'Komori Sprint / L-26 · Heidelberg MO/MOVP · Ryobi',
    category: 'offset',
    condition: 'Used',
    available: true,
    capacity: '10,000 – 12,000 sheets / hour',
    capacityValue: 11000,
    price: null,
    power: '3 Phase, 415V, 22 kW',
    dimensions: '5.8 m × 2.6 m × 1.9 m',
    description:
      'Popular medium-format offset press providing low makeready waste and high running speed. Ideal for printing presses in Nepal printing magazines, books, government forms, brochures, and stationery. Available in 1, 2, and 4 colour options.',
    images: [IMAGES.heidelbergCard, IMAGES.heidelbergFront, IMAGES.heidelbergHero],
    specs: [
      ['Available Size', '19" × 26" (480 × 660 mm)'],
      ['Colours Available', '4, 2 & 1 Colour Configurations'],
      ['Top Brands Imported', 'KOMORI, HEIDELBERG, RYOBI, ADAST'],
      ['Import Status', 'Import Directly on Order with Complete Pre-Inspection'],
    ],
    support: 'On-site installation, rubber roller alignment, dampening setup, and operational guidance.',
  },
  {
    slug: 'small-size-offset-presses',
    name: 'Small Size Offset Printing Presses (10×12, 12×15, 14×19, 15×20)',
    model: 'Autoprint 1520 · Sahil Mini · Hamada · Ryobi',
    category: 'offset',
    condition: 'New',
    available: true,
    capacity: '6,000 – 8,000 sheets / hour',
    capacityValue: 8000,
    price: null,
    power: 'Single Phase / 3 Phase, 415V, 5 kW',
    dimensions: '2.8 m × 1.4 m × 1.4 m',
    description:
      'High-speed compact small offset printing machines designed for rapid turnaround printing of bill books, registers, school exam papers, invoice forms, letterheads, envelopes, and pamphlets. Machinery Hub is an Authorized Dealer for Autoprint and Sahil in Nepal.',
    images: [IMAGES.heidelbergCard, IMAGES.heidelbergHero],
    specs: [
      ['Small Sizes Available', '10" × 12", 12" × 15", 14" × 19" & 15" × 20"'],
      ['Colours & Type', 'Single-Colour & Two-Colour / Compact & Tabletop'],
      ['Authorized Dealership', 'Official Dealer for AUTOPRINT & SAHIL in Nepal'],
      ['Import Status', 'Brand-New & Inspected Pre-Owned Ready to Order'],
    ],
    support: 'Authorized factory warranty, genuine spare parts availability, on-site setup, and training.',
  },
  {
    slug: 'stallion-3-in-1-notebook',
    name: 'Stallion 3-in-1 Notebook Making Machine',
    model: 'Stallion Pro-G',
    category: 'notebook',
    condition: 'New',
    available: true,
    capacity: '8,000 – 10,000 notebooks / day',
    capacityValue: 9000,
    price: null,
    power: '3 Phase, 415V, 7.5 kW',
    dimensions: '6.5 m × 1.8 m × 1.6 m',
    description:
      'India’s leading Stallion 3-in-1 notebook making machine equipped with genuine German stitching heads. Combines precision folding, wire stitching, and spine pressing in a single pass.',
    images: [IMAGES.notebook, IMAGES.binding],
    specs: [
      ['Stitching Heads', 'Genuine German Imported Heads'],
      ['Operation', 'Folding + Stitching + Spine Pressing (3-in-1)'],
      ['Book Size', 'School Copy to Long Register'],
      ['Speed', 'Variable Speed with AC Frequency Drive'],
    ],
    support: 'Complete on-site installation, commissioning, and hands-on operator training.',
  },
  {
    slug: 'reel-to-sheet-cutter',
    name: 'Automatic Reel-to-Sheet Cutting Machine',
    model: 'RSC-1400',
    category: 'cutting-processing',
    condition: 'New',
    available: true,
    capacity: '150 – 200 cuts / minute',
    capacityValue: 9000,
    price: null,
    power: '3 Phase, 415V, 11 kW',
    dimensions: '5.2 m × 2.4 m × 1.9 m',
    description:
      'High-precision reel-to-sheet cutter for converting jumbo paper reels into exact cut-size sheets. Automatic sheet counting, tension brake, and high-speed overlapping delivery.',
    images: [IMAGES.cutting, IMAGES.processing],
    specs: [
      ['Web Width', 'Up to 1,400 mm'],
      ['Cutting Length', '300 mm – 1,500 mm'],
      ['Sheet Accuracy', '± 0.2 mm'],
    ],
    support: 'Installation, commissioning, and operator training.',
  },
  {
    slug: 'glue-binding-multi-clamp',
    name: 'Automatic Multi-Clamp Perfect Glue Binding Machine',
    model: 'PB-Clamp Series (1 to 16 Clamp)',
    category: 'book-binding',
    condition: 'New',
    available: true,
    capacity: '1,500 – 6,000 books / hour',
    capacityValue: 3500,
    price: null,
    power: '3 Phase, 415V, 25 kW',
    dimensions: '9.0 m × 2.4 m × 1.8 m',
    description:
      'High-speed automatic perfect glue binding line available from 1-clamp up to 16-clamp configurations. Equipped with milling cutter, spine notching, side gluing, and automatic cover feeder.',
    images: [IMAGES.binding, IMAGES.hero],
    specs: [
      ['Clamp Options', '1-Clamp, 3-Clamp, 6-Clamp, 12-Clamp, 16-Clamp'],
      ['Binding Thickness', '2 mm – 60 mm'],
      ['Glue System', 'EVA Hot-Melt / PUR Option'],
    ],
    support: 'Installation, commissioning, and full operator training.',
  },
];

export const formatPrice = (price: number | null) =>
  price == null ? 'Request a Quote' : `NPR ${price.toLocaleString('en-IN')}`;

export const FAQS: FaqItem[] = [
  {
    q: 'What sizes and colour configurations of Offset Printing Machines do you import?',
    a: 'We import and supply pre-owned and new offset printing machines in all standard industry sizes: 1) 28" × 40" available in 8, 6, 5, 4, 2, and 1 Colour (Heidelberg SM/CD 102, Komori Lithrone 40); 2) 20" × 29" available in 8, 6, 5, 4, 2, and 1 Colour (Heidelberg SM/CD 74, Komori Lithrone 28/29); 3) 19" × 26" available in 4, 2, and 1 Colour (Komori Sprint, Heidelberg MOVP, Ryobi); and 4) Small Sizes in 10" × 12", 12" × 15", 14" × 19", and 15" × 20" (Autoprint & Sahil authorized dealership, Hamada, Ryobi).',
  },
  {
    q: 'Do you keep machinery stock in Nepal or import on order?',
    a: 'We do not keep idle machinery sitting in a warehouse. Instead, we operate on a direct import-on-order model. We inspect, verify, and import machines directly from Germany, Japan, and leading manufacturers in India tailored to your exact production requirements, budget, size, and colour preferences. This guarantees you receive clean, fully tested machinery with transparent performance history and competitive pricing.',
  },
  {
    q: 'What sizes of Paper Cutting Machines do you supply?',
    a: 'We supply: 1) Manual Type with Motor in sizes 32", 36", 42", 48", 52" & 60"; 2) Semi-Automatic Paper Cutting Machines in sizes 33", 37", 43", 49", 53" & 61"; and 3) Polar Computerized High-Speed Cutters in sizes 33", 37", 43", 49", 53" & 61".',
  },
  {
    q: 'What specialized notebook making machinery do you supply?',
    a: 'We supply: Notebook Stitching Machines with Motor, Edge Squaring (Port Making) Machines for square paperback spines, Notebook Packing Machines (L-Sealers with continuous shrink tunnels), India’s leading Stallion 3-in-1 machines with German heads, and Chetan & Harbhajan notebook solutions.',
  },
  {
    q: 'What makes Machinery Hub different from other machinery traders in Nepal?',
    a: 'Unlike businesses that are exclusively involved in machinery trading, Machinery Hub operates its own active notebook manufacturing facility and printing press. This gives our team practical, first-hand production knowledge of machine performance, operational challenges, maintenance, and real output efficiency.',
  },
  {
    q: 'Who leads Machinery Hub and what is their background?',
    a: 'Machinery Hub is led by Director Mr. Anand Karna, who brings over 20 years of hands-on industry experience in the printing, paper, and notebook manufacturing sector.',
  },
];

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Shield,
  Wrench,
  Truck,
  GraduationCap,
  Phone,
  MessageSquare,
  ArrowRight,
  Factory,
  Award,
  Sparkles,
  Layers,
  ChevronDown,
} from 'lucide-react';
import {
  IMAGES,
  COMPANY_INFO,
  CATEGORIES,
  MACHINES,
  BRANDS,
  WHY_US_POINTS,
  SERVICES,
  getWhatsAppUrl,
  formatPrice,
} from '../data/machinery';
import { toast } from 'sonner';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  const slides = [
    {
      img: IMAGES.heidelbergHero,
      badge: 'HEIDELBERG SPEEDMASTER · DIRECT IMPORT',
      title: 'Heidelberg Multi-Colour Offset Printing Machinery',
      subtitle: 'Available to Import on Order: 28×40 (1-8 Colours), 20×29 (1-8 Colours), 19×26 (1-4 Colours) & Small Sizes (Autoprint & Sahil)',
    },
    {
      img: IMAGES.komoriHero,
      badge: 'KOMORI LITHRONE · DIRECT IMPORT FROM JAPAN',
      title: 'Komori Multi-Colour High-Speed Offset Presses',
      subtitle: 'Available to Import on Order: Lithrone G37, 28/29 & 40 (4, 5, 6 & 8 Colours) with PQC-S Automation & Pre-Shipment Inspection',
    },
    {
      img: IMAGES.notebook,
      badge: 'Notebook Manufacturing',
      title: 'Stallion 3-in-1 Notebook Machines with German Heads',
      subtitle: 'Also Supplying Proven Economical Solutions from Chetan & Harbhajan for Notebook Manufacturers',
    },
    {
      img: IMAGES.processing,
      badge: 'Authorized Dealership',
      title: 'Authorized Dealer in Nepal for Autoprint & Sahil',
      subtitle: 'Official Printing & Allied Machinery Solutions with Factory-Backed Support and Genuine Spare Parts',
    },
    {
      img: IMAGES.cutting,
      badge: 'Post-Press & Bindery',
      title: 'Paper Cutting, Reel-to-Sheet, Slitting & Folding Machinery',
      subtitle: 'Polar, Stahl, MBO, Shoei, Itoh & Nagai — Precision Tested Before Dispatch Across Nepal',
    },
  ];

  // Automatically advance slides every 4.5 seconds smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    const msg = `Hello Machinery Hub, please subscribe my email: ${newsletterEmail} to your machinery import catalogues and updates.`;
    window.open(getWhatsAppUrl(msg), '_blank');
    toast.success('Thank you! Redirecting to WhatsApp with your subscription.');
    setNewsletterEmail('');
  };

  return (
    <div className="w-full">
      {/* 1. Hero Banner Slider (Smooth Dissolve Cross-Fade) */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[470px] overflow-hidden bg-[#002b40]">
        {/* Layered Slides with 1000ms butter-smooth cross-fade transition */}
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.img}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover brightness-[0.92] transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

        {/* Banner Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 bg-[#e8b328] text-[#003854] text-[11px] font-bold uppercase tracking-wider font-roboto rounded">
              {slides[currentSlide].badge}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-300">
              Machinery Hub · Bhairahawa, Nepal
            </span>
          </div>

          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-gray-200 line-clamp-2 drop-shadow">
            {slides[currentSlide].subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              to="/we-import"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#004669] hover:bg-[#003854] text-white text-xs font-bold uppercase tracking-wider font-roboto rounded transition border border-white/20"
            >
              Explore Machinery We Import <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={getWhatsAppUrl(`Hello Mr. Anand Karna ji, I am interested in ${slides[currentSlide].title}`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider font-roboto rounded transition"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Direct WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-4 right-6 flex items-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'bg-[#e8b328] w-6' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Main Two-Column Body Content (City Graphics .who-is layout) */}
      <section className="p-6 md:p-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: col-md-8 */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Welcome & Company Profile */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#076290]">
                  Company Profile
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-[11px] font-bold text-[#e8b328] uppercase tracking-wide">
                  Estd. 2020
                </span>
              </div>
              <h2 className="cg-title !mb-3">
                Your Trusted Partner in Printing & Paper Industry Machinery
              </h2>

              <div className="space-y-3.5 text-[#8997a5] text-[13px] leading-[22px]">
                <p>
                  <strong className="text-[#435363]">Machinery Hub</strong> is one of Nepal’s leading importers and suppliers of notebook manufacturing machinery, pre-owned offset printing machinery, and a comprehensive range of equipment for the printing, paper converting, and bookbinding industries.
                </p>
                <p>
                  We specialize in importing and supplying a wide range of quality-tested pre-owned offset printing machines, from small-format offset presses to advanced eight-colour printing systems. Our product portfolio also includes paper cutting machines, paper folding machines, mini offset presses, bookbinding machines, and various other post-press and bindery equipment.
                </p>
                <p>
                  In the notebook manufacturing sector, we import and supply India’s leading <strong className="text-[#004669]">Stallion 3-in-1 Notebook Making Machines equipped with German heads</strong>, alongside economical and reliable solutions from established brands such as <strong className="text-[#435363]">Chetan</strong> and <strong className="text-[#435363]">Harbhajan</strong>. Additionally, Machinery Hub proudly serves as an <strong className="text-[#004669]">Authorized Dealer in Nepal for Autoprint and Sahil</strong> brands.
                </p>
              </div>

              {/* Director Spotlight & Heidelberg Speedmaster Plant Showcase */}
              <div className="mt-5 rounded-lg overflow-hidden border border-[#004669]/20 bg-gradient-to-br from-[#002b40] to-[#004669] text-white shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                  {/* Photo Column */}
                  <div className="md:col-span-5 relative min-h-[360px] sm:min-h-[400px] overflow-hidden bg-black/40">
                    <img
                      src={IMAGES.directorHeidelberg}
                      alt="Mr. Anand Karna, Director of Machinery Hub with Heidelberg Speedmaster Multi-Colour Press"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                    <div className="absolute bottom-3 left-3 right-3 md:hidden">
                      <span className="px-2 py-0.5 bg-[#e8b328] text-[#003854] text-[10px] font-roboto font-bold uppercase rounded">
                        On-Site Production Plant
                      </span>
                      <p className="font-heading font-bold text-sm text-white mt-1">
                        Mr. Anand Karna with Heidelberg Speedmaster
                      </p>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 bg-[#e8b328] text-[#003854] text-[10px] font-roboto font-bold uppercase tracking-wider rounded">
                          Director & Practical Expertise
                        </span>
                        <span className="text-[11px] text-gray-300 font-semibold">
                          20+ Years Hands-On Experience
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white leading-tight">
                        Led by Director Mr. Anand Karna
                      </h3>

                      <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed">
                        With over two decades of practical ground expertise in printing, bookbinding, and notebook manufacturing, Mr. Anand Karna personally inspects, verifies, and imports offset printing presses (Heidelberg Speedmaster & Komori Lithrone) and automatic notebook machines directly for printers and manufacturers across Nepal.
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded bg-white/10 backdrop-blur-xs border border-white/15">
                          <p className="text-[10px] text-[#e8b328] font-bold uppercase tracking-wider">
                            Active Plant Operator
                          </p>
                          <p className="text-[11px] font-medium text-white mt-0.5">
                            Operates own printing press & notebook factory in Nepal
                          </p>
                        </div>
                        <div className="p-2.5 rounded bg-white/10 backdrop-blur-xs border border-white/15">
                          <p className="text-[10px] text-[#e8b328] font-bold uppercase tracking-wider">
                            Pre-Inspected Quality
                          </p>
                          <p className="text-[11px] font-medium text-white mt-0.5">
                            Certified cylinders, gears & electronics before dispatch
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2.5">
                      <a
                        href={getWhatsAppUrl(
                          'Namaste Mr. Anand Karna ji, I saw your photo with the Heidelberg Speedmaster and want to discuss machinery requirements.'
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:brightness-105 text-white text-xs font-bold uppercase tracking-wider rounded font-roboto transition shadow"
                      >
                        <MessageSquare className="h-3.5 w-3.5" /> Chat Directly with Director
                      </a>
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-1 px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-bold uppercase tracking-wider rounded font-roboto transition border border-white/20"
                      >
                        Company Profile »
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Strength Highlight Box: Operating Own Facility */}
              <div className="mt-5 p-4 rounded-lg bg-[#F5FAFE] border-l-4 border-[#004669] space-y-2">
                <div className="flex items-center gap-2 text-[#004669] font-heading font-bold text-sm">
                  <Factory className="h-4 w-4 text-[#e8b328]" />
                  <span>Our Unique Industry Strength: Direct Hands-On Production Experience</span>
                </div>
                <p className="text-[12px] text-[#435363] leading-relaxed">
                  Unlike businesses that are exclusively involved in machinery trading, <strong>we also operate our own active notebook manufacturing facility and printing press</strong>. This practical industry experience gives us valuable first-hand knowledge of machine performance, production requirements, routine maintenance, operational challenges, and overall floor efficiency. Consequently, we understand your actual requirements and recommend machinery based on real-world production experience.
                </p>
              </div>

              {/* Leadership Strip */}
              <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[#8997a5]">Leadership: </span>
                  <strong className="text-[#435363]">Mr. Anand Karna, Director</strong>
                  <span className="text-[#076290] font-semibold"> (20+ Years Hands-On Industry Experience)</span>
                </div>
                <Link to="/about" className="cg-read-more">
                  READ FULL PROFILE »
                </Link>
              </div>
            </div>

            {/* Our Complete Product Range (All 8 Categories Breakdown) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4 border-b border-[#eef2f5] pb-2">
                <div>
                  <h2 className="cg-title !mb-0">Our Complete Product Range</h2>
                  <p className="text-xs text-[#8997a5] mt-0.5">
                    8 core machinery divisions serving printing, paper, notebook & packaging industries
                  </p>
                </div>
                <Link to="/we-import" className="cg-read-more">
                  View Catalog »
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat.slug}
                    className="p-4 rounded-lg border border-[#e1e8ed] bg-white hover:border-[#004669] transition shadow-xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-roboto font-extrabold text-sm text-[#004669]">
                        0{idx + 1}.
                      </span>
                      <Link
                        to={`/we-import?cat=${cat.slug}`}
                        className="font-heading font-bold text-xs text-[#435363] hover:text-[#004669] transition flex-1 leading-snug"
                      >
                        {cat.name}
                      </Link>
                    </div>

                    {cat.subcategories && (
                      <ul className="text-[11px] text-[#8997a5] space-y-1 pl-4 border-l border-[#eef2f5]">
                        {cat.subcategories.map((sub, sIdx) => (
                          <li key={sIdx} className="hover:text-[#004669] transition">
                            • {sub}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-2 text-right">
                      <Link
                        to={`/we-import?cat=${cat.slug}`}
                        className="text-[10px] font-roboto font-bold uppercase tracking-wider text-[#336699] hover:underline"
                      >
                        Inquire Machines »
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: col-md-4 */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Products Categories (All 8 Categories) */}
            <div className="bg-white">
              <h2 className="cg-title">Products Categories</h2>
              <div className="space-y-1">
                {CATEGORIES.map((cat, idx) => {
                  const isExpanded = expandedCat === cat.slug;
                  return (
                    <div key={cat.slug} className="cg-list-item">
                      <div className="flex items-center justify-between py-1">
                        <Link
                          to={`/we-import?cat=${cat.slug}`}
                          className="cg-list-link text-[13px] leading-snug flex-1"
                        >
                          » {cat.name}
                        </Link>
                        {cat.subcategories && (
                          <button
                            type="button"
                            onClick={() => setExpandedCat(isExpanded ? null : cat.slug)}
                            className="p-1 text-[#336699] hover:text-[#004669]"
                            title="Toggle Subcategories"
                          >
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expandable subcategory drawer */}
                      {isExpanded && cat.subcategories && (
                        <ul className="pl-4 pb-2 pt-1 text-[11px] text-[#8997a5] space-y-1 bg-[#F5FAFE] rounded my-1 border-l-2 border-[#004669]">
                          {cat.subcategories.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                to={`/we-import?cat=${cat.slug}`}
                                className="hover:text-[#004669] transition block py-0.5"
                              >
                                • {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="cg-divider-line" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Subscribe Newsletter / Quick Enquiry */}
            <div className="bg-[#F5FAFE] p-5 rounded border border-[#e1e8ed]">
              <h2 className="cg-title !mb-2">Subscribe Newsletter</h2>
              <p className="text-[12px] text-[#8997a5] mb-3 leading-relaxed">
                Stay updated with the latest machinery we import, pre-owned arrivals from Germany & Japan, and notebook manufacturing solutions.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full h-10 border border-[#e1e8ed] px-3 text-xs text-[#435363] rounded focus:outline-none focus:border-[#004669] bg-white"
                />
                <button
                  type="submit"
                  className="w-full h-10 bg-[#e8b328] hover:bg-[#d49f14] text-white font-roboto text-xs font-bold uppercase tracking-wider rounded transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* 3. Why Us */}
            <div className="bg-white">
              <h2 className="cg-title">Why Choose Machinery Hub</h2>
              <div className="space-y-3">
                {WHY_US_POINTS.map((point, idx) => (
                  <div key={idx} className="cg-list-item">
                    <p className="cg-list-link text-[13px] leading-relaxed">
                      » {point}
                    </p>
                    <div className="cg-divider-line" />
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Leadership & Contact Box */}
            <div className="border-2 border-[#004669] p-5 rounded bg-white shadow-sm space-y-3 text-xs">
              <span className="inline-block px-2.5 py-0.5 bg-[#004669] text-white font-roboto text-[10px] font-bold uppercase tracking-wider rounded">
                Official Leadership & Contact
              </span>
              <h3 className="font-heading text-sm font-bold text-[#435363]">
                Machinery Hub · Bhairahawa, Nepal
              </h3>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Director:</strong> Mr. Anand Karna
              </p>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Industry Experience:</strong> 20+ Years Hands-On
              </p>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Phone:</strong> +977-9857024409, 9824421727
              </p>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Email:</strong> karnfile@gmail.com
              </p>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Office:</strong> Siddharthanagar-6, Rupandehi, Bhairahawa
              </p>
              <p className="text-[#8997a5]">
                <strong className="text-[#435363]">Business Hours:</strong> 10 AM - 6 PM
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl('Hello Mr. Anand Karna ji, I want to discuss machinery requirements.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2 bg-[#25D366] text-white font-roboto font-bold text-xs uppercase tracking-wider rounded hover:brightness-105 transition"
                >
                  Chat with Director on WhatsApp
                </a>
                <Link
                  to="/contactus"
                  className="w-full text-center py-2 bg-[#004669] text-white font-roboto font-bold text-xs uppercase tracking-wider rounded hover:bg-[#003854] transition"
                >
                  View Contact Page & Location Map
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH SECTION: Our Services & Technical Support */}
      <section className="p-6 md:p-8 pt-0 bg-white">
        <div className="border-t border-[#eef2f5] pt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 border-b border-[#eef2f5] pb-3">
            <div>
              <h2 className="cg-title !mb-0">Our Services & Technical Support</h2>
              <p className="text-xs text-[#8997a5] mt-1">
                Comprehensive machinery lifecycle support, genuine spare parts, and production-tested operational training
              </p>
            </div>
            <Link to="/services" className="cg-read-more shrink-0">
              View All Services »
            </Link>
          </div>

          {/* Full Width 3-Column Grid Spanning from Left Border to Right Border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-[#e1e8ed] bg-[#F5FAFE] hover:bg-white hover:border-[#004669] hover:shadow-md transition flex gap-3.5 items-start group"
              >
                <div className="h-8 w-8 rounded bg-[#004669] text-[#e8b328] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#435363] group-hover:text-[#004669] transition">
                    {service.title}
                  </h4>
                  <p className="text-[12px] text-[#8997a5] mt-1.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#004669] hover:bg-[#003854] text-white text-xs font-bold uppercase tracking-wider font-roboto rounded transition shadow-sm"
            >
              Explore All Engineering & Technical Support Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FULL-WIDTH SECTION: Brands We Deal In & Authorized Dealerships */}
      <section className="p-6 md:p-8 pt-0 bg-white">
        <div className="border-t border-[#eef2f5] pt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 border-b border-[#eef2f5] pb-3">
            <div>
              <h2 className="cg-title !mb-0">Brands We Deal In & Authorized Dealerships</h2>
              <p className="text-xs text-[#8997a5] mt-1">
                We trade, import, and officially distribute machinery from the world’s most respected printing and notebook machinery manufacturers:
              </p>
            </div>
            <span className="text-xs font-semibold text-[#8997a5] shrink-0">
              International & Indian Leaders
            </span>
          </div>

          {/* Full Width 4-Column Grid Spanning from Left Border to Right Border */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="cg-brand-card flex-col text-center py-4 px-3"
              >
                <span className="font-roboto text-sm sm:text-base font-extrabold tracking-wider text-[#004669]">
                  {brand.name}
                </span>
                <span className="text-[11px] text-[#8997a5] font-semibold mt-1">
                  {brand.origin}
                </span>
                <span className="text-[10px] text-[#076290] font-medium mt-0.5">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH SECTION: Featured Machinery We Import (Full Width Till White Border) */}
      <section className="p-6 md:p-8 pt-0 bg-white">
        <div className="border-t border-[#eef2f5] pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-[#eef2f5] pb-3">
            <div>
              <h2 className="cg-title !mb-0">Featured Machinery We Import</h2>
              <p className="text-xs text-[#8997a5] mt-1">
                Pre-inspected offset printing machinery, paper cutting systems & notebook manufacturing lines
              </p>
            </div>
            <Link to="/we-import" className="cg-read-more shrink-0">
              View All Machinery We Import »
            </Link>
          </div>

          {/* Full Width Grid Spanning from Left Border to Right Border (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {MACHINES.slice(0, 8).map((machine) => (
              <div
                key={machine.slug}
                className="border border-[#e1e8ed] rounded-lg overflow-hidden bg-white hover:border-[#004669] hover:shadow-md transition shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 bg-white overflow-hidden flex items-center justify-center p-3 border-b border-[#f1f5f9]">
                    <img
                      src={machine.images[0]}
                      alt={machine.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#004669] text-white text-[10px] font-roboto font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      {machine.condition}
                    </span>
                    <span className="absolute bottom-2.5 left-2.5 bg-[#25D366] text-white text-[9px] font-roboto font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Available to Import
                    </span>
                    <span
                      className="absolute top-2.5 right-2.5 bg-[#F5FAFE] text-[#004669] border border-[#e1e8ed] text-[10px] font-roboto font-bold px-2 py-0.5 rounded shadow-xs max-w-[140px] truncate"
                      title={machine.model}
                    >
                      {machine.model}
                    </span>
                  </div>

                  <div className="p-4 space-y-2.5">
                    <h3 className="font-heading font-bold text-sm text-[#435363] line-clamp-1 group-hover:text-[#004669] transition">
                      {machine.name}
                    </h3>
                    <p className="text-[12px] text-[#8997a5] line-clamp-2 leading-relaxed">
                      {machine.description}
                    </p>

                    {machine.specs && machine.specs.length > 0 && (
                      <div className="mt-2.5 p-2.5 bg-[#F5FAFE] rounded border border-[#e1e8ed] text-[11px] space-y-1">
                        <div className="font-bold text-[#004669] flex items-start gap-1">
                          <span className="text-[#076290] font-extrabold shrink-0">►</span>
                          <span>
                            {machine.specs[0][0]}:{' '}
                            <span className="text-[#d9222a] font-extrabold">
                              {machine.specs[0][1]}
                            </span>
                          </span>
                        </div>
                        {machine.specs[1] && (
                          <div className="text-[10px] text-[#8997a5] pl-3.5 line-clamp-1">
                            <span className="font-semibold text-[#435363]">{machine.specs[1][0]}:</span>{' '}
                            {machine.specs[1][1]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2.5 border-t border-[#f1f5f9] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#004669]">
                      {formatPrice(machine.price)}
                    </span>
                    <Link
                      to={`/machines/${machine.slug}`}
                      className="text-[11px] font-bold text-[#336699] hover:underline uppercase tracking-wider flex items-center gap-1"
                    >
                      Specs & Details »
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/we-import"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#004669] hover:bg-[#003854] text-white text-xs font-bold uppercase tracking-wider font-roboto rounded transition shadow-sm"
            >
              Explore Full Machinery Import Catalog ({MACHINES.length} Machines) <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Award,
  ShieldCheck,
  Wrench,
  Truck,
  UserCheck,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Factory,
  BookOpen,
  Printer,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, BRANDS, IMAGES, getWhatsAppUrl } from '../data/machinery';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Page Title Banner */}
      <div className="bg-[#003854] text-white py-8 px-6 md:px-10 border-b-4 border-[#e8b328]">
        <div className="max-w-4xl">
          <p className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#e8b328] mb-1">
            <Link to="/" className="hover:underline">Home</Link> / About Us
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
            Company Profile — Machinery Hub
          </h1>
          <p className="mt-2 text-xs md:text-sm text-gray-200">
            {COMPANY_INFO.tagline} · Quality Machinery. Practical Expertise. Trusted Solutions.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-10">
        
        {/* 1. Main Profile & Specialization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-[13px] leading-[22px] text-[#8997a5]">
            <h2 className="cg-title">Your Trusted Partner in Printing & Paper Industry Machinery</h2>
            
            <p>
              <strong className="text-[#435363]">Machinery Hub</strong> is one of Nepal’s leading importers and suppliers of notebook manufacturing machinery, pre-owned offset printing machinery, and a comprehensive range of equipment for the printing, paper converting, and bookbinding industries.
            </p>
            <p>
              We specialize in importing and supplying a wide range of quality-tested pre-owned offset printing machines, from small-format offset presses to advanced eight-colour printing systems. Our product portfolio also includes paper cutting machines, paper folding machines, mini offset presses, bookbinding machines, and various other post-press and bindery equipment.
            </p>
            <p>
              We deal in internationally recognized machinery brands, including <strong className="text-[#004669]">HEIDELBERG, KOMORI, STAHL, POLAR, SHOEI, MBO, ITOH, NAGAI, RYOBI, HAMADA, and ADAST</strong>, among others.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Mr. Anand Karna ji, I want to discuss machinery requirements for my plant.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#004669] hover:bg-[#003854] text-white px-5 py-2.5 rounded font-roboto text-xs font-bold uppercase tracking-wider transition"
              >
                Inquire Directly With Director »
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-[#c6d093] rounded-lg overflow-hidden bg-[#F5FAFE] p-4 shadow-sm">
              <img
                src={IMAGES.hero}
                alt="Machinery Hub offset printing machinery"
                className="w-full h-56 object-cover rounded mb-4"
              />
              <div className="space-y-1 text-xs text-[#435363]">
                <p className="font-bold text-[#004669] text-sm">
                  Pre-Owned Offset Presses (1 to 8 Colours)
                </p>
                <p className="text-[#8997a5] text-[12px] leading-relaxed">
                  Every pre-owned press undergoes cylinder inspection, electrical diagnostic check, and trial test run before handover.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Notebook Manufacturing Machinery Section */}
        <div className="p-6 md:p-8 rounded-lg bg-[#F5FAFE] border border-[#e1e8ed] space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#004669]" />
            <h2 className="cg-title !mb-0">Notebook Manufacturing Machinery</h2>
          </div>
          <p className="text-[13px] leading-[22px] text-[#435363]">
            In the notebook manufacturing sector, Machinery Hub imports and supplies a comprehensive range of machinery to meet different production requirements and investment levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#004669]">
                Stallion 3-in-1 Notebook Making Machines (German Heads)
              </h4>
              <p className="text-[12px] text-[#8997a5] leading-relaxed">
                Our product range features India’s leading <strong>Stallion 3-in-1 Notebook Making Machines equipped with genuine German heads</strong>, ensuring top-tier wire stitching, precise folding, and spine pressing.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#004669]">
                Chetan & Harbhajan Notebook Solutions
              </h4>
              <p className="text-[12px] text-[#8997a5] leading-relaxed">
                We supply economical, rugged, and reliable notebook manufacturing solutions from established, proven Indian brands such as <strong>Chetan</strong> and <strong>Harbhajan</strong>.
              </p>
            </div>
          </div>

          <div className="mt-2 p-3 bg-white rounded border border-[#c6d093] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#004669] uppercase tracking-wider block">
                Official Dealership Status
              </span>
              <span className="text-[#435363] font-semibold">
                Authorized Dealer in Nepal for <strong>Autoprint</strong> and <strong>Sahil</strong> brands.
              </span>
            </div>
            <Link
              to="/we-import?cat=notebook"
              className="px-4 py-2 bg-[#004669] text-white font-roboto font-bold uppercase tracking-wider rounded text-[11px] hover:bg-[#003854] whitespace-nowrap"
            >
              Explore Notebook Machines »
            </Link>
          </div>
        </div>

        {/* 3. Industry Experience & Technical Expertise (Direct Involvement) */}
        <div className="border-2 border-[#004669] rounded-lg p-6 md:p-8 bg-white space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Factory className="h-6 w-6 text-[#e8b328]" />
            <h2 className="cg-title !mb-0 text-[#004669]">
              Industry Experience & Technical Expertise
            </h2>
          </div>
          
          <div className="space-y-3 text-[13px] leading-[22px] text-[#435363]">
            <p className="font-semibold text-[#004669] text-sm">
              Our Core Differentiation: We operate our own active notebook manufacturing facility and printing press.
            </p>
            <p>
              One of the key strengths of Machinery Hub is its direct involvement in the printing and notebook manufacturing industries. Unlike businesses that are exclusively involved in machinery trading, <strong>we also operate our own notebook manufacturing facility and printing press</strong>.
            </p>
            <p>
              This practical industry experience gives us valuable first-hand knowledge of machine performance, production requirements, maintenance, operational challenges, and overall floor efficiency. Consequently, we are better positioned to understand our customers' actual requirements and recommend machinery based on practical production experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <div className="p-3 bg-[#F5FAFE] rounded border border-[#e1e8ed] text-xs">
              <span className="font-bold text-[#004669] block mb-1">Production Tested</span>
              <p className="text-[#8997a5]">We test equipment against actual day-to-day manufacturing workloads.</p>
            </div>
            <div className="p-3 bg-[#F5FAFE] rounded border border-[#e1e8ed] text-xs">
              <span className="font-bold text-[#004669] block mb-1">Practical Advisory</span>
              <p className="text-[#8997a5]">Recommendations based on real paper GSM, ink, and wire behavior.</p>
            </div>
            <div className="p-3 bg-[#F5FAFE] rounded border border-[#e1e8ed] text-xs">
              <span className="font-bold text-[#004669] block mb-1">Troubleshooting Mastery</span>
              <p className="text-[#8997a5]">Hands-on technical troubleshooting developed on our own factory floor.</p>
            </div>
          </div>
        </div>

        {/* 4. Leadership & Our Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leadership */}
          <div className="p-6 rounded-lg bg-[#F5FAFE] border border-[#e1e8ed] space-y-3">
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-[#004669]" />
              <h3 className="font-heading font-bold text-lg text-[#435363]">
                Leadership & Vision
              </h3>
            </div>

            <div className="relative h-64 sm:h-72 md:h-80 w-full rounded overflow-hidden bg-[#002b40] my-2 border border-[#004669]/20 shadow-xs">
              <img
                src={IMAGES.directorPortrait}
                alt="Mr. Anand Karna - Director, Machinery Hub Nepal"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                <span className="inline-block px-2 py-0.5 bg-[#e8b328] text-[#003854] text-[9px] font-roboto font-bold uppercase rounded mb-0.5">
                  Director & Industry Veteran
                </span>
                <p className="font-heading font-bold text-sm text-white leading-tight">Mr. Anand Karna</p>
                <p className="text-[10px] text-gray-200">20+ Years Hands-On Printing & Machinery Expertise</p>
              </div>
            </div>

            <p className="text-[13px] text-[#435363] font-bold">
              Mr. Anand Karna, Director
            </p>
            <p className="text-[13px] leading-[22px] text-[#8997a5]">
              Machinery Hub is led by <strong>Mr. Anand Karna, Director</strong>, who brings over <strong>20 years of hands-on experience</strong> in the printing, paper, and notebook manufacturing machinery sector. His extensive industry knowledge and practical business experience form the foundation of our commitment to delivering suitable machinery solutions to customers throughout Nepal.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Mr. Anand Karna ji, I would like to consult with you regarding machinery.')}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-roboto font-bold text-[#004669] hover:underline uppercase tracking-wider"
              >
                Chat with Director Mr. Anand Karna »
              </a>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="p-6 rounded-lg bg-[#F5FAFE] border border-[#e1e8ed] space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#004669]" />
              <h3 className="font-heading font-bold text-lg text-[#435363]">
                Our Commitment
              </h3>
            </div>
            <p className="text-[13px] text-[#435363] font-bold">
              Quality Machinery. Practical Expertise. Trusted Solutions.
            </p>
            <p className="text-[13px] leading-[22px] text-[#8997a5]">
              At Machinery Hub, our primary objective is to provide reliable, quality machinery and dependable service to our customers. We believe in building long-term business relationships through in-depth product knowledge, professional technical guidance, transparent dealings, and enduring customer satisfaction.
            </p>
          </div>
        </div>

        {/* 5. Corporate Facts Table */}
        <div>
          <h2 className="cg-title">Corporate Profile & Key Facts</h2>
          <div className="border border-[#e1e8ed] rounded-md overflow-hidden bg-white text-xs">
            <div className="divide-y divide-[#eef2f5]">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Factory className="h-4 w-4 text-[#004669]" /> Company / Trade Name
                </span>
                <span className="sm:col-span-2 text-[#435363] font-semibold">
                  Machinery Hub
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-[#004669]" /> Director & Leadership
                </span>
                <span className="sm:col-span-2 text-[#435363] font-semibold">
                  Mr. Anand Karna, Director (20+ Years Experience)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#004669]" /> Year of Establishment
                </span>
                <span className="sm:col-span-2 text-[#435363] font-semibold">
                  2020
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#004669]" /> Nature of Business
                </span>
                <span className="sm:col-span-2 text-[#8997a5] leading-relaxed">
                  Trading, Import, Supply and Distribution of New, Pre-Owned and Refurbished Printing Machinery, Paper Industry Machinery and Related Equipment, including Installation, Maintenance and After-Sales Services. Active operators of a notebook manufacturing facility and printing press.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#004669]" /> Authorized Dealerships
                </span>
                <span className="sm:col-span-2 text-[#004669] font-bold">
                  Authorized Dealer in Nepal for Autoprint and Sahil brands
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#004669]" /> Complete Office Address
                </span>
                <span className="sm:col-span-2 text-[#435363]">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#004669]" /> Official Contact Numbers
                </span>
                <span className="sm:col-span-2 text-[#435363]">
                  {COMPANY_INFO.phone} (WhatsApp available on both)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5">
                <span className="font-bold text-[#435363] flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#004669]" /> Official Email Address
                </span>
                <span className="sm:col-span-2 text-[#004669] font-semibold">
                  {COMPANY_INFO.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Brands Grid */}
        <div>
          <h2 className="cg-title">Internationally Recognized Machinery Brands We Deal In</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="cg-brand-card flex-col text-center">
                <span className="font-roboto text-sm font-extrabold tracking-wider text-[#004669]">
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#8997a5] font-semibold mt-0.5">
                  {brand.origin}
                </span>
                <span className="text-[9px] text-[#076290] font-medium mt-0.5">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Factory } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#eef2f5] mt-8 text-[#8997a5]">
      {/* Information Row */}
      <div className="p-6 md:p-8 border-b border-[#f1f5f9] bg-[#F5FAFE]/60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs leading-relaxed">
          {/* Col 1: About Brief */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Machinery Hub Logo"
                className="h-12 w-auto object-contain drop-shadow-sm"
              />
              <div>
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#435363] leading-none">
                  Machinery Hub
                </h4>
                <p className="text-[10px] text-[#004669] font-bold mt-1">Bhairahawa, Nepal</p>
              </div>
            </div>
            <p className="text-[#8997a5]">
              Nepal’s leading importer & supplier of notebook manufacturing machinery, pre-owned offset printing machinery, and comprehensive bindery solutions.
            </p>
            <p className="font-semibold text-[#004669]">
              Director: {COMPANY_INFO.contactPerson} (20+ Years Experience)
            </p>
            <p className="text-[11px] text-[#076290] italic">
              "Quality Machinery. Practical Expertise. Trusted Solutions."
            </p>
          </div>

          {/* Col 2: Services / Machinery */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#435363] mb-2">
              Machinery We Import
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/we-import?cat=offset" className="hover:text-[#004669] transition">
                  » Pre-Owned Offset Presses (1-8 Colours)
                </Link>
              </li>
              <li>
                <Link to="/we-import?cat=notebook" className="hover:text-[#004669] transition">
                  » Stallion 3-in-1 Notebook Machines
                </Link>
              </li>
              <li>
                <Link to="/we-import?cat=notebook" className="hover:text-[#004669] transition">
                  » Chetan & Harbhajan Notebook Lines
                </Link>
              </li>
              <li>
                <Link to="/we-import?cat=offset" className="hover:text-[#004669] transition">
                  » Authorized Dealer: Autoprint & Sahil
                </Link>
              </li>
              <li>
                <Link to="/we-import?cat=cutting-processing" className="hover:text-[#004669] transition">
                  » Polar, Semi-Auto & Manual Cutters
                </Link>
              </li>
              <li>
                <Link to="/we-import?cat=folding-ruling" className="hover:text-[#004669] transition">
                  » Stahl & MBO Paper Folders
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#435363] mb-2">
              Head Office
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#076290] mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#076290]" />
                <a href="tel:+9779857024409" className="hover:text-[#004669]">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#076290]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#004669]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#076290]" />
                <span>Business Hours: {COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Practical Involvement */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#435363]">
              Practical Industry Backing
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <Factory className="h-4 w-4 text-[#e8b328] shrink-0 mt-0.5" />
              <span>
                We operate our own active notebook manufacturing unit and printing press — ensuring every recommendation is grounded in real production experience.
              </span>
            </div>
            <div className="pt-1">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#1877F2] px-3 py-1.5 text-xs font-bold text-white hover:brightness-105 transition"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook: /machineryhubbhw
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer identical to City Graphics #sub-footer */}
      <div id="sub-footer" className="p-4 px-6 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#8997a5] gap-3">
          <p className="m-0 text-center md:text-left">
            Copyrights © {new Date().getFullYear()} <strong className="text-[#435363]">Machinery Hub</strong>. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-roboto text-[12px]">
            <Link to="/" className="text-[#8997a5] hover:text-[#004669] transition">
              Home
            </Link>
            <span>|</span>
            <Link to="/about" className="text-[#8997a5] hover:text-[#004669] transition">
              About Us
            </Link>
            <span>|</span>
            <Link to="/we-import" className="text-[#8997a5] hover:text-[#004669] transition">
              We Import
            </Link>
            <span>|</span>
            <Link to="/services" className="text-[#8997a5] hover:text-[#004669] transition">
              Services
            </Link>
            <span>|</span>
            <Link to="/contactus" className="text-[#8997a5] hover:text-[#004669] transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X as CloseIcon, Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

export const NAV_ITEMS = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT US' },
  { to: '/we-import', label: 'WE IMPORT' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contactus', label: 'CONTACT US' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-transparent">
      {/* 1. Brand Logo Header (Centered on White) */}
      <div className="bg-white py-5 px-4 text-center border-b border-[#eef2f5]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="hidden md:flex items-center gap-3 text-left text-xs text-[#666666]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5FAFE] border border-[#e1e8ed] text-[#004669]">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="font-bold text-[#435363] text-sm">+977-9857024409</p>
              <p className="text-[11px] text-[#8997a5]">9824421727 · Bhairahawa</p>
            </div>
          </div>

          <Logo />

          <div className="hidden md:flex items-center gap-2">
            <a
              href={getWhatsAppUrl('Hello Anand ji, I am contacting you from Machinery Hub website.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#25D366] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:brightness-105 transition"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Dark Navy #004669) */}
      <nav id="main-header" className="bg-[#004669] text-white w-full shadow-md sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 min-h-[46px]">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-1 font-roboto text-[12px] font-bold tracking-wider uppercase">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `inline-block px-4 py-3 transition-colors duration-150 ${
                      isActive
                        ? 'text-[#f4c23d] bg-[#003854]'
                        : 'text-white hover:text-[#f4c23d] hover:bg-[#003854]/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden py-2 px-3 text-white focus:outline-none flex items-center gap-2 text-xs font-bold uppercase font-roboto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span>Menu</span>
          </button>

          {/* Right-Side Social Media & Quick Contact */}
          <div className="flex items-center space-x-3 text-sm">
            {/* Facebook */}
            <a
              href={COMPANY_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded text-white hover:text-[#f4c23d] hover:bg-[#003854] transition"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl('Hello Machinery Hub!')}
              target="_blank"
              rel="noreferrer"
              title="Chat on WhatsApp"
              className="flex h-7 w-7 items-center justify-center rounded text-white hover:text-[#25D366] hover:bg-[#003854] transition"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>

            {/* Call Direct */}
            <a
              href="tel:+9779857024409"
              className="hidden lg:flex items-center gap-1.5 text-[11px] font-roboto font-bold uppercase tracking-wider text-white bg-[#003854] px-2.5 py-1 rounded hover:text-[#f4c23d] transition"
            >
              <Phone className="h-3 w-3 text-[#e8b328]" />
              <span>Call: 9857024409</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#003854] border-t border-[#076290] px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-xs font-bold uppercase tracking-wider font-roboto rounded ${
                    isActive ? 'text-[#f4c23d] bg-[#004669]' : 'text-white hover:text-[#f4c23d]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-[#076290] flex items-center justify-between text-xs text-white">
              <span>Bhairahawa: +977-9857024409</span>
              <a
                href={getWhatsAppUrl('Hello!')}
                className="text-[#25D366] font-bold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

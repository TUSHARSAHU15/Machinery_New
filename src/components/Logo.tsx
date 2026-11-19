import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/machinery';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="inline-flex flex-col items-center text-center group">
      <div className="flex items-center gap-3.5">
        {/* Official Machinery Hub Logo Badge */}
        <img
          src="/assets/logo.png"
          alt="Machinery Hub Logo"
          className="h-16 w-auto sm:h-20 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
        />

        {/* Title & Tagline */}
        <div className="text-left">
          <span className="block font-heading text-2xl md:text-3xl font-extrabold tracking-wide text-[#004669] leading-tight">
            MACHINERY HUB
          </span>
          <span className="block font-sans text-xs md:text-sm font-semibold italic text-[#666666] tracking-tight">
            {COMPANY_INFO.tagline}
          </span>
        </div>
      </div>
      
      {/* Motto & Location line */}
      <span className="mt-1.5 inline-block text-[11px] font-semibold uppercase tracking-wider text-[#076290]">
        Quality Machinery · Practical Expertise · Trusted Solutions · Bhairahawa, Nepal
      </span>
    </Link>
  );
};

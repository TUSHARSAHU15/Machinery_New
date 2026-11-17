import React from 'react';
import { Link } from 'react-router-dom';
import { Cog } from 'lucide-react';
import { COMPANY_INFO } from '../data/machinery';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="inline-flex flex-col items-center text-center group">
      <div className="flex items-center gap-3">
        {/* Emblem */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d9222a] via-[#c4161e] to-[#8f0d13] p-1 shadow-md border-2 border-[#e8b328]">
          <div className="flex h-full w-full items-center justify-center rounded-full border border-white/40 bg-gradient-to-b from-white/20 to-transparent">
            <span className="font-roboto text-xl font-black tracking-tighter text-white drop-shadow">
              MH
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#004669] text-[#e8b328] border border-white">
            <Cog className="h-3.5 w-3.5 animate-spin-slow" />
          </div>
        </div>

        {/* Title */}
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

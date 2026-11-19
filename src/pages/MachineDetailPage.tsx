import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Phone, ShieldCheck, Wrench, ArrowLeft, Factory } from 'lucide-react';
import { MACHINES, COMPANY_INFO, formatPrice, getWhatsAppUrl } from '../data/machinery';

export const MachineDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const machine = MACHINES.find((m) => m.slug === slug);

  if (!machine) {
    return <Navigate to="/we-import" replace />;
  }

  const [activeImage, setActiveImage] = useState(machine.images[0]);

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="bg-[#003854] text-white py-6 px-6 md:px-10 border-b-4 border-[#e8b328]">
        <div className="max-w-4xl">
          <p className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#e8b328] mb-1">
            <Link to="/" className="hover:underline">Home</Link> / <Link to="/we-import" className="hover:underline">We Import</Link> / {machine.name}
          </p>
          <h1 className="font-heading text-xl md:text-2xl font-extrabold text-white">
            {machine.name}
          </h1>
          <p className="mt-1 text-xs text-gray-200">
            Model: {machine.model} · Condition: {machine.condition} · Status: Available to Import on Order
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-8">
        <Link
          to="/we-import"
          className="inline-flex items-center gap-1.5 text-xs font-roboto font-bold uppercase text-[#004669] hover:text-[#336699]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Machinery We Import
        </Link>

        {/* Top Section: Photos & Quick Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Photos */}
          <div className="lg:col-span-7 space-y-3">
            <div className="h-80 sm:h-[420px] w-full rounded-lg overflow-hidden border border-[#e1e8ed] bg-white flex items-center justify-center p-4 shadow-xs">
              <img
                src={activeImage}
                alt={machine.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-sm"
              />
            </div>
            {machine.images.length > 1 && (
              <div className="flex gap-2">
                {machine.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`h-16 w-20 rounded border-2 overflow-hidden ${
                      activeImage === img ? 'border-[#004669]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Details & Inquire */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block px-2.5 py-1 bg-[#004669] text-white text-[11px] font-roboto font-bold uppercase tracking-wider rounded">
                  {machine.condition} Machinery
                </span>
                <span className="inline-block px-2.5 py-1 bg-[#25D366] text-white text-[11px] font-roboto font-bold uppercase tracking-wider rounded">
                  Available to Import on Order
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#435363] leading-tight">
                {machine.name}
              </h2>
              <p className="font-semibold text-sm text-[#004669] mt-1">
                Model: {machine.model}
              </p>
              <p className="mt-3 text-lg font-extrabold text-[#004669]">
                {formatPrice(machine.price)}
              </p>
            </div>

            <p className="text-[13px] text-[#8997a5] leading-[22px]">
              {machine.description}
            </p>

            <div className="p-4 rounded-lg bg-[#F5FAFE] border border-[#e1e8ed] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#435363] font-semibold">
                <ShieldCheck className="h-4 w-4 text-[#e8b328]" />
                <span>Multi-point inspected & performance certified</span>
              </div>
              <div className="flex items-center gap-2 text-[#435363] font-semibold">
                <Wrench className="h-4 w-4 text-[#004669]" />
                <span>On-site installation & operator training included</span>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="space-y-2 pt-2">
              <a
                href={getWhatsAppUrl(
                  `Hello Anand Karna ji, I want a price quotation, availability and delivery schedule for ${machine.name} (Model: ${machine.model}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 bg-[#25D366] hover:brightness-105 text-white font-roboto font-bold text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4" /> Inquire via WhatsApp (+977-9857024409)
              </a>

              <a
                href="tel:+9779857024409"
                className="w-full text-center py-2.5 bg-[#004669] hover:bg-[#003854] text-white font-roboto font-bold text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-[#e8b328]" /> Call Owner Anand Karna Directly
              </a>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="space-y-4 pt-4 border-t border-[#eef2f5]">
          <h2 className="cg-title">Technical Specifications</h2>
          <div className="border border-[#e1e8ed] rounded-md overflow-hidden bg-white text-xs">
            <div className="divide-y divide-[#eef2f5]">
              <div className="grid grid-cols-2 p-3 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363]">Capacity / Production Speed</span>
                <span className="text-[#435363] font-semibold">{machine.capacity}</span>
              </div>
              <div className="grid grid-cols-2 p-3">
                <span className="font-bold text-[#435363]">Power Requirements</span>
                <span className="text-[#8997a5]">{machine.power}</span>
              </div>
              <div className="grid grid-cols-2 p-3 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363]">Dimensions (L × W × H)</span>
                <span className="text-[#8997a5]">{machine.dimensions}</span>
              </div>
              {machine.specs.map(([label, val], idx) => (
                <div key={idx} className={`grid grid-cols-2 p-3 ${idx % 2 === 0 ? '' : 'bg-[#F5FAFE]'}`}>
                  <span className="font-bold text-[#435363]">{label}</span>
                  <span className="text-[#8997a5]">{val}</span>
                </div>
              ))}
              <div className="grid grid-cols-2 p-3 bg-[#F5FAFE]">
                <span className="font-bold text-[#435363]">Installation & Support</span>
                <span className="text-[#004669] font-semibold">{machine.support}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

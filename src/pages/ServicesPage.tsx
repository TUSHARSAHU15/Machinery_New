import React from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  Scissors,
  BookOpen,
  Layers,
  RefreshCw,
  Truck,
  GraduationCap,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { SERVICES, COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

const SERVICE_ICONS = [
  Printer,
  Scissors,
  BookOpen,
  Layers,
  RefreshCw,
  Truck,
  GraduationCap,
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Page Title Banner */}
      <div className="bg-[#003854] text-white py-8 px-6 md:px-10 border-b-4 border-[#e8b328]">
        <div className="max-w-4xl">
          <p className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#e8b328] mb-1">
            <Link to="/" className="hover:underline">Home</Link> / Our Services
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
            Our Services & Engineering Support
          </h1>
          <p className="mt-2 text-xs md:text-sm text-gray-200">
            End-to-End Machinery Solutions: Supply, Import, Nationwide Delivery, Precision Installation & Operator Training
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-10">
        {/* Intro */}
        <div className="max-w-3xl space-y-3">
          <h2 className="cg-title">Comprehensive Machinery & Technical Services</h2>
          <p className="text-[13px] leading-[22px] text-[#8997a5]">
            At <strong className="text-[#435363]">Machinery Hub</strong>, we understand that purchasing industrial printing and notebook equipment is an investment in your company’s future. Beyond trading and importing quality machinery, our dedicated technical team provides continuous engineering support from site preparation through to active production.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx] || CheckCircle2;
            return (
              <div
                key={service.title}
                className="border border-[#e1e8ed] rounded-lg p-5 bg-white shadow-sm hover:border-[#004669] hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded bg-[#F5FAFE] border border-[#c6d093] text-[#004669] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#004669]" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#435363]">
                    {service.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-[#8997a5]">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#f1f5f9]">
                  <a
                    href={getWhatsAppUrl(`Hello Anand ji, I want to inquire about your service: ${service.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#336699] hover:text-[#004669] flex items-center gap-1"
                  >
                    Inquire Service »
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* How We Work Process */}
        <div className="bg-[#F5FAFE] border border-[#e1e8ed] rounded-lg p-6 md:p-8 space-y-6">
          <h2 className="cg-title !mb-2">How We Work — Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <span className="font-roboto font-extrabold text-xl text-[#004669]">01</span>
              <h4 className="font-heading font-bold text-xs text-[#435363]">
                Consultation & Sourcing
              </h4>
              <p className="text-[11px] text-[#8997a5] leading-relaxed">
                We analyze your production volume, GSM specifications, and budget to identify the exact machine.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <span className="font-roboto font-extrabold text-xl text-[#004669]">02</span>
              <h4 className="font-heading font-bold text-xs text-[#435363]">
                Testing & Inspection
              </h4>
              <p className="text-[11px] text-[#8997a5] leading-relaxed">
                Multi-point inspection, cylinder checking, electrical calibration and live dry-run before dispatch.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <span className="font-roboto font-extrabold text-xl text-[#004669]">03</span>
              <h4 className="font-heading font-bold text-xs text-[#435363]">
                Delivery & Commissioning
              </h4>
              <p className="text-[11px] text-[#8997a5] leading-relaxed">
                Safe transit to your factory, unloading, precision positioning, leveling, and electrical connection.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-[#e1e8ed] space-y-2">
              <span className="font-roboto font-extrabold text-xl text-[#004669]">04</span>
              <h4 className="font-heading font-bold text-xs text-[#435363]">
                Operator Training & Support
              </h4>
              <p className="text-[11px] text-[#8997a5] leading-relaxed">
                Comprehensive training for your machine operators, followed by responsive after-sales service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-6 rounded-lg bg-[#004669] text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-bold text-lg text-white">
              Need technical assistance or a service visit?
            </h3>
            <p className="text-xs text-gray-200">
              Speak directly with Anand Karna (Owner) or request on-site machine commissioning.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={getWhatsAppUrl('Hello Anand Karna ji, I need a service visit / technical assistance.')}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#25D366] hover:brightness-105 text-white text-xs font-roboto font-bold uppercase tracking-wider rounded transition flex items-center gap-1.5"
            >
              <MessageSquare className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link
              to="/contactus"
              className="px-4 py-2.5 bg-[#e8b328] hover:bg-[#d49f14] text-[#003854] text-xs font-roboto font-bold uppercase tracking-wider rounded transition"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

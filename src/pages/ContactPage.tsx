import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  UserCheck,
  MessageSquare,
  Facebook,
  ShieldCheck,
} from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Page Title Banner */}
      <div className="bg-[#003854] text-white py-8 px-6 md:px-10 border-b-4 border-[#e8b328]">
        <div className="max-w-4xl">
          <p className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#e8b328] mb-1">
            <Link to="/" className="hover:underline">Home</Link> / Contact Us
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
            Contact Machinery Hub
          </h1>
          <p className="mt-2 text-xs md:text-sm text-gray-200">
            Reach Out for Machinery Inquiries, Quotes, On-Site Installation, and Technical Advisory
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="cg-title">Get in Touch</h2>
              <p className="text-[13px] leading-[22px] text-[#8997a5]">
                We welcome visits to our office and warehouse. Please contact us via phone, email, or WhatsApp to schedule a machinery inspection or discuss your production setup.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3.5 text-xs">
              {/* Contact Person & Owner */}
              <div className="flex items-start gap-3 p-3.5 rounded border border-[#e1e8ed] bg-[#F5FAFE]">
                <div className="h-8 w-8 rounded bg-[#004669] text-white flex items-center justify-center shrink-0">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8997a5] uppercase tracking-wider block">
                    Contact Person & Designation
                  </span>
                  <span className="font-bold text-[#435363] text-sm">
                    {COMPANY_INFO.contactPerson} ({COMPANY_INFO.contactDesignation})
                  </span>
                </div>
              </div>

              {/* Official Contact Number */}
              <div className="flex items-start gap-3 p-3.5 rounded border border-[#e1e8ed] bg-white">
                <div className="h-8 w-8 rounded bg-[#004669] text-white flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8997a5] uppercase tracking-wider block">
                    Official Contact Numbers
                  </span>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href="tel:+9779857024409"
                      className="font-bold text-[#004669] hover:underline block"
                    >
                      +977-9857024409
                    </a>
                    <a
                      href="tel:+9779824421727"
                      className="font-bold text-[#004669] hover:underline block"
                    >
                      +977-9824421727
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3 p-3.5 rounded border border-[#e1e8ed] bg-[#F5FAFE]">
                <div className="h-8 w-8 rounded bg-[#004669] text-white flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8997a5] uppercase tracking-wider block">
                    Official Email Address
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-bold text-[#004669] hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3 p-3.5 rounded border border-[#e1e8ed] bg-white">
                <div className="h-8 w-8 rounded bg-[#004669] text-white flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8997a5] uppercase tracking-wider block">
                    Complete Office Address
                  </span>
                  <p className="font-semibold text-[#435363] leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3 p-3.5 rounded border border-[#e1e8ed] bg-[#F5FAFE]">
                <div className="h-8 w-8 rounded bg-[#004669] text-white flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8997a5] uppercase tracking-wider block">
                    Business Hours
                  </span>
                  <p className="font-semibold text-[#435363]">
                    {COMPANY_INFO.hours} (Sunday – Friday)
                  </p>
                </div>
              </div>

              {/* Social Media & Direct Chat */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl('Hello Anand Karna ji, I am contacting you from Machinery Hub website.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:brightness-105 text-white font-roboto text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" /> Chat on WhatsApp (+977-9857024409)
                </a>

                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-[#1877F2] hover:brightness-105 text-white font-roboto text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook: /machineryhubbhw
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="pt-2">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#435363] mb-2">
                Google Maps Location
              </h3>
              <div className="h-56 w-full rounded border border-[#e1e8ed] overflow-hidden shadow-sm">
                <iframe
                  title="Machinery Hub Location Map"
                  src="https://www.google.com/maps?q=Siddharthanagar-6,+Rupandehi,+Bhairahawa,+Nepal&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

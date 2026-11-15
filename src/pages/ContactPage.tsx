import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { IMAGES, COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk about your machinery needs"
        image={IMAGES.parts}
      />

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        {/* Left Side: Contact Details, Facebook, WhatsApp buttons, Map */}
        <div className="space-y-4">
          {/* Quick Support Badge */}
          <div className="flex items-center gap-3.5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <UserCheck className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-foreground">
                {COMPANY_INFO.contactPerson}{' '}
                <span className="font-medium text-primary">({COMPANY_INFO.contactDesignation})</span>
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1">
                Machinery Hub • {COMPANY_INFO.natureOfBusiness}
              </p>
            </div>
          </div>

          {/* Phone Numbers Card */}
          <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">Call Us Directly</p>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-bold text-foreground transition-colors hover:text-primary"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <MapPin className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-bold text-foreground">{COMPANY_INFO.address}</p>
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                View on Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Business Hours</p>
              <p className="font-bold text-foreground">{COMPANY_INFO.hours}</p>
            </div>
          </div>

          {/* Facebook Link Box */}
          <a
            href={COMPANY_INFO.facebook}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition hover:border-primary/50"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1877F2]/10 text-[#1877F2]">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Follow our Facebook Page</p>
              <p className="font-bold text-foreground transition-colors group-hover:text-primary">
                facebook.com/machineryhubbhw
              </p>
            </div>
          </a>

          {/* WhatsApp Direct Chat Buttons */}
          <div className="grid gap-2.5 sm:grid-cols-2">
            <a
              href={getWhatsAppUrl('Hello Machinery Hub!', COMPANY_INFO.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp p-3.5 text-xs sm:text-sm font-bold text-steel-foreground transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp 1 (+977 {COMPANY_INFO.whatsapp.replace(/^977/, '')})
            </a>
            <a
              href={getWhatsAppUrl('Hello Machinery Hub!', COMPANY_INFO.whatsappSecondary)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp/90 p-3.5 text-xs sm:text-sm font-bold text-steel-foreground transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp 2 (+977 {COMPANY_INFO.whatsappSecondary.replace(/^977/, '')})
            </a>
          </div>

          <iframe
            title="Machinery Hub Office Location Map"
            className="h-64 w-full rounded-xl border border-border shadow-card"
            loading="lazy"
            src="https://www.google.com/maps?q=Siddharthanagar-6,+Rupandehi,+Bhairahawa,+Nepal&output=embed"
          />
        </div>

        {/* Right Side: Enquiry Form */}
        <EnquiryForm />
      </section>
    </>
  );
};

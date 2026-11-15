import React from 'react';
import { Award, Eye, Target, Calendar, Building2, MapPin, Users } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import { IMAGES, COMPANY_INFO } from '../data/machinery';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Built on experience. Driven by your growth."
        image={IMAGES.hero}
      />

      {/* Story Section */}
      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Who we are"
            title={`Industrial machinery experts since ${COMPANY_INFO.establishedYear}`}
          />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {COMPANY_INFO.about}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our team of engineers and technicians brings hands-on experience across hundreds of
            installations, so every recommendation is grounded in real production knowledge.
          </p>
        </div>
        <img
          src={IMAGES.binding}
          alt="Binding machine producing books"
          loading="lazy"
          className="rounded-xl shadow-card w-full object-cover"
        />
      </section>

      {/* Corporate Profile at a Glance */}
      <section className="border-y border-border/70 bg-card/60 py-16">
        <div className="container-x">
          <SectionHeader
            eyebrow="At a Glance"
            title="Company Overview"
            subtitle="Key corporate profile details for partners, investors, and clients."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Established
              </p>
              <p className="mt-1 font-display text-xl font-bold text-foreground">
                Since {COMPANY_INFO.establishedYear}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Founded & operating in Nepal
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Nature of Business
              </p>
              <p className="mt-1 font-display text-sm font-bold text-foreground line-clamp-3">
                {COMPANY_INFO.natureOfBusiness}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Import, supply & after-sales service
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Office & Operations
              </p>
              <p className="mt-1 font-display text-sm font-bold text-foreground">
                {COMPANY_INFO.address}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Nationwide delivery & setup
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Leadership
              </p>
              <p className="mt-1 font-display text-base font-bold text-foreground">
                {COMPANY_INFO.contactPerson}
              </p>
              <p className="mt-1 text-xs text-muted-foreground font-semibold text-primary">
                {COMPANY_INFO.contactDesignation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight Section */}
      <section className="container-x py-20">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-accent/20 p-8 shadow-card md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-amber-gradient text-primary-foreground shadow-glow">
              <Users className="h-12 w-12" />
            </div>
            <div>
              <p className="eyebrow">Leadership & Management</p>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl">
                {COMPANY_INFO.contactPerson}
              </h2>
              <p className="text-sm font-semibold text-primary">{COMPANY_INFO.contactDesignation}, Machinery Hub</p>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Under Anand karna's ownership, Machinery Hub has built a steadfast reputation as a
                trusted industrial equipment partner in Bhairahawa and across Nepal. Our core focus is
                helping printing press operators, notebook producers, and packaging factories procure
                top-condition machinery backed by expert commissioning, trial runs, and genuine spare parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Expertise */}
      <section className="bg-secondary py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              i: Target,
              t: 'Our Mission',
              d: 'To make world-class industrial machinery accessible and dependable for every business we serve.',
            },
            {
              i: Eye,
              t: 'Our Vision',
              d: 'To be the most trusted machinery partner for printing and paper industries in the region.',
            },
            {
              i: Award,
              t: 'Our Expertise',
              d: 'Deep know-how in notebook lines, offset presses and paper converting equipment.',
            },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-card p-8 shadow-card">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-foreground">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_INFO, IMAGES } from '../data/machinery';

export const TermsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Commercial Terms"
        title="Terms & Conditions"
        subtitle="General terms and commercial policies governing machinery supply, installation, and services."
        image={IMAGES.hero}
      />

      <section className="container-x py-16">
        <div className="mx-auto max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. General Scope</h2>
            <p className="mt-2">
              These Terms and Conditions govern the trading, import, supply, distribution, delivery,
              installation, and servicing of brand-new, used, and refurbished printing and paper industry
              machinery provided by <strong>{COMPANY_INFO.name}</strong> ({COMPANY_INFO.address}). By
              engaging with our quotations, placing purchase orders, or requesting on-site services, you
              agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. Machine Quotations & Availability</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>All quotations provided via email, WhatsApp, or formal proposal are valid for the timeframe stated in the proposal.</li>
              <li>Stock machines in Nepal are offered on a first-come, first-served basis subject to prior sale.</li>
              <li>Imported machines are subject to international freight, customs clearance, and lead times communicated at order confirmation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. Machine Condition: New vs. Refurbished</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Brand-New Machinery:</strong> Sourced directly from manufacturers with factory warranties and genuine component guarantees.</li>
              <li><strong>Refurbished / Used Machinery:</strong> Professionally inspected, serviced, and tested for performance before dispatch. Specific condition reports and trial demonstrations are provided prior to final handover.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Delivery, Installation & Site Readiness</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>The customer is responsible for adequate floor foundation, proper 3-phase power supply, and safe unloading space at their facility.</li>
              <li>Our technical team carries out installation, precision leveling, trial runs, and operator training upon arrival.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">5. Payments & Invoicing</h2>
            <p className="mt-2">
              Payment terms typically require an advance booking deposit with the balance payable prior to dispatch
              or as agreed in the formal contract. Official invoices and receipts are issued by Machinery Hub.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">6. Contact & Support</h2>
            <p className="mt-2">
              For any commercial inquiries or clarification on order contracts, reach out to our management:
            </p>
            <div className="mt-3 rounded-xl border border-border bg-card p-5 text-foreground space-y-1">
              <p><strong>{COMPANY_INFO.name}</strong></p>
              <p>Proprietor: {COMPANY_INFO.contactPerson} ({COMPANY_INFO.contactDesignation})</p>
              <p>Address: {COMPANY_INFO.address}</p>
              <p>Contact: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

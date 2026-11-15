import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_INFO, IMAGES } from '../data/machinery';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Compliance"
        title="Privacy Policy"
        subtitle="How Machinery Hub protects and respects your privacy and personal data."
        image={IMAGES.hero}
      />

      <section className="container-x py-16">
        <div className="mx-auto max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p className="mt-2">
              At <strong>{COMPANY_INFO.name}</strong> (referred to as "we", "our", or "us"), owned and
              operated by {COMPANY_INFO.contactPerson}, located at {COMPANY_INFO.address}, we are
              committed to safeguarding the privacy of our visitors and clients. This Privacy Policy
              explains how we collect, handle, and protect your information when you browse our website
              or contact us for industrial machinery quotes and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="mt-2">
              When you submit an enquiry, request a quotation, or communicate with us via phone, email,
              or WhatsApp, we may collect:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Full Name and Company / Organization name</li>
              <li>Contact details (Phone number, WhatsApp number, Email address: {COMPANY_INFO.email})</li>
              <li>Geographic location (City, District) for machine delivery and logistics</li>
              <li>Machinery specifications, production capacity requirements, and budget details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-2">The information you provide is used solely to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Provide accurate machinery quotations, technical specifications, and feasibility advice</li>
              <li>Coordinate machinery delivery, on-site commissioning, installation, and operator training</li>
              <li>Provide warranty, troubleshooting, and post-sales technical support</li>
              <li>Communicate updates regarding machine availability, spare parts, and servicing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Data Protection & Sharing</h2>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or trade your personal or business information to
              third-party marketing companies. Data is only shared with authorized logistics partners or
              service engineers strictly required to fulfill machinery delivery and on-site setup in Nepal.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">5. Contact Information</h2>
            <p className="mt-2">
              For any questions or privacy concerns, please contact us directly:
            </p>
            <div className="mt-3 rounded-xl border border-border bg-card p-5 text-foreground space-y-1">
              <p><strong>{COMPANY_INFO.name}</strong></p>
              <p>Contact Person: {COMPANY_INFO.contactPerson} ({COMPANY_INFO.contactDesignation})</p>
              <p>Address: {COMPANY_INFO.address}</p>
              <p>Phone / WhatsApp: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

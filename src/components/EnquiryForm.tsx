import React, { useState } from 'react';
import { toast } from 'sonner';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/machinery';
import { MessageSquare, Copy } from 'lucide-react';

export const EnquiryForm: React.FC<{ defaultMachine?: string }> = ({
  defaultMachine = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    category: '1. Offset Printing Machinery',
    machineRequirement: defaultMachine,
    condition: 'Any / Recommended',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    return [
      '🙏 *नमस्ते! Machinery Hub Requirement Submission*',
      '----------------------------------------',
      `* ग्राहकको नाम (Customer Name):* ${formData.name}`,
      `* फोन / WhatsApp Number:* ${formData.phone}`,
      formData.email ? `* इमेल (Email):* ${formData.email}` : '',
      formData.company ? `* कम्पनी (Company/Press):* ${formData.company}` : '',
      `* स्थान (City/District):* ${formData.city}`,
      `* क्याटेगोरी (Category):* ${formData.category}`,
      formData.machineRequirement ? `* आवश्यक मेसिन (Machine):* ${formData.machineRequirement}` : '',
      `* अवस्था (Condition):* ${formData.condition}`,
      formData.notes ? `* थप विवरण (Notes):* ${formData.notes}` : '',
      '----------------------------------------',
      'Machinery Hub · Bhairahawa, Nepal',
      '👤 Mr. Anand Karna, Director',
      '📞 +977-9857024409, 9824421727',
      '📧 karnfile@gmail.com',
      '📍 Siddharthanagar-6, Rupandehi, Bhairahawa',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      toast.error('Please enter your name, phone number, and city.');
      return;
    }
    const msg = buildMessage();
    window.open(getWhatsAppUrl(msg), '_blank');
    toast.success('Opening WhatsApp with your enquiry details');
  };

  const handleCopy = () => {
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in your name and phone number first.');
      return;
    }
    const msg = buildMessage();
    navigator.clipboard.writeText(msg);
    toast.success('Enquiry text copied to clipboard!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#e1e8ed] rounded-lg p-6 bg-white shadow-sm space-y-4 text-xs"
    >
      <h3 className="font-heading text-lg font-bold text-[#435363] border-b border-[#eef2f5] pb-2">
        Machinery Requirement & Enquiry Form
      </h3>
      <p className="text-[#8997a5] text-[12px] leading-relaxed">
        Submit your specifications below. Director Mr. Anand Karna and our engineering team will respond promptly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            Your Name / Contact Person *
          </label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Shrestha"
            className="w-full h-9 border border-[#e1e8ed] px-3 rounded text-xs focus:outline-none focus:border-[#004669]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            Mobile / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +977 98XXXXXXXX"
            className="w-full h-9 border border-[#e1e8ed] px-3 rounded text-xs focus:outline-none focus:border-[#004669]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@example.com"
            className="w-full h-9 border border-[#e1e8ed] px-3 rounded text-xs focus:outline-none focus:border-[#004669]"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            Company / Press Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. ABC Printers / Himalayan Notebooks"
            className="w-full h-9 border border-[#e1e8ed] px-3 rounded text-xs focus:outline-none focus:border-[#004669]"
          />
        </div>

        {/* City / District */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            City / District *
          </label>
          <input
            type="text"
            required
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Bhairahawa / Butwal / Kathmandu"
            className="w-full h-9 border border-[#e1e8ed] px-3 rounded text-xs focus:outline-none focus:border-[#004669]"
          />
        </div>

        {/* Category (Exact 9 Categories) */}
        <div>
          <label className="block font-bold text-[#435363] mb-1">
            Machinery Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full h-9 border border-[#e1e8ed] px-2 rounded text-xs focus:outline-none focus:border-[#004669] bg-white text-[#435363]"
          >
            <option value="1. Offset Printing Machinery">1. Offset Printing Machinery</option>
            <option value="2. Paper Cutting & Processing Machinery">2. Paper Cutting & Processing Machinery</option>
            <option value="3. Paper Folding & Ruling Machinery">3. Paper Folding & Ruling Machinery</option>
            <option value="4. Die Cutting & Creasing Machinery">4. Die Cutting & Creasing Machinery</option>
            <option value="5. Notebook & Exercise Book Manufacturing Machinery">5. Notebook & Exercise Book Manufacturing Machinery</option>
            <option value="6. Book Binding & Finishing Machinery">6. Book Binding & Finishing Machinery</option>
            <option value="7. Paper & Packaging Machinery">7. Paper & Packaging Machinery</option>
            <option value="8. Non-Woven & Fiber Bag Manufacturing Machinery">8. Non-Woven & Fiber Bag Manufacturing Machinery</option>
          </select>
        </div>
      </div>

      {/* Machine Details / Notes */}
      <div>
        <label className="block font-bold text-[#435363] mb-1">
          Specific Machine Model or Requirements
        </label>
        <textarea
          rows={3}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Describe your requirement (e.g. Stallion 3-in-1 notebook machine, Edge squaring machine, Gluing machine, Reel-to-sheet cutter, Polar guillotine, or Glue binder)..."
          className="w-full border border-[#e1e8ed] p-2.5 rounded text-xs focus:outline-none focus:border-[#004669]"
        />
      </div>

      {/* Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 h-10 bg-[#e8b328] hover:bg-[#d49f14] text-[#003854] font-roboto text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center gap-2 shadow"
        >
          <MessageSquare className="h-4 w-4" /> Send Requirement via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="px-4 h-10 border border-[#e1e8ed] hover:bg-[#F5FAFE] text-[#435363] font-roboto text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center gap-1.5"
        >
          <Copy className="h-3.5 w-3.5" /> Copy Details
        </button>
      </div>
    </form>
  );
};

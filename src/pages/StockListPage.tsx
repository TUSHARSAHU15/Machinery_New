import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, MessageSquare, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { MACHINES, CATEGORIES, formatPrice, getWhatsAppUrl } from '../data/machinery';

export const StockListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('cat') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: slug });
    }
  };

  const filteredMachines =
    selectedCategory === 'all'
      ? MACHINES
      : MACHINES.filter((m) => m.category === selectedCategory);

  const activeCategoryObj = CATEGORIES.find((c) => c.slug === selectedCategory);

  return (
    <div className="w-full bg-white">
      {/* Page Title Banner */}
      <div className="bg-[#003854] text-white py-8 px-6 md:px-10 border-b-4 border-[#e8b328]">
        <div className="max-w-4xl">
          <p className="text-[11px] font-roboto font-bold uppercase tracking-wider text-[#e8b328] mb-1">
            <Link to="/" className="hover:underline">Home</Link> / We Import
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
            Machinery We Import
          </h1>
          <p className="mt-2 text-xs md:text-sm text-gray-200">
            Brand-New & Quality-Tested Pre-Owned Machinery Imported Directly on Order from Germany, Japan & India across Nepal
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Direct Import Model Notice Banner */}
        <div className="p-4 bg-[#F5FAFE] border-l-4 border-[#004669] rounded-r-lg text-xs text-[#435363] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="font-bold text-[#004669] uppercase tracking-wide">📦 Direct Import-On-Order Model:</span>{' '}
            <span className="text-[#666666]">
              We source and import every machine directly based on your production capacity, size, and colour configuration requirements. Each machine undergoes thorough mechanical audit, trial inspection, safe delivery to your doorstep in Nepal, and full on-site installation with operator training.
            </span>
          </div>
        </div>

        {/* Category Filter Pills (All 9 Categories) */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-[#eef2f5]">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1.5 rounded text-xs font-roboto font-bold uppercase tracking-wider transition ${
              selectedCategory === 'all'
                ? 'bg-[#004669] text-white'
                : 'bg-[#F5FAFE] text-[#666666] hover:bg-[#004669]/10'
            }`}
          >
            All Machinery We Import ({MACHINES.length})
          </button>
          {CATEGORIES.map((cat, idx) => {
            const count = MACHINES.filter((m) => m.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3 py-1.5 rounded text-xs font-roboto font-bold uppercase tracking-wider transition ${
                  selectedCategory === cat.slug
                    ? 'bg-[#004669] text-white'
                    : 'bg-[#F5FAFE] text-[#666666] hover:bg-[#004669]/10'
                }`}
              >
                {idx + 1}. {cat.short} {count > 0 && `(${count})`}
              </button>
            );
          })}
        </div>

        {/* Active Category Description & Sub-Products Strip */}
        {activeCategoryObj && activeCategoryObj.subcategories && (
          <div className="p-4 bg-[#F5FAFE] border border-[#e1e8ed] rounded-lg">
            <h3 className="font-heading font-bold text-sm text-[#004669] mb-1">
              {activeCategoryObj.name}
            </h3>
            <p className="text-xs text-[#8997a5] mb-2">
              Available configurations & machinery options:
            </p>
            <div className="flex flex-wrap gap-2">
              {activeCategoryObj.subcategories.map((sub, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-block px-2.5 py-1 bg-white border border-[#c6d093] rounded text-[11px] font-semibold text-[#435363]"
                >
                  ✓ {sub}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Machine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMachines.map((machine) => (
            <div
              key={machine.slug}
              className="border border-[#e1e8ed] rounded-lg overflow-hidden bg-white shadow-sm hover:border-[#004669] transition duration-200 flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative h-56 bg-white overflow-hidden flex items-center justify-center p-3 border-b border-[#f1f5f9]">
                <img
                  src={machine.images[0]}
                  alt={machine.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#004669] text-white font-roboto text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {machine.condition}
                </span>
                <span className="absolute bottom-2.5 left-2.5 bg-[#25D366] text-white font-roboto text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  Available to Import
                </span>
                <span className="absolute top-2.5 right-2.5 bg-[#F5FAFE] text-[#004669] border border-[#e1e8ed] text-[10px] font-roboto font-bold px-2 py-0.5 rounded shadow-xs">
                  Model: {machine.model}
                </span>
              </div>

              {/* Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-base text-[#435363] group-hover:text-[#004669] transition line-clamp-1">
                    {machine.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#8997a5] line-clamp-2 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Spec Highlights & Available Sizes */}
                  {machine.specs && machine.specs.length > 0 && (
                    <div className="mt-2.5 p-2.5 bg-[#F5FAFE] rounded border border-[#e1e8ed] text-[11px] space-y-1">
                      <div className="font-bold text-[#004669] flex items-start gap-1">
                        <span className="text-[#076290] font-extrabold shrink-0">►</span>
                        <span>
                          {machine.specs[0][0]}:{' '}
                          <span className="text-[#d9222a] font-extrabold">
                            {machine.specs[0][1]}
                          </span>
                        </span>
                      </div>
                      {machine.specs[1] && (
                        <div className="text-[10px] text-[#8997a5] pl-3.5">
                          <span className="font-semibold text-[#435363]">{machine.specs[1][0]}:</span>{' '}
                          {machine.specs[1][1]}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#f1f5f9] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#004669]">
                      {formatPrice(machine.price)}
                    </span>
                    <Link
                      to={`/machines/${machine.slug}`}
                      className="text-[11px] font-bold text-[#336699] hover:underline uppercase tracking-wide flex items-center gap-1"
                    >
                      Specifications <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      `Hello Mr. Anand Karna ji, I want a price quotation, availability and delivery schedule for ${machine.name} (Model: ${machine.model}).`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-2 bg-[#25D366] hover:brightness-105 text-white font-roboto font-bold text-[11px] uppercase tracking-wider rounded transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="h-3.5 w-3.5" /> Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Box */}
        <div className="p-6 rounded-lg bg-[#F5FAFE] border border-[#e1e8ed] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-bold text-base text-[#435363]">
              Need a specific machinery model or customized production line?
            </h3>
            <p className="text-xs text-[#8997a5]">
              We import directly from Japan, Germany, Europe, and leading Indian manufacturers to meet your exact specifications.
            </p>
          </div>
          <Link
            to="/contactus"
            className="px-5 py-2.5 bg-[#004669] hover:bg-[#003854] text-white text-xs font-roboto font-bold uppercase tracking-wider rounded transition whitespace-nowrap"
          >
            Submit Machinery Requirement »
          </Link>
        </div>
      </div>
    </div>
  );
};

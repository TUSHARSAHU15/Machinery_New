import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 px-6 text-center bg-white space-y-4">
      <h1 className="font-heading text-3xl font-bold text-[#435363]">404 - Page Not Found</h1>
      <p className="text-sm text-[#8997a5] max-w-md mx-auto">
        The requested page could not be found. Please check the URL or return to our homepage.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-block px-5 py-2.5 bg-[#004669] hover:bg-[#003854] text-white font-roboto text-xs font-bold uppercase tracking-wider rounded transition"
        >
          Return to Home »
        </Link>
      </div>
    </div>
  );
};

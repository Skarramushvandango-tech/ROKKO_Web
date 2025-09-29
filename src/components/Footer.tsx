import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#483D03]/20 border-t border-[#483D03] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[#F5F3BB] flex items-center justify-center gap-2 text-lg">
            ROKKO! Records / From Ruhrpott with Love
            <Heart className="w-5 h-5 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
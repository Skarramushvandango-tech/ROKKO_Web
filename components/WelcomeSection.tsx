import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F5F3BB] leading-tight">
          We are Rokko! And you are not yet
        </h2>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#483D03] to-[#96897B] mx-auto rounded-full" />
      </div>
    </section>
  );
};

export default WelcomeSection;
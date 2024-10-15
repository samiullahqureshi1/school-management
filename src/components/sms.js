import React from 'react';

const FreeSms = () => {
  return (
    <div className="relative mt-5">
      {/* Parent container is positioned relatively to allow absolute positioning */}
      <div className="absolute right-11 top-[-280px] bg-[#E1F5FE] shadow-md rounded-lg p-4 w-[28.5%]">
        <h3 className="text-lg font-semibold text-[#0D47A1]">Free SMS Gateway</h3>
        <p className="text-sm text-[#0D47A1]">Send Unlimited Free SMS on Mobile Numbers.</p>
      </div>
    </div>
  );
};

export default FreeSms;

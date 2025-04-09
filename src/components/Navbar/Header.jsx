import React from "react";

const Header = () => {
  return (
    <header className=" h-[120px] px-20 flex ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="Easy Cargo Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold">Easy Cargo</span>
        </div>

        {/* Contact Info Section */}
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-sm">Locations</span>
            <span className="text-xs">123 Street, City, Country</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Email</span>
            <a href="mailto:info@easycargo.com" className="text-xs">
              info@easycargo.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Phone</span>
            <a href="tel:+1234567890" className="text-xs">
              +1 234 567 890
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

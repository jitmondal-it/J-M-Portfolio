import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="py-8 bg-dark-300">
      <div className="container mx-auto px-6 text-center text-gray-400">
        © {year} Jit Mondal. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
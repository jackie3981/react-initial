import React from "react";
import Links from "./Links";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <Links />
          <SocialMedia />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

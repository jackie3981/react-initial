import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <Facebook size={20} />, // ✅ Usar como componente JSX
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter size={20} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram size={20} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <Linkedin size={20} />,
    },
  ];

  return (
    <div className="mb-6 md:mb-0">
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
            aria-label={social.name}
          >
            {social.icon} {/* ✅ Renderizar el componente directamente */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

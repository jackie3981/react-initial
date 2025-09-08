import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 pt-6 border-t border-gray-700 text-center">
      <p className="text-gray-400">
        © {currentYear} My Company. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;

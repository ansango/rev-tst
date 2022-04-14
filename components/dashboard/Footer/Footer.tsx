import SocialIcons from "components/common/Footer/SocialIcons";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow md:flex md:items-center md:justify-between p-6 space-y-5">
      <span className="text-gray-500 text-sm">
        © 2022 Robocooker. Todos los derechos reservados.
      </span>
      <SocialIcons />
    </footer>
  );
};

export default Footer;

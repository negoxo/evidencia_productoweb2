import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





function Footer() {
    return(
      <footer>
          <nav className="bg-black bg-opacity-70 text-white flex justify-between items-center px-5 py-3 w-full z-10">
          <ul className="flex space-x-4">
              <li>© 2024 Vamos En Bici, Inc. All rights reserved</li>
          </ul>
          <ul class="flex space-x-3">
              <li><a href="https://www.facebook.com/people/VamosEn-Bici/pfbid02CejMgRWrssaPXTPmoYyrDwKXpXW6rZdFUfneh53AvgUkXXDAksBHvh75k1aQuDq2l/" target="_blank" className="text-xl"><FaFacebook /></a></li>
              <li><a href="https://x.com/VamosEn57503" target="_blank" className="text-xl"></a><FaXTwitter /></li>
              <li><a href="https://www.instagram.com/vamosenbici3/" target="_blank" className="text-xl"><FaInstagram /></a></li>
              <li><a href="https://whatsapp.com" target="_blank" className="text-xl"><FaWhatsapp /></a></li>
              <li><a href="https://www.youtube.com/@EnCiclaSPB" target="_blank" className="text-xl"><FaYoutube /></a></li>
          </ul>
      </nav>
      </footer>
  );
}

export default Footer;
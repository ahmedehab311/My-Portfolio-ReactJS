import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#content">Contact</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>

      <p class="copyright">copyrights @  <span>AHmEd EHAb</span> </p>
    </footer>
  );
};

export default Footer;

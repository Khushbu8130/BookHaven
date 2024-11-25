import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";



function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/about">About us</a>
          <a className="link link-hover" href="/contact">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/khushbu-kumari-b727b525a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={30} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by  BookHaven
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

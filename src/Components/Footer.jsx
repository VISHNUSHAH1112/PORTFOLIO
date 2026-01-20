import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import "./Footer.css";

const Footer = () => {
  const [time, setTime] = useState("");
  const [visitors, setVisitors] = useState(0);

  // Live Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Visitor Counter (localStorage)
  useEffect(() => {
    let count = localStorage.getItem("portfolioVisitors");

    if (!count) {
      count = 1;
      localStorage.setItem("portfolioVisitors", count);
    } 
    else {
      count = parseInt(count) + 1;
      localStorage.setItem("portfolioVisitors", count);
    }

    setVisitors(count);
  }, []);

  return (
    <footer className="footer" >
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Left */}
          <div className="col-md-8 text-center text-md-start">
            <h2 className="footer-logo">
              Vishnu <span>Shah</span>
            </h2>
            <p className="footer-text">
              Frontend Developer passionate about building clean and user-friendly web experiences.
            </p>
          </div>
          <br />

          {/* Right */}
          <div className="col-md-4 text-center text-md-end">
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" className="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" className="Linkedin"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" className="Github"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="footer-info">
          <span>📍 Gujarat, India</span>
          <span>🕒 {time} IST</span>
          <span>👀 {visitors} Visitors</span>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          {new Date().getFullYear()} Vishnu Shah · Handcrafted Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;

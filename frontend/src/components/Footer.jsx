import React from "react";
import "../styles/home.css";

const Footer = () => (
  <div className="footer">
    <h2>Resume Analyzer.</h2>
    <div className="footerSocialIcons">
      <div className="icon">
        <a href="https://www.instagram.com/piiush_here/" target="_blank" rel="noreferrer">
          <i className="uil uil-instagram"></i>
        </a>
      </div>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/piyush-agrahari-385b28303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </div>
      <div className="icon">
        <a href="https://github.com/Piiush04" target="_blank" rel="noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="bottomFooter">
      <p>
        Copyright &copy;{" "}
        <a
          href="https://piiush04.github.io/Portfolio/"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          Piyush Agrahari
        </a>{" "}
        - All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/Media/Logo.png";
import facebook from "./Assets/Media/facebook.png";
import twitter from "./Assets/Media/twitter.png";
import youtube from "./Assets/Media/youtube.png";
import linkedin from "./Assets/Media/linkedin.png";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="modern-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <div className="footer-about">
                  <div className="footer-brand">
                    <img
                      src={logo}
                      alt="ClickDoctor Logo"
                      className="footer-logo"
                    />
                    <div className="brand-text">
                      <span className="brand-primary">Click</span>
                      <span className="brand-secondary">Doctor</span>
                    </div>
                  </div>
                  <p className="footer-description">
                    Your trusted healthcare partner providing quality medical
                    services with compassion and excellence. We're here to take
                    care of your health and well-being with modern medical
                    solutions.
                  </p>
                  <div className="footer-stats">
                    <div className="stat-item">
                      <div>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Happy Patients</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <div>
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="footer-links">
                  <h4 className="footer-title">
                    <i className="material-icons"></i>
                    Links{" "}
                  </h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to="/" className="footer-link">
                        <i className="material-icons"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/About" className="footer-link">
                        <i className="material-icons"></i>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services" className="footer-link">
                        <i className="material-icons"></i>
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-contact">
                  <h4 className="footer-title">
                    <i className="material-icons"></i>
                    Contact Info
                  </h4>
                  <div className="contact-item">
                    <i className="material-icons"></i>
                    <div>
                      <span className="contact-label">Address</span>
                      <span className="contact-value">
                        42 Mamnoun Street, Saba Carpet and Antiques Store, UK
                      </span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="material-icons"></i>
                    <div>
                      <span className="contact-label">Phone</span>
                      <div className="phone-numbers">
                        <Link to="tel:+971551579261" className="contact-value">
                          +971 551 579 261
                        </Link>
                        <Link to="tel:+971555961659" className="contact-value">
                          +971 555 961 659
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="material-icons"></i>
                    <div>
                      <span className="contact-label">Email</span>
                      <Link
                        to="mailto:support.clickdoctor@gmail.com"
                        className="contact-value"
                      >
                        support.clickdoctor@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-social">
                  <h4 className="footer-title">
                    <i className="material-icons"></i>
                    Follow Us
                  </h4>
                  <p className="social-description">
                    Stay connected with us on social media for health tips and
                    updates.
                  </p>
                  <div className="social-links">
                    <Link
                      to="#"
                      target="_blank"
                      className="social-link facebook"
                      title="Facebook"
                    >
                      <img src={facebook} alt="Facebook" />
                      <span>Facebook</span>
                    </Link>
                    <Link
                      to="#"
                      target="_blank"
                      className="social-link twitter"
                      title="Twitter"
                    >
                      <img src={twitter} alt="Twitter" />
                      <span>Twitter</span>
                    </Link>
                    <Link
                      to="#"
                      target="_blank"
                      className="social-link youtube"
                      title="YouTube"
                    >
                      <img src={youtube} alt="YouTube" />
                      <span>YouTube</span>
                    </Link>
                    <Link
                      to="#"
                      target="_blank"
                      className="social-link linkedin"
                      title="LinkedIn"
                    >
                      <img src={linkedin} alt="LinkedIn" />
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-copyright">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="copyright-text">
                    © 2024 <span className="brand-highlight">ClickDoctor</span>.
                    All rights reserved.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="footer-bottom-links">
                    <Link to="#" className="bottom-link">
                      Privacy Policy
                    </Link>
                    <Link to="#" className="bottom-link">
                      Terms of Service
                    </Link>
                    <Link to="#" className="bottom-link">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

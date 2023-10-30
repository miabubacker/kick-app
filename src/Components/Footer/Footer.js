import "./Footer.scss";
import logo from "../../Components/Assets/Imgs/FooterLogo.svg";
import badge from "../../Components/Assets/Imgs/Add_circle.svg";
import botlogo from "../../Components/Assets/Imgs/bot-Logo.svg";
import fblogo from "../../Components/Assets/Imgs/ic_baseline-facebook.svg";
import insta from "../../Components/Assets/Imgs/mdi_instagram.svg";
import twitter from "../../Components/Assets/Imgs/mdi_twitter.svg";
import tiktok from "../../Components/Assets/Imgs/ic_baseline-tiktok.svg";

import React from "react";

function Footer() {
  return (
    <>
      <section className="footer_section">
          <div className="footer_section_blocks">
            <div className="footer_section_logo">
              <div className="footer_section_logo_signup">
                <h1>Join our KicksPlus Club & get 15% off</h1>
                <p>Sign up for free! Join the community.</p>
                <div className="footer-input">
                  <input type="email" placeholder="Email Address" />
                  <button>Submit</button>
                </div>
              </div>
              <div className="footer_section_logo_image">
                <img
                  src={logo}
                  alt="img_footer_about_logo"
                  className="img_footer_about_logo"
                />

                <img
                  src={badge}
                  alt="img_footer_about_logo_plus"
                  className="img_footer_about_logo_plus"
                />
              </div>
            </div>
            <div className="footer_section_about">
              <div className="footer_section_about_content">
                <div className="footer_section_about_about_us">
                  <h3>About us</h3>
                  <p>
                    We are the biggest hyperstore in the universe. We got you
                    all cover with our exclusive collections and latest drops.
                  </p>
                </div>
                <div className="footer_section_about_categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Runners</a>
                    </li>
                    <li>
                      <a href="#">Sneakers</a>
                    </li>
                    <li>
                      <a href="#">Basketball</a>
                    </li>
                    <li>
                      <a href="#">Outdoor</a>
                    </li>
                    <li>
                      <a href="#">Golf</a>
                    </li>
                    <li>
                      <a href="#">Hiking</a>
                    </li>
                  </ul>
                </div>
                <div className="footer_section_about_company">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Blogs</a>
                    </li>
                  </ul>
                </div>
                <div className="footer_section_about_follow">
                  <h3>Follow Us</h3>
                  <div className="footer_section_about_follow_icon">
                    <img src={fblogo} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                    <img src={tiktok} alt="" />
                  </div>
                </div>
              </div>
              <div className="footer_section_about_image">
                <img src={botlogo} alt="" />
              </div>
            </div>
          </div>
      </section>
      <p className="footer_link">
        © All rights reserved | Made with ❤️ by Visiata Systems International
      </p>
    </>
  );
}

export default Footer;

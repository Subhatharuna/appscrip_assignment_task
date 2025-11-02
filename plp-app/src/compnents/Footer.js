import { useState } from "react";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer=()=>{
    const [openSection, setOpenSection] = useState(null);
    
      const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
      };

    return(
        <div className="footer-container">
            <div className="subscribe-contact-container">
               <div className="subscribe-container">
                  <h2 className="foot-header">BE THE FIRST TO KNOW</h2>
                  <p className="foot-description1">Lorem ipsum is simply dummy text of the printing and typesetting industry, this is simply dummy text. </p>
                  <p className="foot-description2">Sign up for updates from metta muse.</p>
                  <div className="email-container">
                    <input type="text" className="email-input" placeholder="Enter your e-mail..."/>
                    <button className="subscribe-button" type="button">Subscribe</button>
                  </div>
               </div>
               <div className="contactus-currency-container">
                  <div className="contact-us">
                    <h2 className="foot-header">CONTACT US</h2>
                    <p className="foot-paragraph">+44 221 133 5360</p>
                    <p className="foot-paragraph">customercare@mettamuse.com</p>
                  </div>
                  <div className="transaction-currency">
                    <div className="currency">
                        <img src="https://res.cloudinary.com/dpep8a1or/image/upload/v1762024245/usa-flag_nnveym.png" alt="usa-flag" className="flag"/>
                        <RiPokerDiamondsFill className="foot-icon"/>
                        <p className="usa">USD</p>
                    </div>
                    <p className="foot-paragraph">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                  </div>
               </div>
            </div>

            <hr className="small-line"/>


            <div className="call-container">
                <h2 className="foot-header">CALL US</h2>
                <p className="foot-paragraph">+44 221 133 5360  <span className="foot-span"><RiPokerDiamondsFill className="foot-icon"/> customercare@mettamuse.com</span></p>
            </div>

            <hr className="small-line"/>


            <div className="currency-container">
                <img src="https://res.cloudinary.com/dpep8a1or/image/upload/v1762024245/usa-flag_nnveym.png" alt="usa-flag" className="flag"/>
                <RiPokerDiamondsFill className="foot-icon"/>
                <p className="usa">USD</p>
            </div>
            <hr/>
            
            <div className="footer-section-container">
            <div className="footer-section">
               <div className="footer" onClick={() => toggleSection("mettamuseFor")}>
                  <h4 className="foot-header">metta muse</h4>
                  <span className="arrow">{openSection === "mettamuseFor" ? "▾" : "▸"}</span>
               </div>

               {openSection === "mettamuseFor" && (
                  <div className="foot-body">
                    <p className="foot-paragraph">About Us</p>
                    <p className="foot-paragraph">Stories</p>
                    <p className="foot-paragraph">Artisans</p>
                    <p className="foot-paragraph">Boutiques</p>
                    <p className="foot-paragraph">Contact Us</p>
                    <p className="foot-paragraph">EU Compliances Docs</p>
                  </div>
                )}
                <div className="large-footer">
                    <h3 className="foot-header">metta muse</h3>
                    <div className="foot-body">
                       <p className="foot-paragraph">About Us</p>
                       <p className="foot-paragraph">Stories</p>
                       <p className="foot-paragraph">Artisans</p>
                       <p className="foot-paragraph">Boutiques</p>
                       <p className="foot-paragraph">Contact Us</p>
                       <p className="foot-paragraph">EU Compliances Docs</p>
                  </div>
                </div>
            </div>

            <hr className="small-line"/>
          
            <div className="footer-section">
               <div className="footer" onClick={() => toggleSection("quicklinksFor")}>
                  <h4 className="foot-header">QUICK LINKS</h4>
                  <span className="arrow">{openSection === "quicklinksFor" ? "▾" : "▸"}</span>
               </div>

               {openSection === "quicklinksFor" && (
                  <div className="foot-body">
                    <p className="foot-paragraph">Orders & Shipping</p>
                    <p className="foot-paragraph">Join/Login as a Seller</p>
                    <p className="foot-paragraph">Payment & Pricing</p>
                    <p className="foot-paragraph">Return & Refunds</p>
                    <p className="foot-paragraph">FAQs</p>
                    <p className="foot-paragraph">Privacy Policy</p>
                    <p className="foot-paragraph">Terms & Conditions</p>
                  </div>
                )}

                <div className="large-footer">
                    <h3 className="foot-header">QUICK LINKS</h3>
                    <div className="foot-body">
                       <p className="foot-paragraph">Orders & Shipping</p>
                       <p className="foot-paragraph">Join/Login as a Seller</p>
                       <p className="foot-paragraph">Payment & Pricing</p>
                       <p className="foot-paragraph">Return & Refunds</p>
                       <p className="foot-paragraph">FAQs</p>
                       <p className="foot-paragraph">Privacy Policy</p>
                       <p className="foot-paragraph">Terms & Conditions</p>
                  </div>
                </div>
            </div>

            <hr className="small-line"/>

            <div>
            <div className="footer-section">
               <div className="footer" onClick={() => toggleSection("followFor")}>
                  <h4 className="foot-header">FOLLOW US</h4>
                  <span className="arrow">{openSection === "followFor" ? "▾" : "▸"}</span>
               </div>

               {openSection === "followFor" && (
                  <div className="foot-body">
                    <p className="foot-paragraph">About Us</p>
                    <p className="foot-paragraph">Stories</p>
                  </div>
                )}

                <div className="large-footer">
                    <h3 className="foot-header">FOLLOW US</h3>
                    <div className="foot-follow">
                       <p className="foot-paragraph-img"><AiFillInstagram className="foot-follow-icon"/></p>
                       <p className="foot-paragraph-img"><FaLinkedin className="foot-follow-icon"/></p>
                  </div>
                </div>
            </div>

            <hr className="small-line"/>
            <div className="payment-container">
                <h3 className="foot-header">metta muse ACCEPTS </h3>
                <div className="pay-img-container">
                    <img className="pay-img" src="https://res.cloudinary.com/dpep8a1or/image/upload/v1762060639/g-pay_rlortc.png" alt="g-pay"/>
                    <img className="pay-img" src="https://res.cloudinary.com/dpep8a1or/image/upload/v1762060651/master-card_uqbrum.png" alt="master"/>
                    <img className="pay-img" src="https://res.cloudinary.com/dpep8a1or/image/upload/v1762060681/paypal_vounzs.png" alt="paypal"/>
                    <img className="pay-img" src="https://res.cloudinary.com/dpep8a1or/image/upload/c_crop,w_230/v1762060448/amex_hvg3pn.png" alt="amex"/>
                    <img className="pay-img" src="https://res.cloudinary.com/dpep8a1or/image/upload/c_crop,w_500,h_250/v1762060668/opay_vthipe.png" alt="o-pay"/>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
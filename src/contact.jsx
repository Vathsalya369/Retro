import React from "react";
import { NavElement } from './Menu';
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faThreads, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_y7lepo9', 'template_uw5gdja', e.target, 'q818hBQ7W8rzSP9Vp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div>
            <NavElement />
            <div className="body" style={{display:"flex", flexDirection:"column"}}>
                
                <form onSubmit={sendEmail}>
                <h2 className="heading" style={{color:"#FFFCEF"}}>Contact Us</h2>
                    <input type="text" placeholder="Name" name="name" required /><br/><br/>
                    <input type="email" placeholder="Email Address" name="email" required /><br/><br/>
                    <input type="text" placeholder="Subject" name="subject" required /><br/><br/>
                    <textarea placeholder="Your Message" name="message" required></textarea><br/><br/>
                    <button type="submit">Send Message</button><br/><br/>
                    <div className="contact1">
                    <h4 className="heading" style={{color:"#FFFCEF"}}>Follow us on</h4>
                    <div className="icon-container pr-3">
                        <a href="https://www.instagram.com/sugreevu_19?igsh=MTc4Njh1emJ3OGRrOA==" target="_self" className="social-icons" ><FontAwesomeIcon icon={faInstagram } title="insta"/></a>
                        <a href="https://www.threads.net/@sugreevu_19" target="_self" className="social-icons"><FontAwesomeIcon icon={faThreads} /></a>
                        <a href="https://wa.me/qr/KZP4UZXE7XM7H1" targer="_self" className="social-icons"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href="https://www.linkedin.com/in/sugreevuvathsalya/" target="_self" className="social-icons"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
                </form>

            </div>
        </div>
    );
}




{/* <div className="contact">
            <footer>
            <h1>Contact Us</h1>
            <div className="contact-container">

                <div className="contact-item d-flex flex-row p-3">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="contact-body ms-3">
                        <h4>Location</h4>
                        <p>Stanza Living, Vernier House, Narsingi.</p>
                    </div>
                </div>
            
                <div className="contact-item d-flex flex-row p-3">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="contact-body ms-3">
                        <h4>Phone</h4>
                        <p>9603847793</p>
                    </div>
                </div>

                <div className="contact-item d-flex flex-row p-3">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faSquareEnvelope} />
                    </div>
                    <div className="contact-body ms-3">
                        <h4>Email</h4>
                        <p>vathsalyasugreevu@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contact1">
                <h4>Follow for more Updates</h4>
                <div className="icon-container p-3">
                    <a href="https://www.instagram.com/sugreevu_19?igsh=MTc4Njh1emJ3OGRrOA==" target="_self" className="social-icons" ><FontAwesomeIcon icon={faInstagram } title="insta"/></a>
                    <a href="https://www.threads.net/@sugreevu_19" target="_self" className="social-icons"><FontAwesomeIcon icon={faThreads} /></a>
                    <a href="https://wa.me/qr/KZP4UZXE7XM7H1" targer="_self" className="social-icons"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="https://www.linkedin.com/in/sugreevuvathsalya/" target="_self" className="social-icons"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
            
            </footer>
            
        </div>*/}
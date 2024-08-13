import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <p className="footer-text">
            Leadbull stays current with the market trends aiming not only to{" "}
            <br />
            thrive but also to enhance in such a rapidly evolving digital age,
            and <br />
            to keep up its telemarketing services with the client's expectations
            worldwide.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📍 131 Continental Dr, Suite 305, Newark, DE 19713</p>
          <p>
            ✉️ <a href="mailto:Sales@Leadbull.net">Sales@Leadbull.net</a>
          </p>
          <p>📞 +1 484 857 2782</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Lead Bull - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

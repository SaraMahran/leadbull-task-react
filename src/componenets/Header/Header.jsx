import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li className="logo">
            LEAD<span>B</span>ULL
          </li>
          <li className="home">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#supprt">Support</a>
          </li>
          <li>
            <button className="login-btn">Login</button>
          </li>
          <li>
            <button className="book-an-appointment-btn">
              Book an appointment
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../../assets/images/logo/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="column-one">
          <img src={logo} alt="" />
          <p>
            We make sure that your safety is never compromised. This is why we
            hire all the staff under the roof of Home Comfort, just for your
            satisfaction.
          </p>
        </div>
        <div className="column-two">
          <ul>
            <li id="Home-icon">Home</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="column-three">
          <ul>
            <li>+971522446652</li>
            <li>Ramiz422@gmail.com</li>
            <li>
              <div className="newsletter">
                <input type="text" placeholder="Enter Email" />
                <button>SEND</button>
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

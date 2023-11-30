import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";
import logo from '../assets/me.jpg'
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Founder"
        />
        <h2>Dipankar Samanta</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.youtube.com/channel/UCIaPywt3sk1Hb5aDKuY1wdw"
            target="blank"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://www.instagram.com/dipankar_samanta09/"
            target="blank"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/dipankar-samanta-520a31229/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

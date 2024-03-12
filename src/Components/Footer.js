import style from "./Style/Footer.module.css"
import React from 'react';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style["col-md-4"]}>
            <h3 className={style.footertitle}>Search</h3>
            <ul className={style.listunstyled}>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">Web Developers</a>
              </li>
              <li>
                <a href="#">Python</a>
              </li>
              <li>
                <a href="#">HTML5</a>
              </li>
              <li>
                <a href="#">CSS3</a>
              </li>
            </ul>
          </div>
          <div className={style["col-md-4"]}>
            <h3 className={style.footertitle}>Company</h3>
            <ul className={style.listunstyled}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={style["col-md-4"]}>
            <h3 className={style.footertitle}>Support</h3>
            <ul className={style.listunstyled}>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.row}>
          <div className="col align-self-center">
            <p className={style.copyright}>
              Copyright © 2024 All rights reserved | This page is developed  with ❤️ by  Priti | Nihal | Shraddha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'

import logo from "../../Assets/Images/logo.svg";
import styles from '../../Styles/Footer.module.scss'
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={`${styles.footer}`}>
          <div className="row">
            <div className="col-md-6 ">
              <img src={logo} alt="logo" />
              <h2 className="chomp_body_color fs-5 col-md-6 col-sm-12 py-4">
                Takeaway & Delivery template for small - medium businesses.
              </h2>
            </div>
            <div className="col-md-6">
              <div className={`row ${styles.footer_Layout}`}>
                <div className="col-md-4 col-sm-4">
                  <h5>COMPANY</h5>
                  <li>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <Link to ="/order">order</Link>
                  </li>
                  <li>
                    <Link to ="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to ="/contact">Contact</Link>
                  </li>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h5>TEMPLATE</h5>
                  <li>
                    <Link to ="/">Style Guide</Link>
                  </li>
                  <li>
                    <Link to ="/">Changelog</Link>
                  </li>
                  <li>
                    <Link to ="/">Licence</Link>
                  </li>
                  <li>
                    <Link to ="/">Webflow University</Link>
                  </li>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h5>FLOWBASE</h5>
                  <li>
                    <Link to ="/">More Cloneables</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer_bottom} pt-5`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="copyright">
              <span className="chomp_body_color fs-7">Project by </span>
              <Link
                className="text-decoration-none chomp_primary_color fs-7 "
                to="/"
              >
                Ansh kakkar
              </Link>
            </div>
            <div className={`${styles.social_icons}`}>
              <AiOutlineInstagram className={`${styles.icon}`} />
              <AiFillFacebook className={`${styles.icon}`} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

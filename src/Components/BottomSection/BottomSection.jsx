import React from "react";
import { Link } from "react-router-dom";

import styles from "../../Styles/Home.module.scss";

const BottomSection = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 my-3">
                    <div className={`${styles.cta_img}`}></div>
                </div>
                <div className={`${styles.right_section} col-md-6  my-3`}>
                    <div className={`px-4 d-flex flex-column justify-content-center  h-100`}>
                        <h1><span>Support</span> good food and local business.</h1>
                        <Link to='/order'>
                            <button className="chomp_primary_color bg-white ms-auto border-0 px-5 py-3 rounded-3 mt-3">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;

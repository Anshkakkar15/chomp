import React from "react";

import styles from "../../Styles/Banner.module.scss";

import banner from "../../Assets/Index/yumyum.png";

const Banner = ({ children }) => {
  return (
    <div className={`${styles.banmer_wrapper}`}>
      <div className={`${styles.img_container}`}>
        <img src={banner} alt="banner" />
      </div>
      <div className={` ${styles.text_container}`}>
        <h1 className="fw-bold  text-center">{children}</h1>
      </div>
    </div>
  );
};

export default Banner;

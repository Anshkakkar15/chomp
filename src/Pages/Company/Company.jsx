import React from 'react'
import { Link } from 'react-router-dom';

import Banner from '../../Components/Banner/Banner';
import Button from "../../Components/Button/Button";

import styles from '../../Styles/Company.module.scss'
import teamImg from '../../Assets/Company/team.png'
import wave from '../../Assets/Company/wave.svg'

export default function Company() {
  return (
    <div>
      <Banner>
        Our company focuses on
        <span className="chomp_primary_color"> food and people.</span>
      </Banner>
      <div className={`${styles.content_section} position-relative`}>
        <div className="container">
          <div className="row">
            <div
              className={`col-md-6 ${styles.left_content} d-flex gap-3 align-items-center`}
            >
              <div className="d-flex flex-column ">
                <div>
                  <h2 className="chomp_primary_color fw-bold">
                    The home of fresh products
                  </h2>
                  <p className="chomp_body_color py-3 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </p>
                  <Link to="/company" className="text-decoration-none">
                    <Button>Learn About us</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 gap-3 my-4">
              <img
                src={teamImg}
                alt="customer"
                className={`${styles.heroImage}`}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.fullImg}`}>
        <div className="container">
          <div className={`d-grid ${styles.statics}`}>
            <div className="block1">
              <h1>62</h1>
              <img src={wave} alt="wave"/>
              <p>Fiesty Menu Items</p>
            </div>
            <div className="block2">
              <h1>139</h1>
              <img src={wave} alt="wave"/>
              <p>Fiesty Menu Items</p>
            </div>
            <div className="block3">
              <h1>34</h1>
              <img src={wave} alt="wave"/>
              <p>Fiesty Menu Items</p>
            </div>
            <div className="block4">
              <h1>57</h1>
              <img src={wave} alt="wave"/>
              <p>Fiesty Menu Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

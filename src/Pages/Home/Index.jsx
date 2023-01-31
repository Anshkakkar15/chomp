import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../Components/Button/Button";
import MenuCard from "../../Components/MenuCard/MenuCard";

import styles from "../../Styles/Home.module.scss";
import { processDetails } from "../../Mock/Card/Card";
import { menu } from "../../Mock/ourMenu/ourMenu";
import { menuState, toggleState } from "../../Function/homeState";

import heroLogo from "../../Assets/Index/herologo.svg";
import heroImage from "../../Assets/Index/heroImage.png";
import customer from "../../Assets/Index/customer.png";
import BottomSection from "../../Components/BottomSection/BottomSection";



export default function Index() {
  const [tab, setTab] = useState(menuState);
  const burger = menu.filter((el) => {
    return el.roleId === 1;
  });
  const sides = menu.filter((el) => {
    return el.roleId === 2;
  });
  const drink = menu.filter((el) => {
    return el.roleId === 3;
  });
  return (


    <div style={{overflowX:"hidden"}}>
      <div className={`${styles.banner_section}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-md-6 gap-3">
              <h1 className="fw-bold">
                Beautiful food & takeaway,
                <span className="chomp_primary_color">delivered</span> to your
                door.
              </h1>
              <p className="chomp_body_color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
              <Link to="/order" className="text-decoration-none">
                <Button>Place An order</Button>
              </Link>
              <div className={`my-3 d-flex ${styles.heroLogo}`}>
                <div>
                  <img src={heroLogo} alt="hero-logo" />
                </div>
                <div>
                  <p className="py-2 text-muted">
                    <span className="chomp_primary_color">4.8 out of 5</span>{" "}
                    based on 2000+ reviews
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-md-6 my-4 gap-3 align-items-center`}>
              <img
                src={heroImage}
                alt="banner"
                className={`${styles.heroImage}`}
              />
            </div>
          </div>
        </div>
      </div>
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
                src={customer}
                alt="customer"
                className={`${styles.heroImage}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center fw-bold fs-1 py-5 chomp_primary_color">
          How it works
        </h2>
        <div className="row">
          {processDetails.map((el) => {
            return (
              <div key={el.id} className="col-md-4">
                <div className="card border-0">
                  <img src={el.img} alt="food" />
                  <h4 className="text-center fw-bold pt-4">{el.heading}</h4>
                  <p className="chomp_body_color fs-5 text-center">
                    {el.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row justify-content-center px-2">
        <div className="col-md-6">
          <h2 className="text-center fw-bold fs-1  pt-5 chomp_primary_color">
            Browse our menu
          </h2>
          <p className="text-center chomp_body_color fs-5">
            Use our menu to place an order online, or phone our store to place a
            pickup order. Fast and fresh food
          </p>
        </div>
      </div>
      <div className={`${styles.content_section} align-items-center`}>
        <div className="container mt-5">
          <ul className="d-flex justify-content-center align-items-center flex-wrap gap-2 list-unstyled no-apperance pt-4 py-2 ">
            <li>
              <input type="radio" id="burger" name="ourMenu" />
              <label
                className={`pointer ${tab.burger ? "btnActive" : ""}`}
                htmlFor="burger"
                id="burger"
                style={{ cursor: "pointer" }}
                onClick={() => toggleState(tab, setTab, "burger")}
              >
                Burger
              </label>
            </li>
            <li>
              <input type="radio" id="Sides" name="ourMenu" />
              <label
                className={`lable ${tab.sides ? "btnActive" : ""}`}
                htmlFor="Sides"
                id="Sides"
                style={{ cursor: "pointer" }}
                onClick={() => toggleState(tab, setTab, "sides")}
              >
                Sides
              </label>
            </li>
            <li>
              <input type="radio" id="Drinks" name="ourMenu" />
              <label
                className={`lable ${tab.drinks ? "btnActive" : ""}`}
                htmlFor="Drinks"
                id="Drinks"
                style={{ cursor: "pointer" }}
                onClick={() => toggleState(tab, setTab, "drinks")}
              >
                Drinks
              </label>
            </li>
          </ul>
        </div>
        {tab.burger && tab.burger ? <MenuCard data={burger} /> : ""}
        {tab.sides && tab.sides ? <MenuCard data={sides} /> : ""}
        {tab.drinks && tab.drinks ? <MenuCard data={drink} /> : ""}
      </div>
      <div className="d-flex justify-content-center py-4">
        <Link to="/order" className="text-decoration-none">
          <Button>See Full Menu</Button>
        </Link>
      </div>
      <div className={`${styles.content_section} position-relative`}>
        <div className="container">
          <div className="row">
            <div
              className={`col-md-6 ${styles.left_content} d-flex gap-3 align-items-center`}
            >
              <div className="d-flex flex-column ">
                <div>
                  <h2 className="chomp_primary_color fw-bold">
                    Call our store and takeaway when it suits you best.
                  </h2>
                  <p className="chomp_body_color py-3 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </p>
                  <Link to="/company" className="text-decoration-none">
                    <Button>Ph. +123 987 2545</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 gap-3 my-4">
              <img
                src={heroImage}
                alt="customer"
                className={`${styles.heroImage}`}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
          <BottomSection />
    </div>
  );
}

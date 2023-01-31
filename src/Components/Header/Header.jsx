import React, { useContext, useState } from "react";
import { ImCart, ImCross } from "react-icons/im";
import { Link ,useLocation } from "react-router-dom";

import Button from "../Button/Button";
import dataContent from "../Context/Store";

import logo from "../../Assets/Images/logo.svg";
import styles from "../../Styles/Header.module.scss";
import CartInput from "./CartInput";
import { toast } from "react-hot-toast";

const Header = () => {
  const location = useLocation();
  const { cartData, setCartData } = useContext(dataContent);

  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const [cart, setCart] = useState(false)

  const cartActive = () => {
    setCart(!cart);
  };

  const handleRemove = (el) => {
    setCartData(cartData.filter((data) => data !== el));
  };

  const itemsPrice = cartData.reduce((amount, items) => amount + items.quantity * items.price, 0);  


  return (
    <div className={`${styles.header_component}`}>
      <div
        className={`text-center text-white chomp_background_color primary-bg-img h-100 ${styles.topHead}`}
      >
        We're open and available for takeaway & delivery.
        <a className="text-white text_decoration" href="/">
          Order Now
        </a>
      </div>
      <div className=" bg-white">
        <div
          className={`navbar d-flex justify-content-between align-items-center py-4 ${styles.nav_container}`}
        >
          <div className="nav-left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-right d-flex  align-items-center ">
            <div
              className={`${styles.navlinks} ${isActive ? styles.active : ""}`}
            >
              <li>
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? styles.activeClass : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className={`${
                    location.pathname === "/order" ? styles.activeClass : ""
                  }`}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className={`${
                    location.pathname === "/company" ? styles.activeClass : ""
                  }`}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`${
                    location.pathname === "/faq" ? styles.activeClass : ""
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <div className={`${styles.cart_container} `} onClick={cartActive}>
              <ImCart
                className={`primary-bg-img text-white chomp_background_color mx-auto ${styles.icon}`}
              />
              <span>{cartData.length}</span>
            </div>
            <div onClick={ToggleClass} className={`${styles.hamburger}`}>
              <div className={`${styles.lines}`}></div>
              <div className={`${styles.lines}`}></div>
              <div className={`${styles.lines}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`cart ${cart ? "activeCart" : ""}`}>
        <div className="row h-100 flex-nowrap">
          <div
            className={`col-md-7 bg-dark opacity-50 ${styles.left_row} `}
            onClick={() => setCart(!cart)}
          ></div>
          <div className="col-md-5 bg-white">
            <div className="heading border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
              <h3 className="fw-semibold">Your Orders</h3>
              <div onClick={() => setCart(!cart)} style={{ cursor: "pointer" }}>
                <ImCross />
              </div>
            </div>
            <div className="container-fluid">
              {cartData.length >= 1 ? (
                cartData.map((el, i) => (
                  <div key={i}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="p-3">
                          <img
                            src={el.image}
                            alt="cart-items"
                            width={70}
                            className="rounded-2"
                          />
                        </div>
                        <div className="lh-sm">
                          <p className="mb-1 fw-semibold fs-5">{el.name}</p>
                          <p className="mb-1 chomp_primary_color">
                            ${el.price} USD
                          </p>
                          <span
                            className="chomp_body_color"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              handleRemove(el);
                            }}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                      <CartInput cartQuantity={el?.quantity} />
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className={`d-flex justify-content-center align-items-center ${styles.emptyCart}`}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center ">
                    <p className="fw-semibold fs-5">
                      We couldn't find any items in your cart.
                    </p>
                    <Link
                      to="/order"
                      className="text-decoration-none"
                      onClick={() => setCart(!cart)}
                    >
                      <Button>Start an Order</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {cartData.length >= 1 ? (
              <div className={`${styles.subTotal} border-top`}>
                <div className="d-flex justify-content-between align-items-center px-3">
                  <p className="fs-4 chomp_body_color">Subtotal</p>
                  <p className="fs-4 fw-semibold">${itemsPrice.toString().slice(0,5)} USD</p>
                </div>
                <button
                  onClick={() =>
                    toast.error("Checkout is disabled at that time")
                  }
                  className="w-100 px-5 py-3 rounded-2 chomp_background_color text-white border-0"
                >
                  Continue to Checkout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

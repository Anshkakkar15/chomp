import React, { useContext } from "react";
import { Link } from "react-router-dom";

import dataContent from "../Context/Store";

import styles from "../../Styles/MenuCard.module.scss";
import { toast } from "react-hot-toast";

const MenuCard = ({ data }) => {
  const { cartData, setCartData } = useContext(dataContent);

  const orderDetails = (el) => {
    const exists = cartData.find((product) => product.id === el.id);
    if (exists) {
      setCartData(
        cartData.map((product) =>
          product.id === el.id
            ? { ...el, quantity: exists.quantity + 1 }
            : product
        )
      );
    } else {
      setCartData([
        ...cartData,
        {
          ...el,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="container">
      <div className={`${styles.menuCard}`}>
        {data.map((el) => (
          <div
            key={el.id}
            className={`d-grid  text-decoration-none rounded-3 bg-white ${styles.container_wrapper}`}
          >
            <Link
              to={`/order/product?name=${el.name}`
                .replaceAll(" ", "_")
                .toLowerCase()}
            >
              <img
                src={el.image}
                alt="buger1"
                className={`${styles.foodImage}`}
              />
            </Link>
            <div
              className={`row justify-content-between py-3 ${styles.menuContent}`}
            >
              <Link
                to={`/order/product?name=${el.name}`
                  .replaceAll(" ", "_")
                  .toLowerCase()}
                className="col-md-6 text-dark text-decoration-none fs-5 fw-semibold"
                style={{ cursor: "pointer" }}
              >
                {el.name}
              </Link>
              <p className={`chomp_primary_color col-md-6 ${styles.price}`}>
                $ {el.price} USD
              </p>
              <p className="chomp_body_color">{el.details}</p>
              <div className="d-flex align-items-center">
                <button
                  onClick={() => {
                    orderDetails(el);
                    cartData.length < 1
                      ? toast.success("Your cart is waiting")
                      : toast.success("One more item is added to your cart");
                  }}
                  className="chomp_background_color text-white px-3 py-2 text-center rounded-2 border-0"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;

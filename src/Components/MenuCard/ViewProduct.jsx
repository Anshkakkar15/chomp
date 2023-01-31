import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import Banner from "../Banner/Banner";
import dataContent from "../Context/Store";
import MenuCard from "./MenuCard";

import { menu } from "../../Mock/ourMenu/ourMenu";
import { toast } from "react-hot-toast";
import BottomSection from "../BottomSection/BottomSection";

const ViewProduct = () => {
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

  const [searchParams] = useSearchParams();
  const product = menu.filter((data) => {
    return (
      data.name.toLocaleLowerCase() ===
      searchParams.get("name").replaceAll("_", " ")
    );
  });

  const relatedData = menu.filter((el) => {
    return el.roleId === product[0].roleId;
  });

  return (
    <div>
      <Banner>{product[0].name ? product[0].name : ""}</Banner>
      <div className="container my-5">
        {product?.map((items) => (
          <div key={items.id} className="row justify-content-center">
            <div className="col-md-5">
              <img src={items.image} alt="product" className="rounded-2" />
            </div>
            <div className="col-md-7">
              <div className="border-bottom py-2">
                <h1 className="fs-1 fw-semibold">{items.name}</h1>
                <p className="chomp_primary_color fs-2 fw-semibold">
                  $ {items.price} USD
                </p>
              </div>
              <div className="border-bottom py-2">
                <p className="chomp_body_color lh-lg fs-6 py-2">
                  {items.details}
                </p>
                <p className="chomp_body_color lh-lg fs-6">
                  Eos ei isl graecis, vix aperiri consequat an. Eius lorem
                  tincidunt vix at, vel pertinax sensibus id, error epicurei mea
                  et. Mea facilisis urbanitas. Vis ei rationibus definiebas, eu
                  qui purto zril laoreet. Ex error omnium interpretaris pro,
                  alia illum ea vim.
                </p>
                <div className="d-flex align-items-center pb-3">
                  <button
                    onClick={() => {
                      orderDetails(items);
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
          </div>
        ))}
        <div className="related-products my-5">
          <h1 className="chomp_primary_color fs-1 text-center fw-semibold mb-4">
            Related Items
          </h1>
          <MenuCard data={relatedData} />
        </div>
      </div>
      <BottomSection />
    </div>
  );
};

export default ViewProduct;

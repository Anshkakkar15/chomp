import React, { useState } from 'react'
import Accordion from '../../Components/Accordion/Accordion';

import Banner from "../../Components/Banner/Banner";

import { faqState, toggleState } from '../../Function/homeState';
import { data } from '../../Mock/Accoridon-data/Accordion';

export default function Faq() {
  const [tab, setTab] = useState(faqState);

  const foodData = data.filter((el) => {
    return el.roleid===1
  })

  const deliveryData = data.filter((el) => {
    return el.roleid===2
  })

  const companyData = data.filter((el) => {
    return el.roleid===3
  })

  return (
    <div>
      <Banner>
        Frequently Asked
        <span className="chomp_primary_color"> Questions</span>
      </Banner>
      <div className="container my-5">
        <ul className="d-flex justify-content-center align-items-center flex-wrap gap-2 list-unstyled no-apperance pt-4 py-2 ">
          <li>
            <input type="radio" id="Full Menu" name="ourMenu" />
            <label
              className={`pointer ${tab.ourFood ? "btnActive" : ""}`}
              htmlFor="Full Menu"
              id="Full Menu"
              style={{ cursor: "pointer" }}
              onClick={() => toggleState(tab, setTab, "ourFood")}
            >
              Our Food
            </label>
          </li>
          <li>
            <input type="radio" id="burger" name="ourMenu" />
            <label
              className={`pointer ${tab.ourDelivery ? "btnActive" : ""}`}
              htmlFor="burger"
              style={{ cursor: "pointer" }}
              id="burger"
              onClick={() => toggleState(tab, setTab, "ourDelivery")}
            >
              Our Delivery
            </label>
          </li>
          <li>
            <input type="radio" id="Sides" name="ourMenu" />
            <label
              className={`lable ${tab.ourCompany ? "btnActive" : ""}`}
              htmlFor="Sides"
              style={{ cursor: "pointer" }}
              id="Sides"
              onClick={() => toggleState(tab, setTab, "ourCompany")}
            >
              Our Company
            </label>
          </li>
        </ul>
      </div>
      <div className="acc">
        {tab.ourFood && tab.ourFood ? <Accordion data={foodData} /> : ""}
        {tab.ourDelivery && tab.ourDelivery ? (
          <Accordion data={deliveryData} />
        ) : (
          ""
        )}
        {tab.ourCompany && tab.ourCompany ? (
          <Accordion data={companyData} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

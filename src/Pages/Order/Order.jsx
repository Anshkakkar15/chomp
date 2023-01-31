import React, { useState } from 'react'

import Banner from '../../Components/Banner/Banner'
import Button from '../../Components/Button/Button';
import MenuCard from '../../Components/MenuCard/MenuCard';

import { orderState, toggleState } from '../../Function/homeState';

import { menu } from '../../Mock/ourMenu/ourMenu';

export default function About() {
  const [tab, setTab] = useState(orderState);
  const [index, setIndex] = useState(8);

  function addElement() {
    setIndex(index +6);
  }
  function subElement() {
    setIndex(index -6);
  }

   function getElements(menu, index) {
     return menu.slice(0,index).map((el) => {
      return (el)
     });
   }
  
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
    <div>
      <Banner>
        Get your food <span className="chomp_primary_color">delivered</span> ,
        or <span className="chomp_primary_color">pick-up </span>in store.
      </Banner>
      <div className="container my-5">
        <ul className="d-flex justify-content-center align-items-center flex-wrap gap-2 list-unstyled no-apperance pt-4 py-2 ">
          <li>
            <input type="radio" id="Full Menu" name="ourMenu" />
            <label
              className={`pointer ${tab.fullMenu ? "btnActive" : ""}`}
              htmlFor="Full Menu"
              style={{ cursor: "pointer" }}
              id="Full Menu"
              onClick={() => toggleState(tab, setTab, "fullMenu")}
            >
              Full Menu
            </label>
          </li>
          <li>
            <input type="radio" id="burger" name="ourMenu" />
            <label
              className={`pointer ${tab.burger ? "btnActive" : ""}`}
              style={{ cursor: "pointer" }}
              htmlFor="burger"
              id="burger"
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
      {tab.fullMenu && tab.fullMenu ? (
        <MenuCard data={getElements(menu, index)} />
      ) : (
        ""
      )}
      {tab.burger && tab.burger ? <MenuCard data={burger} /> : ""}
      {tab.sides && tab.sides ? <MenuCard data={sides} /> : ""}
      {tab.drinks && tab.drinks ? <MenuCard data={drink} /> : ""}
      {tab.fullMenu && index <= 8 ? (
        <div className="d-flex justify-content-center align-items-center py-4">
          <Button onClick={addElement}>View More</Button>
        </div>
      ) : (
        ""
      )}
      {tab.fullMenu && index > 8 ? (
        <div className="d-flex justify-content-center align-items-center py-4">
          <Button onClick={subElement}>View Less</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

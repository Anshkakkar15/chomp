import React, { useState } from "react";

import styles from "../../Styles/Header.module.scss";

const CartInput = ({ cartQuantity }) => {
  const [quantity, setQuantity] = useState(cartQuantity);

  const handleChange = (e) => {
    // const { value } = e.target;
    // setQuantity(value);
  };

  // console.log(quantity)

  return (
    <input
      type="number"
      name="quantity"
      value={cartQuantity}
      className={`${styles.totalNumber}`}
      onChange={handleChange}
    />
  );
};

export default CartInput;

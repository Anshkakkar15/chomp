import React from 'react'
import styles from '../../Styles/Button.module.scss'
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button

import React from "react";
import "components/Button.scss";

const classNames = require("classnames");

export default function Button(props) {
  let buttonClass = classNames("button", props.className, {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.children}
    </button>
  );
}

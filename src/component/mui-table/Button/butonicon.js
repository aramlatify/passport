import React from "react";
import "./main.css";
import SellButton from "./button";
import Icon from "./btnx";
function Header() {
  return (
    <div className="sellMenu">
      <SellButton></SellButton>
      <div className="sellMenuContent">
        <span>سڕینەوە</span>
        <Icon></Icon>
      </div>
    </div>
  );
}

export default Header;

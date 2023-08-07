import "./header.css";
import React from "react";
import { FC } from "react";

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="header__container">
      <span className="header__title">Notes Board</span>
    </div>
  );
};

export default Header;

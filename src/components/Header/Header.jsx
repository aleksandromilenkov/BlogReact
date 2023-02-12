import React, { useContext } from "react";
import "./Header.css";
import { BsSun } from "react-icons/bs";
import Context from "../../context/context";
import Sun from "../Sun/Sun";
const Header = (props) => {
  const ctx = useContext(Context);
  return (
    <div className="header">
      <Sun />
      <h2>Inc. The Morning News</h2>
      <h1>
        <span>"</span> Learn React <span>"</span>
      </h1>
      <p>
        awesome place to make onself.
        <br /> productive and entertained through daily updates.
      </p>
    </div>
  );
};

export default Header;

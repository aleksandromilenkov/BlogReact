import React from "react";
import { useContext } from "react";
import Context from "../../context/context";
import { BsSun } from "react-icons/bs";
import "./Sun.css";
const Sun = () => {
  const ctx = useContext(Context);
  return (
    <p className="toggle-theme" onClick={ctx.setTheme}>
      <BsSun className={`${ctx.theme}`} />
    </p>
  );
};

export default Sun;

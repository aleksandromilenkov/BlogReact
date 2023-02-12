import React from "react";
import "./Emptylist.css";
const Emptylist = () => {
  console.log("emptyListComponent");
  return (
    <div className="empty-list">
      <img src="/assets/images/emptylist.gif" alt="gif" />
    </div>
  );
};

export default Emptylist;

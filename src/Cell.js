import React from "react";

export default ({ isInit, number, onClick }) => (
  <div
    onClick={isInit ? null : onClick}
    className={`cell ${isInit ? "initial" : ""}`}
  >
    {!!number && number}
  </div>
);

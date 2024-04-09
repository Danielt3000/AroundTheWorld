import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import React from "react";

const GridContent = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="categoty-flex"
      onClick={() => dispatch(push("/places?category=" + category.id))}
    >
      <img src={category.image} alt="" />
    </div>
  );
};

export default GridContent;

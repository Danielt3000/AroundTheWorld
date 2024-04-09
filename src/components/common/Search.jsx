import React, { useState } from "react";
import Imgsearch from "../../assets/img/search.svg";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

  return (
    <>
      <form onSubmit={submitAction}>
        <input
          className="search-bar"
          name="search"
          type="inputbox"
          onChange={inputSearch}
          placeholder="Search for best places to Visit"
        />
      </form>
      <a onClick={() => console.log("test")}>
        <img
          className="search-icon"
          onClick={() => {
            alert("test");
          }}
          src={Imgsearch}
          alt=""
        />
      </a>
    </>
  );
};

export default Search;

import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/logo.svg";
import Dropdown from '../../assets/img/dropdown.svg';
import Search from "../common/Search";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => dispatch(push('/'))} />
          </div>
          <div className="right-nav">
            <img src={Dropdown} alt="dropdown" onClick={() => dispatch(push('/favourites'))} />
          </div>
        </nav>
        <div className="search">
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;

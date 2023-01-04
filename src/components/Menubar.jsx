import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Menubar.css";

// 과일 리스트
const Menubar = () => {
  return (
    <div className="Menubar">
      <div className="Menubarlogo">
        <Link to="/">SeSAC</Link>
      </div>
      <div className="MenuList">
        <Link to="/list">상품</Link>
        <Link to="/insert">추가</Link>
        <Link>리스트</Link>
        <Link>리스트</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Menubar;

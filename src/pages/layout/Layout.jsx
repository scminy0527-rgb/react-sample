import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>상단 레이아웃 헤더</div>
      <Outlet />
      <div>푸터</div>
    </div>
  );
};

export default Layout;

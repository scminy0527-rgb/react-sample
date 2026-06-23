import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import * as S from "./layoutStyle";

const Layout = () => {
  return (
    <div>
      <S.LayoutBody>
        <Header />
        <Outlet />
        <div>푸터</div>
      </S.LayoutBody>
    </div>
  );
};

export default Layout;

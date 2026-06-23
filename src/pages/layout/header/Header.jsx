import React from "react";
import * as S from "./headerStyle";

// import * as S from "/header"

const Header = () => {
  return (
    <div>
      <S.HeaderBody>
        <S.HeaderContent>
          <img src="/assets/images/header/rian.png" alt="로고" />
          <S.HeaderButtonList>
            <S.HeaderButton>PRODUCTS</S.HeaderButton>
            <S.HeaderButton>ABOUT US</S.HeaderButton>
          </S.HeaderButtonList>
        </S.HeaderContent>
      </S.HeaderBody>
    </div>
  );
};

export default Header;

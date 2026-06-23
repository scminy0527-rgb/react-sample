import React, { useState, useEffect } from "react";
import * as S from "./headerStyle";

// import * as S from "/header"

const Header = () => {
  const [opacity, setOpacity] = useState(0);

  // 스크롤 정도에 따라서 헤더 배경 색 투명도 조절
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const newOpacity = Math.min(scrollY / maxScroll, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <S.HeaderBody $opacity={opacity}>
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

import React from "react";
import styled from "styled-components";
import * as S from "./mainStyle";
import ItemsContainer from "./itemscontainer/ItemsContainer";
import AiData from "./aidata/AiData";

const TestHeight = styled.div`
  height: 1500px;
`;

const Main = () => {
  return (
    <div>
      <S.VideoContainer>
        <S.Video autoPlay muted loop>
          <source src="/assets/video/main/main01.mp4" type="video/mp4" />
        </S.Video>
      </S.VideoContainer>

      {/* 메인 페이지 내 상품 목록 */}
      <ItemsContainer />

      {/* 우리 회사의 AI를 위한 데이터 학습 및 전처리 내용을 요약 해서 설명하는 부분 */}
      <AiData />

      <TestHeight />
    </div>
  );
};

export default Main;

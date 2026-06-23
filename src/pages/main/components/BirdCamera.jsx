import React from "react";
import * as S from "./birdCameraStyle";

const BirdCamera = () => {
  return (
    <S.BirdCameraCard>
      <S.ImageWrapper>
        <S.CameraImage src="/assets/images/products/birdcamera/bird-camera.png" alt="Bird Camera" />
      </S.ImageWrapper>
      <S.CardContent>
        <S.CardTitle>조류탐지 카메라</S.CardTitle>
        <S.CardDescription>
          조류충돌방지를 위한 첨단 AI 기반 조류탐지 카메라로, 실시간으로 조류를 감지하고 충돌을 예방합니다.
        </S.CardDescription>
        <S.ViewMoreButton>View More</S.ViewMoreButton>
      </S.CardContent>
    </S.BirdCameraCard>
  );
};

export default BirdCamera;

import React from "react";
import * as S from "./aiDataStyle";

const AiData = () => {
  const aiDataCards = [
    {
      id: 1,
      title: "데이터 수집",
      description:
        "다양한 소스에서 AI 모델 학습에 필요한 데이터를 체계적으로 수집합니다.",
      image: "/assets/images/ai/main_ai_01.png",
    },
    {
      id: 2,
      title: "데이터 전처리",
      description:
        "수집된 원본 데이터를 정제하고 변환하여 모델이 학습하기 좋은 형태로 처리합니다.",
      image: "/assets/images/ai/main_ai_02.png",
    },
    {
      id: 3,
      title: "모델 학습",
      description:
        "전처리된 데이터로 AI 모델을 학습하고 최적화하여 높은 성능의 모델을 개발합니다.",
      image: "/assets/images/ai/main_ai_03.png",
    },
  ];

  return (
    <S.AiDataSection>
      <S.SectionHeader>
        <S.SectionTitle>AI 데이터 분석 & 모델링</S.SectionTitle>
        <S.SectionDescription>
          우리는 고품질의 데이터 수집, 전처리, 그리고 최적화된 모델 학습을 통해
          정확하고 신뢰할 수 있는 AI 솔루션을 제공합니다.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.CardsContainer>
        {aiDataCards.map((card) => (
          <S.AiCard key={card.id}>
            <S.ImageWrapper>
              <S.CardImage src={card.image} alt={card.title} />
            </S.ImageWrapper>
            <S.CardContent>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.CardDescription>{card.description}</S.CardDescription>
            </S.CardContent>
          </S.AiCard>
        ))}
      </S.CardsContainer>

      <S.MoreButtonContainer>
        <S.MoreButton>더 보기</S.MoreButton>
      </S.MoreButtonContainer>
    </S.AiDataSection>
  );
};

export default AiData;

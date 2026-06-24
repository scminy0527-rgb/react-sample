import React from "react";
import * as S from "./itemCardStyle";

const ItemCard = ({ name, detail, thumbnail_url, price }) => {
  return (
    <S.ItemCard>
      <S.ImageWrapper>
        <S.CardImage src={thumbnail_url} alt={name} />
      </S.ImageWrapper>
      <S.CardContent>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardDescription>{detail}</S.CardDescription>
        <S.ViewMoreButton>View More</S.ViewMoreButton>
      </S.CardContent>
    </S.ItemCard>
  );
};

export default ItemCard;

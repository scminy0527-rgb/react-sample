import React, { useState, useEffect } from "react";
import * as S from "./itemsContainerStyle";
import ItemCard from "../components/ItemCard";
import ItemsSkeleton from "../components/ItemsSkeleton";
import { getItems } from "../../../functions/itemService";

const ItemsContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getItems();
        setItems(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("상품 데이터 조회 오류:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <ItemsSkeleton count={3} />;
  }

  if (error) {
    return (
      <S.StateContainer>
        <S.StateContent>
          <S.StateIcon>⚠️</S.StateIcon>
          <S.StateText>상품을 불러올 수 없습니다</S.StateText>
          <S.StateSubText>{error}</S.StateSubText>
        </S.StateContent>
      </S.StateContainer>
    );
  }

  if (items.length === 0) {
    return (
      <S.StateContainer>
        <S.StateContent>
          <S.StateIcon>📦</S.StateIcon>
          <S.StateText>등록된 상품이 없습니다</S.StateText>
        </S.StateContent>
      </S.StateContainer>
    );
  }

  return (
    <S.ItemsArea>
      <S.ItemsContainerWrapper>
        {items.map((item, idx) => (
          <ItemCard key={idx} {...item} />
        ))}
      </S.ItemsContainerWrapper>
    </S.ItemsArea>
  );
};

export default ItemsContainer;

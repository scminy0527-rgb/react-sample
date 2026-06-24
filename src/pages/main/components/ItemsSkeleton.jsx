import React from "react";
import * as S from "./itemsSkeletonStyle";

const ItemsSkeleton = ({ count = 3 }) => {
  return (
    <S.SkeletonWrapper>
      <S.SkeletonContainer>
        {[...Array(count)].map((_, idx) => (
          <S.SkeletonCard key={idx}>
            <S.SkeletonImage />
            <S.SkeletonContent>
              <S.SkeletonLine height="20px" width="80%" />
              <S.SkeletonLine height="16px" width="100%" />
              <S.SkeletonLine height="16px" width="90%" />
              <S.SkeletonLine height="40px" width="110px" />
            </S.SkeletonContent>
          </S.SkeletonCard>
        ))}
      </S.SkeletonContainer>
    </S.SkeletonWrapper>
  );
};

export default ItemsSkeleton;

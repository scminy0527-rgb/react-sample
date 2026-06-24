import styled from "styled-components";

export const ItemCard = styled.div`
  width: 433px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`;

export const ViewMoreButton = styled.button`
  align-self: flex-start;
  padding: 10px 24px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

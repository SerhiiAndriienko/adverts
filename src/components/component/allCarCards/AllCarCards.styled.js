import styled from '@emotion/styled';

export const CardImg = styled.img`
  object-fit: cover;
  height: 268px;
  max-width: 274px;
  display: block;
  border-radius: 10px;
`;
export const Card = styled.li`
  list-style: none;
  min-height: 426px;
  max-width: 274px;
  border: 1px black solid;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: 0.1;
  :hover {
    transform: scale(1.01);
  }
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;
export const FavouriteBtnEl = styled.button`
  background-color: #3470ff;
  margin: 0 auto;
  border: none;
  display: block;
  color: white;
  position: absolute;
  border-radius: 10px;
  top: 10px;
  right: 10px;
`;

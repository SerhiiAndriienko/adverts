import styled from '@emotion/styled';

export const CardImg = styled.img`
  object-fit: cover;
  max-width: 274px;
  display: block;
  border-radius: 10px;
  height: 268px;
`;
export const Card = styled.li`
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 21px;

  list-style: none;
  height: 426px;
  max-width: 274px;
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
  gap: 29px;
  padding-left: 0;
`;
export const Decoration = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  height: 426px;
`;

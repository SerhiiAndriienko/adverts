import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: start;
  color: white;
  gap: 10px;
  padding-top: 30px;
`;

export const CardDecoration = styled.div`
  margin: 0 auto;
  max-width: 541px;
  border-radius: 10px;
  padding: 10px;
  color: black;
  background-color: white;
`;
export const CardImg = styled.img`
  object-fit: cover;
  max-width: 80%;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
`;
export const Card = styled.div`
  list-style: none;
  p {
    margin: 0;
  }
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: white;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
  max-width: 500px;
`;

export const Car = styled.p`
  margin: 0 auto;
  padding: 5px;
  border: 1px white solid;
  display: block;
  border-radius: 10px;
  cursor: pointer;
`;

export const DescriptionPart = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 13px;
  line-height: 1.5;
  padding-top: 8px;
`;
export const CarModel = styled.span`
  color: #3470ff;
  display: inline;
`;
export const Descriptions = styled.div`
  span {
  }
  p {
    margin: 0;
  }
  padding: 10px;
`;
export const Decoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  padding-top: 14px;

  p {
    margin: 0;
  }
`;
export const Prise = styled.span`
  list-style: none;
  display: inline;
`;
export const RentalCarBtn = styled.a`
  background-color: #3470ff;
  width: 35%;
  border: none;
  display: block;
  color: white;
  padding: 12px;
  border-radius: 10px;
  margin-top: auto;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
`;

export const BlueColor = styled.span`
  color: #3470ff;
  font-weight: 700;
`;

export const ConditionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`;
export const Condition = styled.li`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 20px;
  font-size: 13px;
`;

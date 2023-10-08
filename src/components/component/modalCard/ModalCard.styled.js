import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 60%;
  margin: 0 auto;
  min-height: 200px;
  max-width: 541px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
export const CardImg = styled.img`
  object-fit: cover;
  max-width: 100%;
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
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const CloseBtn = styled.img`
  margin: 0 auto;
  border: none;
  display: block;
  color: 121417;
  position: absolute;
  border-radius: 10px;
  top: 16px;
  right: 16px;
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

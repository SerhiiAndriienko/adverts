import styled from '@emotion/styled';
import auto from '../../public/error-auto.jpg';
export const Container = styled.div`
  max-width: 1184px;
  padding: 30px;
  padding-top: 30px;
  margin: 0 auto;
  color: white;
`;

export const TitleDecoration = styled.div`
  display: flex;
  position: relative;
`;
export const Title = styled.h1`
  padding-top: 30px;
`;
export const Decoration = styled.div`
  height: 100vh;
  background-image: url(https://phonoteka.org/uploads/posts/2022-09/1663879437_20-phonoteka-org-p-chernii-fon-mashina-instagram-21.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Features = styled.div`
  display: flex;
  max-width: 80%;
  flex-direction: column;
  p {
    font-size: 25px;
  }
  a {
    background-color: white;
    width: 30%;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    font-weight: 700;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

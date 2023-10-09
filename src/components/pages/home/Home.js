import React from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  TitleDecoration,
  Container,
  Decoration,
  Features,
  Buttons,
} from './Home.styled';
export default function Home() {
  return (
    <Decoration style={{}}>
      <Container>
        <TitleDecoration>
          <Title>
            Welcome to Adverts-Cars! Your journey can be more comfortable with
            our cars.
          </Title>
        </TitleDecoration>
        <Features>
          <p>
            You need a car, but don't want to pay for parking, service and car
            insurance?
          </p>
          <p>Just one phone call and you can choose among dozens of cars.</p>
          <p>
            In our catalog you will find both budget options for everyday travel
            and exclusive cars that will surprise everyone around you.
          </p>
          <Buttons>
            <a href="tel:+380730000000">Rental car</a>
            <Link to="/catalog">To catalog</Link>
          </Buttons>
        </Features>
      </Container>
    </Decoration>
  );
}

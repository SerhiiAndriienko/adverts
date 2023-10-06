import {
  Prise,
  Descriptions,
  DescriptionPart,
  Decoration,
  CarModel,
  LearnMoreBtn,
} from './Description.styled';
export default function Description({ car }) {
  const addressArray = car.address.split(', ');
  return (
    <Descriptions>
      <Decoration>
        <p>
          {car.make} <CarModel>{car.model}</CarModel>, {car.year}
        </p>
        <Prise>{car.rentalPrice}</Prise>
      </Decoration>
      {/* <ul>
        <DescriptionPart>{addressArray[2]}</DescriptionPart>
        <span>| </span> <DescriptionPart>{addressArray[1]}</DescriptionPart>
        <span>| </span> <DescriptionPart>{car.rentalCompany}</DescriptionPart>
        <span>| </span> <DescriptionPart>{car.type}</DescriptionPart>
        <span>| </span> <DescriptionPart>{car.model}</DescriptionPart>
        <span>| </span> <DescriptionPart>{car.id}</DescriptionPart>
        <span>| </span>
        <DescriptionPart>{car.functionalities[0]}</DescriptionPart>
      </ul> */}
      <DescriptionPart>
        {addressArray[2]} | {addressArray[1]} | {car.rentalCompany} | {car.type}{' '}
        | {car.model} | {car.id} |{car.functionalities[0]}
      </DescriptionPart>
      <LearnMoreBtn>Learn more</LearnMoreBtn>
    </Descriptions>
  );
}

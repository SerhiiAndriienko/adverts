import {
  Prise,
  Descriptions,
  DescriptionPart,
  Decoration,
  CarModel,
  LearnMoreBtn,
} from './Description.styled';
export default function Description({
  car,
  isModalOpen,
  setIsModalOpen,
  setSelectedCar,
}) {
  const addressArray = car.address.split(', ');
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedCar(car);
  };
  return (
    <>
      <Descriptions>
        <Decoration>
          <p>
            {car.make} <CarModel>{car.model}</CarModel>, {car.year}
          </p>
          <Prise>{car.rentalPrice}</Prise>
        </Decoration>
        <DescriptionPart>
          {addressArray[1]} | {addressArray[2]} | {car.rentalCompany} |{' '}
          {car.type} | {car.model} | {car.id} | {car.functionalities[0]}
        </DescriptionPart>
      </Descriptions>
      <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
    </>
  );
}

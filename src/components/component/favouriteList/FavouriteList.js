import React, { useState, useEffect } from 'react';
import {
  CardImg,
  Container,
  CarsList,
  Card,
  Car,
  BlueColor,
  CardDecoration,
  ConditionsList,
  DescriptionPart,
  Decoration,
  Condition,
  CarModel,
  RentalCarBtn,
} from './FavouriteList.styled';
import auto from '../../public/error-auto.jpg';
import { ModalCard } from '../modalCard/ModalCard';

export function FavouriteList({ favouriteList }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let addressArray = selectedCar ? selectedCar.address.split(', ') : [];
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  const conditionsArray = selectedCar
    ? selectedCar.rentalConditions.split('\n')
    : [];
  return (
    <Container>
      <CarsList>
        {favouriteList.map(car => (
          <div
            key={car.id}
            style={{ display: 'block' }}
            onClick={() => {
              setSelectedCar(car);
              setIsModalOpen(true);
            }}
          >
            <div>
              <Car>
                {car.make} {car.model}, {car.year}
                <BlueColor style={{ paddingLeft: '10px' }}>
                  {car.rentalPrice}
                </BlueColor>
              </Car>
            </div>
          </div>
        ))}
      </CarsList>
      <div>
        {selectedCar &&
          (windowWidth >= 760 ? (
            <Card key={selectedCar.id}>
              <div>
                <CardDecoration style={{ display: 'block' }}>
                  <CardImg
                    src={selectedCar.img}
                    onError={e => {
                      e.target.src = auto;
                      e.preventDefault();
                    }}
                  ></CardImg>
                  <Decoration>
                    <p>
                      {selectedCar.make}{' '}
                      <CarModel>{selectedCar.model}</CarModel>,{' '}
                      {selectedCar.year}
                    </p>
                  </Decoration>
                  <DescriptionPart>
                    {addressArray[1]} | {addressArray[2]} | Id: {selectedCar.id}{' '}
                    | Year: {selectedCar.year} | Type: {selectedCar.type} | Fuel
                    Consumption {selectedCar.fuelConsumption} | Engine Size:{' '}
                    {selectedCar.engineSize}
                  </DescriptionPart>
                  <p
                    style={{
                      paddingTop: '14px',
                    }}
                  >
                    {selectedCar.description}
                  </p>
                  <p
                    style={{
                      paddingTop: '24px',
                    }}
                  >
                    Accessories and functionalities:
                  </p>
                  <DescriptionPart>
                    |{' '}
                    {selectedCar.accessories.map(accessor => (
                      <span key={accessor}>{accessor} | </span>
                    ))}
                    <br></br>|{' '}
                    {selectedCar.functionalities.map(accessor => (
                      <span key={accessor}>{accessor} | </span>
                    ))}
                  </DescriptionPart>
                  <p
                    style={{
                      paddingTop: '24px',
                    }}
                  >
                    Rental Conditions:
                  </p>
                  <ConditionsList>
                    <Condition>
                      {conditionsArray[0].slice(
                        0,
                        conditionsArray[0].length - 2
                      )}
                      <BlueColor>
                        {' '}
                        {conditionsArray[0].slice(
                          conditionsArray[0].length - 2,
                          conditionsArray[0].length
                        )}
                      </BlueColor>
                    </Condition>
                    {conditionsArray.slice(1).map(condition => (
                      <Condition key={condition}>{condition}</Condition>
                    ))}

                    <Condition>
                      Mileage:
                      <BlueColor>
                        {' '}
                        {selectedCar.mileage.toLocaleString('en-US')}
                      </BlueColor>
                    </Condition>
                    <Condition>
                      <BlueColor>{selectedCar.rentalPrice}</BlueColor>
                    </Condition>
                  </ConditionsList>

                  <RentalCarBtn href="tel:+380730000000">
                    Rental car
                  </RentalCarBtn>
                </CardDecoration>
              </div>
            </Card>
          ) : (
            <ModalCard
              selectedCar={selectedCar}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onClose={() => {
                setSelectedCar(null);
              }}
            ></ModalCard>
          ))}
      </div>
    </Container>
  );
}

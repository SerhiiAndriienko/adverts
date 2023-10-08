import { useState } from 'react';
import Description from '../description/Description';
import auto from '../../public/error-auto.jpg';
import { CardImg, Card, CarsList, Decoration } from './FavouriteList.styled';
import { ModalCard } from '../modalCard/ModalCard';

export function FavouriteList({ favouriteList, setFavouriteList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <CarsList>
      {favouriteList.map(car => (
        <Card key={car.id} style={{ display: 'block', width: 274 }}>
          <Decoration>
            <CardImg
              alt={`Car ${car.id}`}
              src={car.img || auto}
              onError={e => {
                e.target.src = auto;
                e.preventDefault();
              }}
            />
            <Description
              car={car}
              setSelectedCar={setSelectedCar}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          </Decoration>
        </Card>
      ))}
      {isModalOpen && (
        <ModalCard
          selectedCar={selectedCar}
          setIsModalOpen={setIsModalOpen}
          onClose={() => {
            setSelectedCar(null);
          }}
        ></ModalCard>
      )}
    </CarsList>
  );
}

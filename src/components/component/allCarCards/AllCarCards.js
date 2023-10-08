import { useState } from 'react';
import Description from '../description/Description';
import { CardImg, Card, CarsList } from './AllCarCards.styled';
import { FavouriteBtn } from 'components/component/favouriteBtn/FavouriteBtn';
import { ModalCard } from '../modalCard/ModalCard';
export default function AllCarCard({
  carsList,
  favouriteList,
  addFavouriteList,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <CarsList>
      {carsList.map(car => (
        <Card key={car.id}>
          <div to={`/cars/${car.id}`} state={{ from: `/` }}>
            <div style={{ display: 'block', width: 274 }}>
              <CardImg src={car.img}></CardImg>
              <Description
                car={car}
                setSelectedCar={setSelectedCar}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
              ></Description>
            </div>
          </div>
          <FavouriteBtn
            car={car}
            favouriteList={favouriteList}
            addFavouriteList={addFavouriteList}
          >
            favorite
          </FavouriteBtn>
        </Card>
      ))}
      {isModalOpen && (
        <ModalCard
          selectedCar={selectedCar}
          setIsModalOpen={setIsModalOpen}
          onClose={() => {
            setSelectedCar(null);
          }}
          // isLoading={isLoading}
        ></ModalCard>
      )}
    </CarsList>
  );
}

import { useState } from 'react';
import Description from '../description/Description';
import { CardImg, Card, CarsList, Decoration } from './AllCarCards.styled';
import { FavouriteBtn } from 'components/component/favouriteBtn/FavouriteBtn';
import { ModalCard } from '../modalCard/ModalCard';
import auto from '../../public/error-auto.jpg';
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
          <div>
            <Decoration>
              <CardImg
                src={car.img || auto}
                onError={e => {
                  e.target.src = auto;
                  e.preventDefault();
                }}
              ></CardImg>
              <Description
                car={car}
                setSelectedCar={setSelectedCar}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
              ></Description>
            </Decoration>
          </div>
          <FavouriteBtn
            car={car}
            favouriteList={favouriteList}
            addFavouriteList={addFavouriteList}
          ></FavouriteBtn>
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

import { Link } from 'react-router-dom';
import Description from '../description/Description';
import { CardImg, Card, CarsList, FavouriteBtn } from './OneCarCard.styled';
export default function OneCarCard({ carsList }) {
  return (
    <CarsList>
      {carsList.map(car => (
        <Card key={car.id}>
          <div to={`/cars/${car.id}`} state={{ from: `/` }}>
            <div style={{ display: 'block', width: 274 }}>
              <CardImg src={car.img}></CardImg>
              <Description car={car}></Description>
            </div>
          </div>
          <FavouriteBtn
          // onClick={() => {
          //   if (inFavouriteList) {
          //     removeFromFavourite(data);
          //   } else {
          //     addToFavourite(data);
          //   }
          // }}
          >
            favorite
          </FavouriteBtn>
        </Card>
      ))}
    </CarsList>
  );
}

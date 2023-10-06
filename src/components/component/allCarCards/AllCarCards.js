// import { Link } from 'react-router-dom';
import Description from '../description/Description';
import { CardImg, Card, CarsList } from './AllCarCards.styled';
import { FavouriteBtn } from 'components/component/favouriteBtn/FavouriteBtn';
export default function AllCarCard({
  carsList,
  favouriteList,
  addFavouriteList,
}) {
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
            car={car}
            favouriteList={favouriteList}
            addFavouriteList={addFavouriteList}
          >
            favorite
          </FavouriteBtn>
        </Card>
      ))}
    </CarsList>
  );
}

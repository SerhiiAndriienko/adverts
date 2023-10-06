import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavouriteBtnEl } from './FavouriteBtn.styled';
import FavoriteIcon from '../../public/FavoriteIcon.svg';
import FavoriteIconFilled from '../../public/heart.svg';

export function FavouriteBtn({ car, favouriteList, addFavouriteList }) {
  const [inFavouriteList, setInFavouriteList] = useState(false);

  useEffect(() => {
    if (favouriteList) {
      setInFavouriteList(favouriteList.some(item => item.id === car.id));
    }
  }, [car, favouriteList]);

  const addToFavourite = car => {
    const newFavorite = car;

    const newArray = favouriteList
      ? [...favouriteList, newFavorite]
      : [newFavorite];
    localStorage.setItem('favourite', JSON.stringify(newArray));

    addFavouriteList(newArray);
  };

  const removeFromFavourite = car => {
    const newArray = favouriteList.filter(item => item.id !== car.id);
    localStorage.setItem('favourite', JSON.stringify(newArray));
    addFavouriteList(newArray);
  };

  return (
    <>
      <FavouriteBtnEl
        onClick={() => {
          if (inFavouriteList) {
            removeFromFavourite(car);
          } else {
            addToFavourite(car);
          }
        }}
      >
        {inFavouriteList ? (
          <>
            <img
              width="18"
              height="18"
              src={FavoriteIconFilled}
              alt="filled favourite icons"
            />
          </>
        ) : (
          <>
            <img
              width="18"
              height="18"
              src={FavoriteIcon}
              alt="empty favourite icons"
            />
          </>
        )}
      </FavouriteBtnEl>
    </>
  );
}
FavouriteBtn.propTypes = {
  car: PropTypes.object,
  favouriteList: PropTypes.array,
  addFavouriteList: PropTypes.func.isRequired,
};

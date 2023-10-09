import React, { useState, useEffect } from 'react';
import { FavouriteList } from 'components/component/favouriteList/FavouriteList';
import { Decoration, Title } from './Favourite.styled';
export default function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);
  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
    if (getFromStorage) {
      setFavouriteList(getFromStorage);
    }
  }, []);
  return (
    <Decoration>
      {favouriteList[0] ? (
        <div style={{ maxWidth: '1184px', margin: '0 auto' }}>
          <Title style={{ textAlign: 'center', margin: 0 }}>
            Your favourite`s cars list:
          </Title>
          <FavouriteList
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
          ></FavouriteList>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'center', paddingTop: '20px', margin: 0 }}>
            Your favourite`s cars list is empty
          </h1>
        </div>
      )}
    </Decoration>
  );
}

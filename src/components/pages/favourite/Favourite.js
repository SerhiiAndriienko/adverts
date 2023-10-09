import React, { useState, useEffect } from 'react';
import { FavouriteList } from 'components/component/favouriteList/FavouriteList';

export default function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);
  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
    if (getFromStorage) {
      setFavouriteList(getFromStorage);
    }
  }, []);
  return favouriteList[0] ? (
    <div style={{ maxWidth: '1184px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Your favourite`s cars list:</h2>
      <FavouriteList
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
      ></FavouriteList>
    </div>
  ) : (
    <div style={{ maxWidth: '1184px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Your favourite`s cars list is empty</h1>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
// import Loader from 'components/component/Loader/Loader';
import Description from 'components/component/description/Description';

export default function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);
  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
    if (getFromStorage[0]) {
      setFavouriteList(getFromStorage);
    }
  }, []);
  return favouriteList[0] ? (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your favourite`s cars list:</h2>
      <div>
        {favouriteList.map(car => (
          <div key={car.id} style={{ display: 'block', width: 274 }}>
            <img src={car.img} width="274px" alt={`Car ${car.id}`} />
            <Description car={car} />
          </div>
        ))}
      </div>
      {/* {isLoading ? <Loader /> : ''} */}
    </div>
  ) : (
    <div>
      <h1>Your favourite`s cars list is empty</h1>
    </div>
  );
}

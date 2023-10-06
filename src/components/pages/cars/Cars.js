import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import AllCarCards from 'components/component/allCarCards/AllCarCards';
import Loader from 'components/component/Loader/Loader';
let url = new URL('https://651fe1f4906e276284c3ac51.mockapi.io/api/cars');
url.searchParams.append('completed', false);
url.searchParams.append('page', 2);
url.searchParams.append('limit', 10);

export default function Cars() {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
    if (getFromStorage) {
      setFavouriteList(getFromStorage);
    }
    async function fetchData() {
      setIsLoading(true);

      axios
        .get(url.href)
        .then(response => {
          const cars = response.data;
          setCarsList(cars);
          setIsLoading(false);
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  const addFavouriteList = array => {
    setFavouriteList(array);
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Select your car</h2>
      {isLoading ? <Loader /> : ''}

      <AllCarCards
        favouriteList={favouriteList}
        addFavouriteList={addFavouriteList}
        carsList={carsList}
      ></AllCarCards>
    </div>
  );
}

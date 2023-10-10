import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllCarCards from 'components/component/allCarCards/AllCarCards';
import Loader from 'components/component/Loader/Loader';
import { LoadMore } from 'components/component/loadMore/LoadMore';
let url = new URL('https://651fe1f4906e276284c3ac51.mockapi.io/api/cars');

export default function Cars() {
  const [carsList, setCarsList] = useState([]);
  const [allCarsList, setAllCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favouriteList, setFavouriteList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
    if (getFromStorage) {
      setFavouriteList(getFromStorage);
    }

    async function fetchData() {
      setIsLoading(true);
      await axios
        .get(url.href)
        .then(response => {
          const cars = response.data;
          setAllCarsList(cars);
          setIsLoading(false);
          perPage(page, cars);
        })

        .catch(error => {
          setIsLoading(false);
        });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const perPage = (pageNumber, carsList) => {
    setCarsList(carsList.slice(0, pageNumber * 8));
  };
  const addFavouriteList = array => {
    setFavouriteList(array);
  };

  const nextPage = () => {
    setPage(page + 1);
    perPage(page + 1, allCarsList);
  };

  return (
    <div style={{ maxWidth: '1223px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Select your car:</h2>
      {isLoading ? <Loader /> : ''}
      <AllCarCards
        favouriteList={favouriteList}
        addFavouriteList={addFavouriteList}
        carsList={carsList}
      ></AllCarCards>
      {allCarsList.length > page * 8 && (
        <LoadMore nextPage={nextPage}></LoadMore>
      )}
    </div>
  );
}

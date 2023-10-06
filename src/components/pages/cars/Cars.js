import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OneCarCard from 'components/component/oneCarCard/OneCarCard';
import Loader from 'components/component/Loader/Loader';
let url = new URL('https://651fe1f4906e276284c3ac51.mockapi.io/api/cars');
url.searchParams.append('completed', false);
url.searchParams.append('page', 2);
url.searchParams.append('limit', 10);

export default function Cars() {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loader></Loader>
  //     </div>
  //   );
  // }
  return (
    <div>
      <h2>Select your car</h2>
      {isLoading ? <Loader /> : ''}

      <OneCarCard carsList={carsList}></OneCarCard>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from 'components/component/Loader/Loader';
let url = new URL('https://651fe1f4906e276284c3ac51.mockapi.io/api/cars');
url.searchParams.append('completed', false);
url.searchParams.append('page', 1);
url.searchParams.append('limit', 10);

export default function Cars() {
  const [carsList, setCarsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  if (isLoading) {
    return (
      <div>
        <h1>Trending today</h1>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div>
      <h1>Select your car</h1>

      <ul>
        {carsList.map(car => (
          <li key={car.id}>
            <Link to={`/cars/${car.id}`} state={{ from: `/` }}>
              {`${car.make}${car.model}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

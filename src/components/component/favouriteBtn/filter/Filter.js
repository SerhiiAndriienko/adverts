import PropTypes from 'prop-types';
export function Filter({ carsList, filter, filterChange }) {
  const brandList = [];

  carsList.forEach(car => brandList.push(car.make));
  const uniqueBrands = [...new Set(brandList)];
  console.log(uniqueBrands);

  return (
    <>
      <div>
        <span>Filter: </span>
        <input></input>
        <ul>
          {uniqueBrands.map(brand => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
Filter.propTypes = {
  // filter: PropTypes.string.isRequired,
  // filterChange: PropTypes.func.isRequired,
};

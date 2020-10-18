import React from 'react';
import { useContext } from 'react';
import { PlaceContext } from '../context';
import Title from './Title';
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function PlaceFilter({ places }) {
  const context = useContext(PlaceContext);
  const {
    handleChange,
    type,
    bedrooms,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = context;
  // get unique types
  let types = getUnique(places, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(places, 'bedrooms');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search places" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">property type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">bedrooms</label>
          <select
            name="bedrooms"
            id="bedrooms"
            value={bedrooms}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">sqft</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

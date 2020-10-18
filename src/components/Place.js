import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/prop0401.jpg';
import PropTypes from 'prop-types';

export default function Place({ place }) {
  const { name, slug, images, price } = place;

  return (
    <article className="place">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single place" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>to buy</p>
        </div>
        <Link to={`/places/${slug}`} className="btn-primary place-link">
          Features
        </Link>
      </div>
      <p className="place-info">{name}</p>
    </article>
  );
}

Place.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import PlaceContainer from '../components/PlaceContainer';

const places = () => {
  return (
    <>
      <Hero hero="placesHero">
        <Banner title="our places">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <PlaceContainer />
    </>
  );
};

export default places;

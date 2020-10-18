import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedPlaces from '../components/FeaturedPlaces';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Special places"
          subtitle="Find your perfect place with its own unique style and charm"
        >
          <Link to="/places" className="btn-primary">
            our places
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedPlaces />
    </>
  );
}

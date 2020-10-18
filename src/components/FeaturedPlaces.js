import React, { Component } from 'react';
import { PlaceContext } from '../context';
import Loading from './Loading';
import Place from './Place';
import Title from './Title';

export default class FeaturedPlaces extends Component {
  static contextType = PlaceContext;
  render() {
    let { loading, featuredplaces: places } = this.context;
    places = places.map((place) => {
      return <Place key={place.id} place={place} />;
    });

    return (
      <section className="featured-places">
        <Title title="featured places" />
        <div className="featured-places-center">
          {loading ? <Loading /> : places}
        </div>
      </section>
    );
  }
}

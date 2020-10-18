import React from 'react';
import Place from './Place';

export default function PlaceList({ places }) {
  if (places.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no places matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="placeslist">
      <div className="placeslist-center">
        {places.map((item) => {
          return <Place key={item.id} place={item} />;
        })}
      </div>
    </section>
  );
}

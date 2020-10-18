import React from 'react';
import PlaceFilter from './PlaceFilter';
import PlaceList from './PlaceList';
import { withPlaceConsumer } from '../context';
import Loading from './Loading';

function PlaceContainer({ context }) {
  const { loading, sortedplaces, places } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PlaceFilter places={places} />
      <PlaceList places={sortedplaces} />
    </>
  );
}

export default withPlaceConsumer(PlaceContainer);
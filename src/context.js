import React, { Component } from 'react';
import Client from './Contentful';

const PlaceContext = React.createContext();

class PlaceProvider extends Component {
  state = {
    places: [],
    sortedplaces: [],
    featuredplaces: [],
    loading: true,
    type: 'all',
    bedrooms: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
  };
  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'beachResortRoom',
        order: '-fields.price',
      });
      let places = this.formatData(response.items);
      let featuredplaces = places.filter((place) => place.featured === true);
      let maxPrice = Math.max(...places.map((item) => item.price));
      let maxSize = Math.max(...places.map((item) => item.size));

      this.setState({
        places,
        featuredplaces,
        sortedplaces: places,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let place = { ...item.fields, images, id };
      return place;
    });
    return tempItems;
  }

  getplace = (slug) => {
    let tempplaces = [...this.state.places];
    const place = tempplaces.find((place) => place.slug === slug);
    return place;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterplaces
    );
  };
  filterplaces = () => {
    let {
      places,
      type,
      bedrooms,
      price,
      minSize,
      maxSize,
    } = this.state;
    // all the places
    let tempplaces = [...places];
    // transform value
    bedrooms = parseInt(bedrooms);
    price = parseInt(price);

    // filter by type
    if (type !== 'all') {
      tempplaces = tempplaces.filter((place) => place.type === type);
    }

    // filter by bedrooms
    if (bedrooms !== 1) {
      tempplaces = tempplaces.filter((place) => place.bedrooms >= bedrooms);
    }

    // filter by price
    tempplaces = tempplaces.filter((place) => place.price <= price);

    // filter by size
    tempplaces = tempplaces.filter(
      (place) => place.size >= minSize && place.size <= maxSize
    );

    // change state
    this.setState({
      sortedplaces: tempplaces,
    });
  };

  render() {
    return (
      <PlaceContext.Provider
        value={{
          ...this.state,
          getplace: this.getplace,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceConsumer = PlaceContext.Consumer;

export function withPlaceConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PlaceConsumer>
        {(value) => <Component {...props} context={value} />}
      </PlaceConsumer>
    );
  };
}

export { PlaceProvider, PlaceConsumer, PlaceContext };

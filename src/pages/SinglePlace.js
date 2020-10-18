import React, { Component } from 'react';
import defaultBcg from '../images/prop0304.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SinglePlace extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = PlaceContext;
  // componentDidMount() {}
  render() {
    const { getplace } = this.context;
    const place = getplace(this.state.slug);
    if (!place) {
      return (
        <div className="error">
          <h3>no such place could be found...</h3>
          <Link to="/places" className="btn-primary">
            back to places
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      bedrooms,
      size,
      price,
      extras,
      images,
    } = place;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} place`}>
            <Link to="/places" className="btn-primary">
              back to places
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-place">
          <div className="single-place-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-place-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                bedrooms :{' '}
                {bedrooms}
              </h6>
            </article>
          </div>
        </section>
        <section className="place-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

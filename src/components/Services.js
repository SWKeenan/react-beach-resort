import React, { Component } from 'react';
import { FaHome, FaCaravan, FaGlobeAmericas, FaChild } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHome />,
        title: 'Unique Homes',
        info:
          'From windmills, bunkers, treehouses, churches, lighthouses, caves and many more strange and wonderful places.',
      },
      {
        icon: <FaCaravan />,
        title: 'Endless Options',
        info:
          'Are you looking for a beautiful home in the woods? Or maybe a quaint little village. The choices are endless.',
      },
      {
        icon: <FaGlobeAmericas />,
        title: 'Around the World',
        info:
          'Our places are from all over the globe! Maybe you want a new exciting location or find somewhere close to home.',
      },
      {
        icon: <FaChild />,
        title: 'Special People',
        info:
          'Our homes fit your unique and wonderful tastes and can accomodate any kind of place you have in mind.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

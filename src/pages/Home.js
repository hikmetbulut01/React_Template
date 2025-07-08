import React from 'react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      content: 'This is an example card.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Here is the second card content.',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'Third card content is here.',
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p className="welcome-text">This is the home page of the React Template project.</p>
    </div>
  );
};

export default Home; 
// src/pages/Home.js
import React from 'react';
import WebtoonCard from '../components/WebtoonCard';
import Voting from '../components/Voting';

// Mock data for webtoons with actual image URLs
const webtoons = [
    {
        title: 'Tower of God',
        image: 'https://cdn.myanimelist.net/images/anime/1329/120046.jpg', // Tower of God image
        description: 'A young man finds himself in a mysterious tower...',
    },
    {
        title: 'The God of High School',
        image: 'https://cdn.myanimelist.net/images/anime/1171/117568.jpg', // The God of High School image
        description: 'High school students fight for the ultimate prize...',
    },
    {
        title: 'Noblesse',
        image: 'https://cdn.myanimelist.net/images/anime/1180/120218.jpg', // Noblesse image
        description: 'A powerful noble awakens after 820 years...',
    },
    {
        title: 'God of Martial Arts',
        image: 'https://i.pinimg.com/originals/68/bb/bf/68bbbf2d447518d29b7bc53b9dbeae5a.jpg', // God of Martial Arts image
        description: 'A tale of martial arts, revenge, and destiny...',
    },
    {
        title: 'Solo Leveling',
        image: 'https://cdn.myanimelist.net/images/anime/1151/120434.jpg', // Solo Leveling image
        description: 'A weak hunter gets a second chance to become the strongest...',
    },
];

const Home = () => {
    return (
        <div className="home">
            <h2>Top 5 Fantasy Webtoons</h2>
            <div className="webtoon-list">
                {webtoons.map((webtoon, index) => (
                    <WebtoonCard 
                        key={index} 
                        title={webtoon.title} 
                        image={webtoon.image} 
                        description={webtoon.description} 
                    />
                ))}
            </div>
            <Voting />
        </div>
    );
};

export default Home;


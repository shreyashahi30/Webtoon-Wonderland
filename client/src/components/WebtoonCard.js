// src/components/WebtoonCard.js
import React from 'react';

const WebtoonCard = ({ title, image, description }) => {
    return (
        <div className="webtoon-card">
            <img src={image} alt={`${title} cover`} className="webtoon-image" />
            <h3 className="webtoon-title">{title}</h3>
            <p className="webtoon-description">{description}</p>
        </div>
    );
};

export default WebtoonCard;


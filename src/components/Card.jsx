import React from 'react';

const Card = ({ title, imgUrl, children }) => {
    return (
        <div className="card-container">
            {imgUrl && (
                <img src={imgUrl} alt="Feature icon" />
            )}
            {title && (
                <h1>{title}</h1>
            )}
            {children}
        </div>
    );
}

export default Card;

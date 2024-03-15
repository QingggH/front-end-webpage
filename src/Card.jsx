import React from 'react';

function Card({
    className, title, pic,
    alt, text }) {
    return (
        <div className={className}>
            <h3 className={`${className}__title`}>{title}</h3>
            <img className={`${className}__pic`} alt={alt} src={pic} />
            <p className={`${className}__text`}>{text}</p>
        </div>
    );
}
export default Card;
import React from 'react';
import Card from './Card';
import './AboutCases.css';

function AboutCases() {

    const cardsData = [
        {
            title: 'livingroom',
            pic: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
            alt: 'modern-style living room',
            text: 'This is a modern-style living room.',
        },
        {
            title: 'kitchen',
            pic: 'https://images.unsplash.com/photo-1556595101-15dc5f6431e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
            alt: 'modern kitchen',
            text: 'This is a modern-style kitchen.',
        },
        {
            title: 'working area',
            pic: 'https://images.unsplash.com/photo-1597218868981-1b68e15f0065?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
            alt: 'rustic-style working area',
            text: 'This is a rustic-style working area.',
        },
        {
            title: 'rest area',
            pic: 'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'rustic-style rest area',
            text: 'This is a rustic-style rest area.',
        },
        {
            title: 'porch',
            pic: 'https://images.unsplash.com/photo-1541872404045-ff0257272ad5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'retro-style living room',
            text: 'This is a retro-style porch.',
        },
        {
            title: 'livingroom',
            pic: 'https://images.unsplash.com/photo-1595822670840-729a4932da87?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'rustic-style livingroom',
            text: 'This is a rustic-style livingroom.',
        },
    ];




    return (
        <div className="card-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    className="case_card"
                    title={card.title}
                    pic={card.pic}
                    alt={card.alt}
                    text={card.text}
                />
            ))
            }
        </div >
    );
}

export default AboutCases;
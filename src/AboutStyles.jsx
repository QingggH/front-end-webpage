import React, { useState } from 'react';
import './AboutStyles.css';
function AboutStyles() {
    const images = [

        'https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGludGVyaW9yfGVufDB8fDB8fHww',

        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',

        'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel-info">
                <h1>Our Style</h1>
                <p>In our design philosophy, we prioritize the seamless integration of form and function,<br /> creating spaces that not only captivate aesthetically but also serve the practical needs of inhabitants. <br />Each project is a meticulous exploration of balance, where vintage elements converse with modern accents, <br />and textures harmonize with carefully chosen color schemes. <br />Our attention to detail extends from the selection of bespoke furniture to the strategic placement of lighting, <br />ensuring that every aspect contributes to the overall narrative of the space.<br /> By embracing a holistic approach, we aim to craft environments that resonate with both a sense of nostalgia and a forward-thinking aesthetic.  </p>

            </div>
            <div className="carousel-container">
                <button className="carousel-button" onClick={prevImage}>&lt;</button>
                <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
                <button className="carousel-button" onClick={nextImage}>&gt;</button>
            </div>
        </div>
    );



}


export default AboutStyles;

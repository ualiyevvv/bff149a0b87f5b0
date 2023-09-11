import React, {FC, useState} from 'react';

interface CarouselProps {
    // cards?: [index: number];
}

export const Carousel: FC<CarouselProps> = (props) => {
    const [startIndex, setStartIndex] = useState(0);

    const cards = [1,2,3,4,5,6,7];

    const previousSlide = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? cards.length - 4 : prevIndex - 1));
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex === cards.length - 4 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={previousSlide}>Previous</button>
            <div className="card-container">
                {cards.slice(startIndex, startIndex + 4).map((card, index) => (
                    <div key={index} className="card">
                        {/* Render card content here */}
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextSlide}>Next</button>
        </div>
    );
};
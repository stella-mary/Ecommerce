import React, { useState } from 'react';

const CircleSelector = () => {
    const [selectedCircle, setSelectedCircle] = useState(null);

    const handleCircleClick = (circle) => {
        setSelectedCircle(circle);
    };

    return (
        <div>
            <div
                className={`circle ${selectedCircle === 'circle' ? 'selected' : ''}`}
                onClick={() => handleCircleClick('circle')}
            />
            <span className="space1" />
            <div
                className={`circle1 ${selectedCircle === 'circle1' ? 'selected' : ''}`}
                onClick={() => handleCircleClick('circle1')}
            />
            <span className="space1" />
            <div
                className={`circle2 ${selectedCircle === 'circle2' ? 'selected' : ''}`}
                onClick={() => handleCircleClick('circle2')}
            />
            <span className="space1" />
            <div
                className={`circle3 ${selectedCircle === 'circle3' ? 'selected' : ''}`}
                onClick={() => handleCircleClick('circle3')}
            />
            <span className="space1" />
            <div
                className={`circle4 ${selectedCircle === 'circle4' ? 'selected' : ''}`}
                onClick={() => handleCircleClick('circle4')}
            />
        </div>
    );
};

export default CircleSelector;

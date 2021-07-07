import React from 'react';
import './lectureCard.css';

function LectureCard({lectureName, lectureStudent, notice}) {
    return (
        <div className="lectureCard__container">
            <h3>{lectureName}</h3>
            <h3>{lectureStudent}</h3>
            <h3>{notice}</h3>
        </div>
    )
}

export default LectureCard

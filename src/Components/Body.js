import React from 'react';
import Card from './Card';
import './body.css';
import Card2 from './Card2';

function Body() {
    return (
        <div className="body">
            <div className="body__container">
                <Card title="인기 강좌"/>
                <Card title="인기 강사"/>
                <Card title="최근 수강평"/>
                <Card2 />
            </div>
        </div>
    )
}

export default Body

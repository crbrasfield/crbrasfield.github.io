import React from 'react';
import './styles.css';

export default ({
    children,
    title,
    link,
    company,
    startDate,
    endDate
}) => (
    <div className="card">
        <h3>
            { title } - <a target="_blank" href={`${link}`}>{ company }</a>
        </h3>
        <h4>
            {`${startDate} - ${endDate}`}
        </h4>
        <div>
            { children }
        </div>
    </div>
)
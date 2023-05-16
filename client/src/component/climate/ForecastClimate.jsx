import React, { useState } from 'react';

const ForecastClimate = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <h1 className="title">Forecast Climate</h1>
            <div className="tabs is-boxed">
                <ul>
                    <li className={activeTab === 0 ? 'is-active' : ''}>
                        <a onClick={() => handleTabClick(0)}>
                            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                            <span>Hourly</span>
                        </a>
                    </li>
                    <li className={activeTab === 1 ? 'is-active' : ''}>
                        <a onClick={() => handleTabClick(1)}>
                            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                            <span>5 Days</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                {activeTab === 0 && <div>Content for Hourly</div>}
                {activeTab === 1 && <div>Content for 5 Hours</div>}

            </div>
        </div>
    );
};

export default ForecastClimate;

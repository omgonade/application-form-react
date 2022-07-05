import React from 'react';
import '../css/headerComponent.css';

const date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
class Header extends React.Component {
    render() {
        return (
            <header className="hed1">
                <h1>Application Form</h1>
                <span id="current_date" className="date">
                    {`${day} / ${month} / ${year}`}
                </span>
            </header>
        );
    };
};

export default Header;
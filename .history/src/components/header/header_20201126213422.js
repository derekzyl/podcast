import React from 'react'
import './header.css'
import atr from '../../images/atr.png';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src={atr}
                    alt="Logo"
                />

            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                    Home
                </div>
                <div className="header_option">
                    Radio
                </div>
                <div className="header_option">
                    Podcasts
                </div>
                <div className="header_option">
                    Videos
                </div>
                <div className="header_option">
                    Latest News
                </div>
                <div className="header_option">
                    Contact Us
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <div className="header_input">
                        <input type="text" name="" id="" placeholder="Search" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
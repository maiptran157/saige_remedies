import React, { Component } from 'react';
import InputBar from '../header/input_bar';
import './home_page.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home-container">
                <InputBar/>
            </div>
        )
    }
}

export default HomePage;
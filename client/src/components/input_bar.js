import React, { Component } from 'react';
import './input_bar.css';

class InputBar extends Component {
    render() {
        return (
          <div className="search-form">
            <input className="search-bar" placeholder="Search Condition"type="text"/>
          </div>
        )
    }
}

export default InputBar;
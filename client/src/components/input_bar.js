import React, { Component } from 'react';
import './input_bar.css';

class InputBar extends Component {
    render() {
        return (
          <div className="form">
            <input className="search-bar" type="text"/>
          </div>
        )
    }
}

export default InputBar;
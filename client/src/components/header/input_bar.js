import React, { Component } from 'react';
import './input_bar.css';
import dummyData from '../../dummy_data/data_for_condition_detail'

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: ''
    }
  };

  handleValueChange = (event) => {
    console.log(this.state);
    this.setState({
      condition: event.target.value
    });
  }

  render() {
    const option = dummyData.map((data, index) => {
      return <option key={data._id} value={data.name}></option>
    })
    return (
      <div className="search-form">        
        <input list="browsers" className="search-bar" placeholder="Search Condition" type="text" onChange={this.handleValuechange} />
        <datalist id="browsers">
          {option}
        </datalist>
      </div>
    )
  }
}

export default InputBar;
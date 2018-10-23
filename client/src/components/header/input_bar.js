import React, { Component } from 'react';
import './input_bar.css';
import searchOption from './input_bar_predefined_options';
import { connect } from 'react-redux';
import { userSearchTerm } from '../../actions/index';
import { checkUserSearch } from '../../actions/index';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: '',
    };
  }
  handleValueChange = (event) => {
    this.setState({
      condition: event.target.value,
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.userSearchTerm(this.state.condition);
    setTimeout(() => {
      this.props.push(`/conditions/${this.props.categoryId}/${this.props.symptomId}`);
    }, 300);

    this.props.checkUserSearch(this.state.userSubmit);
  }

  render() {
    const option = searchOption.sort().map((data, index) => {
      return <option key={index} value={data}></option>
    });
    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <input list="browsers" className="search-bar" placeholder="Search Condition" type="text" onChange={this.handleValueChange} />
        <datalist id="browsers">
          {option}
        </datalist>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    symptomId: state.search.symptomId,
    categoryId: state.search.categoryId,
  }
}

export default connect(mapStateToProps, {
  userSearchTerm: userSearchTerm,
  checkUserSearch: checkUserSearch,
})(InputBar);
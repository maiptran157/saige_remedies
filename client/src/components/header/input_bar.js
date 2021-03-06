import React, { Component } from 'react';
import './input_bar.css';
import searchOption from './input_bar_predefined_options';
import { connect } from 'react-redux';
import { userSearchTerm } from '../../actions/index';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: '',
      match: false,
    };
  }

  async componentDidMount() {
    await this.checkPage();
  }

  handleValueChange = (event) => {
    this.setState({
      condition: event.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.userSearchTerm(this.state.condition);
    setTimeout(() => {
      this.props.push(`/conditions/${this.props.categoryId}/${this.props.symptomId}`);
    }, 300);
  }
  checkPage() {
    if (this.props.match === '/meet-the-team' || this.props.match === '/about-saige' || this.props.match === '/conditions/undefined/undefined') {
      this.setState({
        match: true,
      })
    }
  }

  render() {
    const option = searchOption.sort().map((data, index) => {
      return <option key={index} value={data}></option>
    });

    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <input list="browsers" className={this.state.match ? 'display-none' : 'search-bar'} placeholder="Search Condition" type="text" onChange={this.handleValueChange} />
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
})(InputBar);
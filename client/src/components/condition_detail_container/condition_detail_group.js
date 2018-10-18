import React, { Component, Fragment } from 'react';
import './condition_detail_container.css';
import { renderInput } from '../helper';

const style = {
    fontWeight: 'bold'
}

class ConditionDetailGroup extends Component {
    state = {
        showLess: true,
    }
    descriptionPresent() {
        const { description, caution, self_help } = this.props;
        console.log(description);
        if (self_help === "" && caution === "") {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                </p>
            )
        } else if (self_help === "") {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Caution:</span> {caution}
                </p>
            )
        } else if (caution === "") {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Self-help:</span> {self_help}
                </p>
            )
        } else {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Self-help:</span> {self_help}
                    <br />
                    <span style={style}>Caution:</span> {caution}
                </p>
            )
        }
    }
    toggleMore = (event) => {
        event.preventDefault();
        this.setState({
            showLess: !this.state.showLess,
        });
    }
    render() {
        const { description } = this.props;
        if (!description) {
            return null;
        };
        const shortenedDescription = description.slice(0, 200) + '...';
        console.log(this.state.showLess);
        return (
            <div className="condition-detail-group">
                <div className="condition-detail-header">

                    {this.props.name}

                </div>
                <div className="condition-detail-description">
                    {this.state.showLess ? <p className="condition-detail-paragraph">{shortenedDescription}<a onClick={this.toggleMore} href="">Show more</a></p> : <p>{this.descriptionPresent()}</p>}
                </div>
            </div>
        )
    }
}

export default ConditionDetailGroup;


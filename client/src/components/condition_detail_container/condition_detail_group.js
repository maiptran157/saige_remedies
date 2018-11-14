import React, { Component } from 'react';
import './condition_detail_container.css';

const style = {
    fontWeight: 'bold'
}

class ConditionDetailGroup extends Component {
    state = {
        showLess: true,
    }

    
    descriptionPresent() {
        const { description, caution, self_help } = this.props;
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
                    <hr/>
                    <span style={style}>Caution:</span> {caution}
                </p>
            )
        } else if (caution === "") {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                    <br />
                    <hr/>
                    <span style={style}>Self-help:</span> {self_help}
                </p>
            )
        } else {
            return (
                <p className="condition-detail-paragraph">
                    {description}
                    <br />
                    <hr/>
                    <span style={style}>Self-help:</span> {self_help}
                    <br />
                    <hr/>
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
        const shortenedDescription = description.split(' ').slice(0, 13).join(' ') + '...';
 
        return (
            <div className="condition-detail-group">
                <div className="condition-detail-header">
                    {this.props.name}
                </div>
                <div className= { this.state.showLess ? "condition-detail-description" : "show-more-description" } >
                    {this.state.showLess ? <p className="condition-detail-paragraph">{shortenedDescription} <a className="show-more-btn" onClick={this.toggleMore} href="">Show more</a></p> : <p>{this.descriptionPresent()}</p>}

                </div>
            </div>
        )
    }
}

export default ConditionDetailGroup;
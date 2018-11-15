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
                    {this.state.showLess ?
                        <div>
                            <p className="condition-detail-paragraph">{shortenedDescription}
                              <div className="center-show-more">
                                <a className="" onClick={this.toggleMore} href="">Read More</a>
                              </div>  
                            </p> 
                        </div> :  
                        <div>
                            <p>{this.descriptionPresent()}</p>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default ConditionDetailGroup;
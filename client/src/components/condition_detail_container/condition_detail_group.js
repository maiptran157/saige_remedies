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
                <div className="condition-detail-paragraph">
                    {description}
                </div>
            )
        } else if (self_help === "") {
            return (
                <div className="condition-detail-paragraph">
                    {description}
                    <br />
                    <hr/>
                    <span style={style}>Caution:</span> {caution}
                </div>
            )
        } else if (caution === "") {
            return (
                <div className="condition-detail-paragraph">
                    {description}
                    <br />
                    <hr/>
                    <span style={style}>Self-help:</span> {self_help}
                </div>
            )
        } else {
            return (
                <div className="condition-detail-paragraph">
                    {description}
                    <br />
                    <hr/>
                    <span style={style}>Self-help:</span> {self_help}
                    <br />
                    <hr/>
                    <span style={style}>Caution:</span> {caution}
                </div>
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
                            <div className="condition-detail-paragraph">{shortenedDescription}
                              <div className="center-show-more">
                                <a className="" onClick={this.toggleMore} href="">Read More</a>
                              </div>  
                            </div> 
                        </div> :  
                        <div>
                            <div>{this.descriptionPresent()}</div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default ConditionDetailGroup;
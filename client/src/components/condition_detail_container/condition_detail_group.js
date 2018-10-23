import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './condition_detail_container.css';

const style = {
    fontWeight: 'bold'
}

class ConditionDetailGroup extends Component {
    state = {
        showLess: true,
        userSubmit: this.props.userSubmit,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Prev Props:", prevProps);
        console.log("Prev State:", prevState);
        console.log("Snap Shot:", snapshot);
    }
    descriptionPresent() {
        const { description, caution, self_help } = this.props;
        // console.log(description);
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
        console.log("CURRENT PATH:", this.props);

        const { description } = this.props;
        if (!description) {
            return null;
        };
        const shortenedDescription = description.slice(0, 140) + '...';

        return (
            <div className="condition-detail-group">
                <div className="condition-detail-header">
                    {this.props.name}
                </div>
                <div className="condition-detail-description">
                    {this.state.showLess ? <p className="condition-detail-paragraph">{shortenedDescription} <a onClick={this.toggleMore} href="">Show more</a></p> : <p>{this.descriptionPresent()}</p>}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userSubmit: state.userSearch.checkUserSearch
    }
}

export default connect(mapStateToProps, {

})(ConditionDetailGroup);


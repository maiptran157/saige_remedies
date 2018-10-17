import React, { Component, Fragment }from 'react';
import './condition_detail_container.css';
import { renderInput } from '../helper';
// import thumbsUp from '../images/symbol-thumbs-up.jpg';

const style = {
    fontWeight: 'bold'
}

// const thumbsUpBackground = {
//     backgroundImage: `url(${thumbsUp})`
// }

class ConditionDetailGroup extends Component  {
    state = {
        shown: false,
    }

    toggleShowMore() {
        this.setState({
            shown : !this.state.shown,
        });
    }
    slicedDescription() {
        if ( !this.props.description) {
            return null;
        }
        return <Fragment>{this.props.description.slice(0, 170) + '....'}</Fragment>
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
    render() {
        return (
            <div className="condition-detail-group">
                <div className="condition-detail-header">
                    <div className="condition-detail-name">
                        <div>{this.props.name}</div>
                    </div>
                    {/* <div className="ratingSymbol" style={thumbsUpBackground}></div> */}
                </div>
                <div className="condition-detail-description">
                    {this.slicedDescription()}
                    <a href="">more</a>
                </div>
            </div>
        )
    }
}

export default ConditionDetailGroup;


// if (self_help === "" && caution === "") {
//     return (
//         <p className="condition-detail-paragraph">
//             {description}
//         </p>
//     )
// } else if (self_help === "") {
//     return (
//         <p className="condition-detail-paragraph">
//             {description}
//             <br />
//             <span style={style}>Caution:</span> {caution}
//         </p>
//     )
// } else if (caution === "") {
//     return (
//         <p className="condition-detail-paragraph">
//             {description}
//             <br />
//             <span style={style}>Self-help:</span> {self_help}
//         </p>
//     )
// } else {
//     return (
//         <p className="condition-detail-paragraph">
//             {description}
//             <br />
//             <span style={style}>Self-help:</span> {self_help}
//             <br />
//             <span style={style}>Caution:</span> {caution}
//         </p>
//     )
// }
// }
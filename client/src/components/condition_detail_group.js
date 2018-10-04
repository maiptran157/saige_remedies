import React from 'react';
import './condition_detail_container.css';
// import thumbsUp from '../images/symbol-thumbs-up.jpg';

const style = {
    fontWeight: 'bold'
}

// const thumbsUpBackground = {
//     backgroundImage: `url(${thumbsUp})`
// }

const ConditionDetailGroup = (props) => {
    // console.log("props of ConditionDetailGroup:", props);
    const { name, description, self_help, caution } = props;
    const description_presentation = () => {
        if (typeof self_help === "undefined" && typeof caution === "undefined") {
            return (
                <p className="detail-paragraph">
                    {description}
                </p>
            )
        } else if (typeof self_help === "undefined") {
            return (
                <p className="detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Caution:</span> {caution}
                </p>
            )
        } else if (typeof caution === "undefined") {
            return (
                <p className="detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Self-help:</span> {self_help}
                </p>
            )
        } else {
            return (
                <p className="detail-paragraph">
                    {description}
                    <br />
                    <span style={style}>Self-help:</span> {self_help}
                    <br />
                    <span style={style}>Caution:</span> {caution}
                </p>
            )
        }
    }
    const description_detail = description_presentation();
    return (
        <div className="condition-detail-group">
            <div className="condition-detail-header">
                <h3 className="condition-detail-name">{name}</h3>
                {/* <div className="ratingSymbol" style={thumbsUpBackground}></div> */}
            </div>
            <div className="condition-detail-description">
                {description_detail}
            </div>
        </div>
    )
}

export default ConditionDetailGroup;

import React from 'react';
import './remedy_detail_container.css';

const style = {
    fontWeight: "bold"
}

const RemedyDetailGroup = (props) => {
    const { name, remedyDesc, note, caution } = props;
    const displayRemedyDesc = () => {
        if (note === undefined && caution === undefined) {
            return (
                <p className="detail-paragraph">
                    {remedyDesc}
                </p>
            )
        } else if (note === undefined) {
            return (
                <p className="detail-paragraph">
                    {remedyDesc}
                    <br />
                    <span style={style}>Caution:</span>{caution}
                </p>
            )
        } else if (caution === undefined) {
            return (
                <p className="detail-paragraph">
                    {remedyDesc}
                    <br />
                    <span style={style}>Note:</span>{note}
                </p>
            )
        } else {
            return (
                <p className="detail-paragraph">
                    {remedyDesc}
                    <br />
                    <span style={style}>Note:</span>{note}
                    <br />
                    <span style={style}>Caution:</span>{caution}
                </p>
            )
        }
    }
    const fullDesc = displayRemedyDesc();
    return (
        <div className="remedy-detail-group">
            <div className="remedy-detail-header">
                <div>Ingredient: <span>{name}</span></div>
            </div>
            <div className="remedy-detail-description">
                {fullDesc}
            </div>
        </div>
    )
}

export default RemedyDetailGroup;

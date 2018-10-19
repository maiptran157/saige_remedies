import React from 'react';
import './remedy_detail_container.css';

const style = {
    fontWeight: "bold"
}

const liStyle = {
    listStyleType: 'none'
}

const RemedyDetailGroup = (props) => {
    const { name, remedyDesc, note, caution } = props;
    const displayRemedyDescSteps = () => {
        const remedyDescSteps = remedyDesc.split(". ");
        if (remedyDescSteps.length === 1) {
            return remedyDesc;
        }
        let step = 1;
        for (let i = 0; i < remedyDescSteps.length; i++) {
            remedyDescSteps[i] = `${step}. ${remedyDescSteps[i]}`
            step++
        }
        return remedyDescSteps.map((remedy, index) => {
            return <li style={liStyle} key={index}>{remedy}</li>
        })
    }
    const displayRemedyDesc = () => {
        if (note === undefined && caution === undefined) {
            return (
                <p className="detail-paragraph">
                    {displayRemedyDescSteps()}
                </p>
            )
        } else if (note === undefined) {
            return (
                <p className="detail-paragraph">
                    {displayRemedyDescSteps()}
                    <br />
                    <span style={style}>Caution:</span>{caution}
                </p>
            )
        } else if (caution === undefined) {
            return (
                <p className="detail-paragraph">
                    {displayRemedyDescSteps()}
                    <br />
                    <span style={style}>Note:</span>{note}
                </p>
            )
        } else {
            return (
                <p className="detail-paragraph">
                    {displayRemedyDescSteps()}
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
                {name}
            </div>
            <div className="remedy-detail-description">
                {fullDesc}
            </div>
        </div>
    )
}

export default RemedyDetailGroup;

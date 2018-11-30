import React, { Component } from 'react';
import './remedy_detail_container.css';
import Popup from 'reactjs-popup';
import techniques from './techniques';

const style = {
    fontWeight: 'bold'
}

const liStyle = {
    listStyleType: 'none'
}

class RemedyDetailGroup extends Component {
    formatSteps = (label, value, description) => {
        if (!value) {
            return label;
        }
        return (<span>
            {label.split(value)
                .reduce((prev, current, i) => {
                    if (!i) {
                        return [current];
                    }
                    return prev.concat(<Popup key={i} trigger={<span className="technique">{value}</span>} position="right center">
                        <div>{description}</div>
                    </Popup>, current);
                }, [])
            }
        </span>);
    };

    render() {
        const { name, remedyDesc, note, caution } = this.props;
        const displayRemedyDescSteps = () => {
            const remedyDescSteps = remedyDesc.split(". ");
            for (let i = 0; i < remedyDescSteps.length; i++) {
                // for (let key in techniques) {
                //     if (remedyDescSteps[i].includes(key)) {
                //         remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], key, techniques[key])
                //     }
                // }
                if (remedyDescSteps[i].includes('infusion')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'infusion', techniques['infusion'])
                } else if (remedyDescSteps[i].includes('decoction')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'decoction', techniques['decoction'])
                } else if (remedyDescSteps[i].includes('tincture')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'tincture', techniques['tincture'])
                } else if (remedyDescSteps[i].includes('powder')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'powder', techniques['powder'])
                } else if (remedyDescSteps[i].includes('capsule')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'capsule', techniques['capsule'])
                } else if (remedyDescSteps[i].includes('syrup')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'syrup', techniques['syrup'])
                } else if (remedyDescSteps[i].includes('infused oil')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'infused oil', techniques['infused oil'])
                } else if (remedyDescSteps[i].includes('essential oil')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'essential oil', techniques['essential oil'])
                } else if (remedyDescSteps[i].includes('ointment')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'ointment', techniques['ointment'])
                } else if (remedyDescSteps[i].includes('cream')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'cream', techniques['cream'])
                } else if (remedyDescSteps[i].includes('lotion')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'lotion', techniques['lotion'])
                } else if (remedyDescSteps[i].includes('poultice')) {
                    remedyDescSteps[i] = this.formatSteps(remedyDescSteps[i], 'poultice', techniques['poultice'])
                }
            }
            if (remedyDescSteps.length === 1) {
                return remedyDescSteps[0];
            }
            return remedyDescSteps.map((remedy, index) => {
                return <li style={liStyle} key={index}> {index + 1}. {remedy}</li>
            })
        }
        const displayRemedyDesc = () => {
            if (note === undefined && caution === undefined) {
                return (
                    <ul className="detail-paragraph">
                        {displayRemedyDescSteps()}
                    </ul>
                )
            } else if (note === undefined) {
                return (
                    <ul className="detail-paragraph">
                        {displayRemedyDescSteps()}
                        <br />
                        <span style={style}>Caution:</span>{caution}
                    </ul>
                )
            } else if (caution === undefined) {
                return (
                    <ul className="detail-paragraph">
                        {displayRemedyDescSteps()}
                        <br />
                        <span style={style}>Note:</span>{note}
                    </ul>
                )
            } else {
                return (
                    <ul className="detail-paragraph">
                        {displayRemedyDescSteps()}
                        <br />
                        <span style={style}>Note:</span>{note}
                        <br />
                        <span style={style}>Caution:</span>{caution}
                    </ul>
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
}

export default RemedyDetailGroup;

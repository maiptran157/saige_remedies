import './footer.scss';
import React, { Component } from 'react';
import DisclaimerInfoModal from '../modal/disclaimer_info_modal';

const textStyle = {
    textDecoration: 'none'
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    render() {
        console.log("Footer state:", this.state);
        return <div className="footer">
            <hr />
            <div>
                <div className="disclaimer-tag" style={textStyle} onClick={() => this.setState({ showModal: true })}>Disclaimer</div>
                <DisclaimerInfoModal openModal={this.state.showModal} />
            </div>
        </div>
    }
}

export default Footer;
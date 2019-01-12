import './footer.scss';
import React, { Component } from 'react';
import DisclaimerInfoModal from '../modal/disclaimer_info_modal';

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
            <ul>
                <li className="disclaimer-tag" onClick={() => this.setState({ showModal: true })}>Disclaimer</li>
                <DisclaimerInfoModal openModal={this.state.showModal} />
            </ul>
        </div>
    }
}

export default Footer;
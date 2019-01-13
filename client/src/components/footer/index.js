import './footer.scss';
import React, { Component, Fragment } from 'react';
import DisclaimerInfoModal from '../modal/disclaimer_info_modal';

const textStyle = {
    textDecoration: 'none'
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            // modalStatus: false,
        }
    }

    openModal = () => this.setState({ showModal: true });
    closeModal = () => this.setState({ showModal: false });

    render() {
        return <Fragment>
            <div className="footer">
                <div>
                    <div className="disclaimer-tag" style={textStyle} onClick={this.openModal}>Terms of Service</div>
                    <div>&copy; 2019 Saige Remedies. All rights reserved.</div>
                </div>
            </div>
            <DisclaimerInfoModal openModal={this.state.showModal} closeModal={this.closeModal} />
        </Fragment>
    }
}

export default Footer;
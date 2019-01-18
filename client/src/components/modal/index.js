import React, { Component } from 'react';
import './modal.css';
import axios from 'axios';
import config from '../../config/index';

class AgreementModal extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });

    componentDidMount() {
        this.modalCheck()
    }

    closeModal = () => {
        this.modalAgree();
        this.setState({
            isOpen: false
        });
    }

    async modalCheck() {
        const response = await axios.get(`${config.MODAL_CHECK}`);
        const userAgreementLocalStorage = localStorage.getItem('userAgreement');
        if (response.data.userAgreement || userAgreementLocalStorage) {
            this.closeModal();
        } else {
            this.openModal();
        }
    }

    async modalAgree() {
        const response = await axios.get(`${config.MODAL_AGREE}`);
        localStorage.setItem('userAgreement', response.data.userAgreement);
    }

    render() {
        if (this.state.isOpen) {
            return (
                <div onLoad={this.modalCheck} className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <h1>Disclaimer</h1>
                        <p>
                            Please read the following disclaimer carefully before using this website. See also the official Saige Remedies® Terms of Service, Privacy Policy, and Affiliate Disclosure. This disclaimer governs your use of SaigeRemedies.com. By using this app, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use SaigeRemedies.com or any affiliated application, properties, or companies. We reserve the right to modify these terms at any time. You should therefore check back periodically for changes. By using this app after we post any changes, you agree to accept those changes, whether or not you have reviewed them. All information and resources found on SaigeRemedies.com are based on the opinions of the author unless otherwise noted. All information is intended to motivate readers to make their own nutrition and health decisions after consulting with their health care provider. I am not a doctor, lawyer, psychiatrist, therapist, or your mother, and I don’t play one on the internet. The author of this site encourages you to consult a doctor before making any health changes, especially any changes related to a specific diagnosis or condition. No information on this site should be relied upon to determine diet, make a medical diagnosis, or determine treatment for a medical condition. The information on this website is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. NO information on this site should be used to diagnose, treat, prevent or cure any disease or condition. Full Disclaimer By reading this website, you acknowledge that you are responsible for your own health decisions. Do not take anything from any website, including this one, and try it without proper research and medical supervision.Any statements or claims about the possible health benefits conferred by any foods or supplements have not been evaluated by the Food & Drug Administration (FDA) and are not intended to diagnose, treat, prevent or cure any disease. SaigeRemedies.com reserves the right to remove, edit, move or close any content item for any reason, including, but not limited to, comments that are in violation of the laws and regulations formed pursuant to the Federal Food, Drug and Cosmetic Act. None of the posts and articles on SaigeRemedies.com may be re-printed without express written permission of the author. Saige Remedies will respond to written requests to re-print parts of posts and excerpts/quotes (10% or less) may be reprinted with attribution as long as all links are left intact.
                        </p>
                        <div className="agree-button">
                            <button onClick={this.closeModal}>Agree</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default AgreementModal;
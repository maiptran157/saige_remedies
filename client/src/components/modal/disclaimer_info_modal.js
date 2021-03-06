import React, { Component } from 'react';
import './modal.css';

const textStyle = {
    fontWeight: 'bold'
}

class DisclaimerInfoModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.openModal) {
            return (
                <div className="disclaimer-info-modal">
                    <div onClick={e => e.stopPropagation()} className="disclaimer-info-modal-content">
                        <h1>Terms of Service</h1>
                        <p>
                            <span style={textStyle}>Please read the following Terms of Service carefully before using this website.</span> <br /> This Terms of Service governs your use of SaigeRemedies.com. By using this app, you accept this Terms of Service in full. If you disagree with any part of this Terms of Service, do not use SaigeRemedies.com or any affiliated application, properties, or companies. We reserve the right to modify these terms at any time. You should therefore check back periodically for changes. By using this app after we post any changes, you agree to accept those changes, whether or not you have reviewed them. All information and resources found on SaigeRemedies.com are based on the opinions of the author unless otherwise noted. All information is intended to motivate readers to make their own nutrition and health decisions after consulting with their health care provider. I am not a doctor, lawyer, psychiatrist, therapist, or your mother, and I don’t play one on the internet. The author of this site encourages you to consult a doctor before making any health changes, especially any changes related to a specific diagnosis or condition. No information on this site should be relied upon to determine diet, make a medical diagnosis, or determine treatment for a medical condition. The information on this website is not intended to replace a one-on-one relationship with a qualified health care professional and is not intended as medical advice. NO information on this site should be used to diagnose, treat, prevent or cure any disease or condition. <br /> By reading this Terms of Service, you acknowledge that you are responsible for your own health decisions. Do not take anything from any website, including this one, and try it without proper research and medical supervision.Any statements or claims about the possible health benefits conferred by any foods or supplements have not been evaluated by the Food & Drug Administration (FDA) and are not intended to diagnose, treat, prevent or cure any disease. SaigeRemedies.com reserves the right to remove, edit, move or close any content item for any reason, including, but not limited to, comments that are in violation of the laws and regulations formed pursuant to the Federal Food, Drug and Cosmetic Act. None of the posts and articles on SaigeRemedies.com may be re-printed without express written permission of the author. Saige Remedies will respond to written requests to re-print parts of posts and excerpts/quotes (10% or less) may be reprinted with attribution as long as all links are left intact.
                        </p>
                        <div className="agree-button">
                            <button onClick={this.props.closeModal}>Agree</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default DisclaimerInfoModal;
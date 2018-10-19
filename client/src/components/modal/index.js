import React, { Component } from 'react';
import './modal.css';
import axios from 'axios';
import config from '../../config/index';

class AgreementModal extends Component {
    state = {
        isOpen: true
    };

    open = () => this.setState({isOpen: true});

    close = () => this.setState({isOpen: false});

    async modalCheck () {
        const response = await axios.get(`${config.MODAL_CHECK}`);
        console.log(response);
    }

    render() {
        if(this.state.isOpen){
            return (
                <div onLoad={this.modalCheck} className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        {/* <div onClick={this.close} className="basic-modal-close">X</div> */}
                        <h1>Disclaimer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat laboriosam quo? Ab officia tempore ratione id, modi possimus adipisci autem, inventore reiciendis facere nesciunt.</p>
                        <div className="agree-button">
                            <button onClick={this.close}>Agree</button>
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
import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    render() {
        console.log(this.props);
        if (this.props.isOpen === false) {
            return null;
        }
        return (   
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="backdrop"></div>
            </div>
            
        )
    }
}

export default Modal;
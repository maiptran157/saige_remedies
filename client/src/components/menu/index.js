import React, { Component } from 'react';

class DropDownMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true,}, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(event) {

        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false,}, () => {
                document.removeEventListener('click', this.closeMenu)
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}> 
                {/* this btn will be replaced with hamburger menu icon, v.2 will be an animated hamburger menu icon */}
                    Show Menu 
                </button>
                {
                    this.state.showMenu
                        ?  (
                            <div 
                            className="menu-container"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}>
                                {/* how am I linking the pages/where are they linking to or rare they built out? */}
                                <ul>
                                    <li><a href="sign_in">Sign In</a></li>
                                    <li>About</li>
                                    <li>Conditions List</li>
                                    <li>Favorites</li>
                                </ul>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default DropDownMenu;
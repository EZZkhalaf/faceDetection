

import React, { Component } from "react";
import ThemeChange from "../ThemeChange/ThemeChange";
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            modal: false
        };
    }

    // Toggle modal function
    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const { onRoutChange } = this.props; // Destructure props
        const { modal } = this.state; // Destructure state

        return (
            <nav className="flexy">
                <div className="themeButton">
                    <ThemeChange />
                </div>
                <button
                    onClick={() => onRoutChange('signin')}
                    className="button-28"
                    role="button">
                    Sign Out
                </button>

                <button
                    onClick={() => onRoutChange('register')}
                    className="button-28"
                    role="button">
                    Register
                </button>

                <button
                    onClick={this.toggleModal}
                    className="button-28"
                    role="button">
                    About this
                </button>

                {modal && (
                    <div>
                        <div className="modal-overlay"></div> {/* Modal overlay */}
                        <div className='modal-container'> {/* Modal content */}
                            <button className='modal-close-button' onClick={this.toggleModal}>X</button>
                            <h1>Hello</h1>
                            <div>
                                <p className='modal-description'>
                                    This project is a combination of many projects that I made in the past using HTML/CSS/JS/etc., 
                                    and I gathered all of them here. I don't know why, but I guess I was bored.
                                </p>
                                <p className='modal-description'>
                                    The project will have some changes in the future, of course.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
}

export default Navigation;

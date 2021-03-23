import React, { Component } from 'react';
import { Modal } from '../components/Modal';
import { BsPencilSquare } from "react-icons/bs"

export class ModalContainer extends Component {

    state = { isShown: false };

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
        });
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render() {
        const note = this.props.note;
        return (
            <React.Fragment>
                <BsPencilSquare className="editBtn modal-button"
                    onClick={this.showModal}
                />
                {this.state.isShown ? (
                    <Modal
                        note={note}
                        projects={this.props.projects}
                        categories={this.props.categories}
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}
export default ModalContainer;
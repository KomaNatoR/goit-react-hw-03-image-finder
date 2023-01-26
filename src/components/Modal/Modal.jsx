import React, { Component } from "react";
import { createPortal } from "react-dom";

import { Div } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeydown);
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeydown);
    };

    hendleKeydown=(e)=>{
        const { toggleModal } = this.props;
        if (e.code === 'Escape') toggleModal();
    };
    hendleBackdropClick = e => {
        const { toggleModal } = this.props;

        if (e.currentTarget === e.target) toggleModal();
    };


    render() {
        const { hendleBackdropClick } = this;
        const { modalPict } = this.props;

        return createPortal(
            <Div onClick={hendleBackdropClick}>
                <div>
                    <img src={modalPict.largeImageURL } alt={modalPict.tags} />
                </div>
            </Div>,
            modalRoot,
        );
    }
};


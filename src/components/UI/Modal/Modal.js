import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} /> 
}
const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            {props.children}
        </Card>
    )
}

const Modal = (props) => {
    const target = document.getElementById('root-overlay');
    return (
        ReactDOM.createPortal(
            <Fragment>
                <Backdrop onClick={props.onBackdropClick} />
                <ModalOverlay>{props.children}</ModalOverlay>
            </Fragment>,
            target
        )
        
    )
}

export default Modal;
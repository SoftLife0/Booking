import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CustomModal({ show, onHide, title, body, buttonText, onButtonClicked }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onButtonClicked}>{buttonText}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
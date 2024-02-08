import { ModalStyle, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, selectedPhoto }) => {
  const { largeImageURL, tags } = selectedPhoto;

  useEffect(() => {
    const onEscapeCloseModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeCloseModal);
    return () => {
      window.removeEventListener('keydown', onEscapeCloseModal);
    };
  }, [onClose]);

    const onClickOverlay = event => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;

import { FC } from 'react';
import Modal from 'react-modal';
import { ModalProps } from '../types/modalTypes';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Generic-ish modal component that takes 3 props -> isOpen state, a close function, a content component
const VivaModal: FC<ModalProps> = (props) => {
  function closeModal() {
    props.setIsOpen(false);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
      className='modal'
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <props.content closeModal={closeModal} />
    </Modal>
  );
};

export default VivaModal;

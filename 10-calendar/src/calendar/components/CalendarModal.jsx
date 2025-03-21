import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState( true );

    const oncloseModal = () => {
        console.log('Cerrando modal');
        setIsOpen( false );
    }

  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={ oncloseModal }
        style={ customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1>Modal</h1>
        <hr />
    </Modal>
  )
}

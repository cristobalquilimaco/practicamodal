import React, { useState } from 'react';
import Modal from './assets/components/Modal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2>Contenido del Modal</h2>
        <p>Este es el contenido de la ventana modal.</p>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
};

export default App;
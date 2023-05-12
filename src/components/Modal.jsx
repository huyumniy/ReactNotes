import React from 'react';
import './Modal.css'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Modal = () => {
  const { modalActive, getActiveNote, setModalActive, setNotes, notes } = useContext(DataContext);
  
  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
    setModalActive(false);
  };
  
  return (
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
      <h1>Are you sure you want to delete note?</h1>
        <div className="modal__choice">
          <button onClick={() => onDeleteNote(getActiveNote.id)}>yes</button>
          <button onClick={() => setModalActive(false)}>no</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

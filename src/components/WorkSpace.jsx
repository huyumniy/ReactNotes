import React from 'react';
import './WorkSpace.css'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const WorkSpace = () => {
  const { getActiveNote, activeNote, editable, notes, setNotes } = useContext(DataContext);
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });
    setNotes(updatedNotesArray);
  };

  console.log(editable)
  
  
  const onEditField = (key, value) => {
    onUpdateNote({
      ...getActiveNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };


  if(!getActiveNote) return <div className='no-active-note'>No note Selected</div>
  
  return ( 
    <div className='workSpace disabled'>
      <div className="workSpace__date">
        {new Intl.DateTimeFormat('en-EN', { dateStyle: 'medium' }).format(getActiveNote.lastModified)} at {new Intl.DateTimeFormat('en-EN', { hour: '2-digit', minute: '2-digit' }).format(getActiveNote.lastModified)}
      </div>
      <div className='workSpace__edit'>

        <input disabled={editable === getActiveNote.id ? false : true}
        type="text" 
        id='title' 
        value={getActiveNote.title} 
        onChange={(e) => onEditField("title", e.target.value)} 
        autoFocus />
        
        <textarea disabled={editable === getActiveNote.id ? false : true}
        id="body"
        value={getActiveNote.body}
        placeholder='Write your note here...'
        onChange={(e) => onEditField("body", e.target.value)}   />

      </div>
    </div>
    )
}


export default WorkSpace;

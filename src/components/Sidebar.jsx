import React from 'react';
import './Sidebar.css'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import ListItem from './ListItem';

const Sidebar = () => {
  const { notes, searchTerm } = useContext(DataContext);
  

  return (
    <div className='sidebar'>
      {notes.filter((note) => {
            if (searchTerm === "") return note
            else if (note.title.toLowerCase().includes(searchTerm)) {
              return note
            }
          }).map(({ id, title, body, lastModified}) => (
            <ListItem 
            id={id} 
            title={title}
            body={body} 
            lastModified={lastModified}/>
          ))}
    </div>
  );
}

export default Sidebar;

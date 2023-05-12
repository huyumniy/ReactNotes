import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import './ListItem.css'

const ListItem = ({id, title, body, lastModified }) => {
    const { activeNote, setActiveNote } = useContext(DataContext);
    
    return (
        <div className={`item ${id === activeNote && "active"}`} key={id} onClick={() => setActiveNote(id)}>
          <div className="item__title">
            <strong>{title && title.substr(0, 20)}{title.length > 20 ? "..." : ''}</strong>
          </div>
          <div className='item__meta'>
            <small>
              { lastModified === new Date() ?
              new Intl.DateTimeFormat('en-EN', { dateStyle: 'short' }).format(lastModified) :
              new Intl.DateTimeFormat('en-EN', { timeStyle: 'short' }).format(lastModified)}
            </small>
            <div className="item__body">
              {body && " " + body.substr(0, 16)}{body.length > 20 ? "..." : ''}
            </div>
          </div>
        </div>
    );
}

export default ListItem;

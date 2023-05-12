import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [editable, setEditable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [modalActive, setModalActive] = useState(false)

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <DataContext.Provider value={{
      modalActive, setModalActive, notes, setNotes,
      activeNote, setActiveNote, editable, setEditable,
      searchTerm, setSearchTerm, getActiveNote: getActiveNote(),
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;
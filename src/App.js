import React, { useState, useEffect } from 'react';
import './App.css';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorageUtils';
import NotesList from './components/Notes/NotesList';
import NoteEditor from './components/Notes/NoteEditor';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storedNotes = getFromLocalStorage('notes');
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const saveNotes = (updatedNotes) => {
    setNotes(updatedNotes);
    saveToLocalStorage('notes', updatedNotes);
  };

  const handleSaveNote = (note) => {
    const updatedNotes = notes.filter((n) => n.id !== note.id);
    updatedNotes.push(note);
    saveNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
  };

  const handlePinNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, isPinned: !note.isPinned };
      }
      return note;
    });
    saveNotes(updatedNotes);
  };

  const handleEditNote = (note) => {
    setSelectedNote(note);
  };

  const handleCancelEdit = () => {
    setSelectedNote(null);
  };

  return (
    <div className="app">
      <h1>Note Management App</h1>
      <div className="app-container">
        <NotesList
          notes={notes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
          onPin={handlePinNote}
        />
        <NoteEditor
          selectedNote={selectedNote}
          onSave={handleSaveNote}
          onCancel={handleCancelEdit}
        />
      </div>
    </div>
  );
};

export default App;

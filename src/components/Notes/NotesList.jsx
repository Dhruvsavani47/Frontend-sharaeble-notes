import React from 'react';
import NoteItem from './NoteItem';
import './Notes.css';

const NotesList = ({ notes, onEdit, onDelete, onPin }) => (
  <div className="notes-list">
    {notes
      .sort((a, b) => (a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1))
      .map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}
  </div>
);

export default NotesList;


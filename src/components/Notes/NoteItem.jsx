import React from 'react';

const NoteItem = ({ note, onEdit, onDelete, onPin }) => (
  <div className={`note-item ${note.isPinned ? 'pinned' : ''}`}>
    <h3>{note.title}</h3>
    <p>{note.content}</p>
    <div className="note-actions">
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
      <button onClick={() => onPin(note.id)}>
        {note.isPinned ? 'Unpin' : 'Pin'}
      </button>
    </div>
  </div>
);

export default NoteItem;

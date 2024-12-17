import React, { useState, useEffect } from 'react';

const NoteEditor = ({ selectedNote, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedNote]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Both title and content are required!');
      return;
    }
    const note = {
      id: selectedNote ? selectedNote.id : Date.now(),
      title,
      content,
      isPinned: selectedNote ? selectedNote.isPinned : false,
    };
    onSave(note);
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="note-editor-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NoteEditor;

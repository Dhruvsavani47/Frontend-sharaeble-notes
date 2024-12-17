import React, { useState } from 'react';
import './RichTextEditor.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const applyStyle = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="rich-text-editor">
      <div className="toolbar">
        <button onClick={() => applyStyle('bold')} title="Bold">
          <b>B</b>
        </button>
        <button onClick={() => applyStyle('italic')} title="Italic">
          <i>I</i>
        </button>
        <button onClick={() => applyStyle('underline')} title="Underline">
          <u>U</u>
        </button>

        <button onClick={() => applyStyle('justifyLeft')} title="Align Left">
          Left
        </button>
        <button onClick={() => applyStyle('justifyCenter')} title="Align Center">
          Center
        </button>
        <button onClick={() => applyStyle('justifyRight')} title="Align Right">
          Right
        </button>

        <select
          onChange={(e) => applyStyle('fontSize', e.target.value)}
          defaultValue=""
          title="Font Size"
        >
          <option value="" disabled>
            Font Size
          </option>
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Extra Large</option>
        </select>
      </div>

      <div
        className="editor"
        contentEditable="true"
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      ></div>
    </div>
  );
};

export default RichTextEditor;

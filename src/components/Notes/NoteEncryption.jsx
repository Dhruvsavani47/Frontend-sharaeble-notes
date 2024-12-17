import React, { useState } from 'react';
import { encrypt, decrypt } from '../../utils/encryptionUtils';

const NoteEncryption = ({ note }) => {
  const [password, setPassword] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [decryptedNote, setDecryptedNote] = useState('');

  const handleEncrypt = () => {
    note.content = encrypt(note.content, password);
    setIsEncrypted(true);
  };

  const handleDecrypt = () => {
    try {
      setDecryptedNote(decrypt(note.content, password));
      setIsEncrypted(false);
    } catch {
      alert('Invalid password!');
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={isEncrypted ? handleDecrypt : handleEncrypt}>
        {isEncrypted ? 'Decrypt' : 'Encrypt'}
      </button>
      {decryptedNote && <p>Decrypted Content: {decryptedNote}</p>}
    </div>
  );
};

export default NoteEncryption;

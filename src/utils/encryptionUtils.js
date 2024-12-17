export const encrypt = (text, password) => {
    try {
      const encoded = btoa(`${password}:${text}`);
      return encoded;
    } catch (error) {
      console.error('Error encrypting text:', error);
      throw new Error('Encryption failed');
    }
  };
  
  export const decrypt = (encryptedText, password) => {
    try {
      const decoded = atob(encryptedText);
      const [savedPassword, ...contentParts] = decoded.split(':');
      if (savedPassword !== password) {
        throw new Error('Invalid password');
      }
      return contentParts.join(':');
    } catch (error) {
      console.error('Error decrypting text:', error);
      throw new Error('Decryption failed');
    }
  };
  
  
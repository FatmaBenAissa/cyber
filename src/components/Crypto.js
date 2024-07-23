import React, { useState } from 'react'

function Crypto() {
     const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
// Simple Caesar Cipher function
const caesarCipher = (str, shift) => {
  return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
};
  const handleEncrypt = (algorithm) => {
    let result;
    switch (algorithm) {
      case 'caesar':
        result = caesarCipher(inputText, 3); // Shift by 3 for Caesar Cipher
        break;
      case 'base64':
        result = btoa(inputText); // Base64 encode
        break;
      default:
        result = inputText;
    }
    setOutputText(result);
  };
  return (
    <div>
         <h1>Cryptography UI</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to encrypt"
      />
      <div>
        <button onClick={() => handleEncrypt('caesar')}>Caesar Cipher</button>
        <button onClick={() => handleEncrypt('base64')}>Base64 Encode</button>
      </div>
      <input
        type="text"
        value={outputText}
        readOnly
        placeholder="Encrypted text will appear here"
      />
    </div>
  )
}

export default Crypto
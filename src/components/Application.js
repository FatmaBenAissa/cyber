
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import aud from "../audio.mp3";
import {
  Container,
  Title,
  Input,
  Select,
  Button,
  Output,
  Label
} from './styles';
import Navbarr from './Navbarr';
function Application() {
   const [password, setPassword] = useState('');
  const [algorithm, setAlgorithm] = useState('AES');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');

  const handleEncrypt = () => {
    let encryptedPassword;
    switch (algorithm) {
      case 'AES':
        encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key').toString();
        break;
      case 'DES':
        encryptedPassword = CryptoJS.DES.encrypt(password, 'secret key').toString();
        break;
      case 'RC4':
        encryptedPassword = CryptoJS.RC4.encrypt(password, 'secret key').toString();
        break;
      default:
        encryptedPassword = password;
    }
    setEncrypted(encryptedPassword);
  };

  const handleDecrypt = () => {
    let decryptedPassword;
    switch (algorithm) {
      case 'AES':
        decryptedPassword = CryptoJS.AES.decrypt(encrypted, 'secret key').toString(CryptoJS.enc.Utf8);
        break;
      case 'DES':
        decryptedPassword = CryptoJS.DES.decrypt(encrypted, 'secret key').toString(CryptoJS.enc.Utf8);
        break;
      case 'RC4':
        decryptedPassword = CryptoJS.RC4.decrypt(encrypted, 'secret key').toString(CryptoJS.enc.Utf8);
        break;
      default:
        decryptedPassword = encrypted;
    }
    setDecrypted(decryptedPassword);
  };


  

 
  return (
    <>
 
    <Navbarr/>
    <div className='appcrypto'>
      
      <Container>
         <Title>Encryption App</Title>
        <div style={{display:"flex", width:"60%", justifyContent:"center"}}>
         
            <div style={{display:"flex", width:"100%", flexDirection:"column"}}>
      
      <Label>Password</Label>
      <Input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <Label>Algorithm</Label>
      <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="AES">AES</option>
        <option value="DES">DES</option>
        <option value="RC4">RC4</option>
      </Select>
      <Button style={{width:"250px", backgroundColor:"#35e4c757"}} onClick={handleEncrypt}>Encrypt</Button>
      <Button style={{width:"250px", backgroundColor:"#35e4c757"}} onClick={handleDecrypt}>Decrypt</Button>
      </div>

<div style={{marginTop:"66px", marginLeft:"50px"}}>
      <Output>
        <h5>Encrypted:</h5> <p>{encrypted}</p>
      </Output>
      <Output>
        <h5>Decrypted:</h5> <p>{decrypted}</p>
      </Output>
  </div>
  </div>
    </Container> 
    
     <audio src={aud} autoPlay loop></audio> 
    </div>
    </>
  )
}

export default Application
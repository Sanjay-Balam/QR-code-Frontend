import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [newurl, setNewurl] = useState("");
  const [qrcodeUrl, setQrcodeUrl] = useState("");

  const onsubmit = async () => {
    try {
      const response = await axios.post("https://qr-code-backend-z1qy.onrender.com/generate-url", {
         url: newurl 
      });
      setQrcodeUrl(response.data.qrcodeUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input 
        type="text" 
        name="newurl" 
        value={newurl} 
        onChange={(e) => setNewurl(e.target.value)} 
        placeholder="Enter URL..." 
        style={{ width: '400px', height: '40px', fontSize: '16px' }} 
      />
      <br /><br />
      <button 
        style={{ width: '300px', height: '40px', fontSize: '16px' }} 
        onClick={onsubmit}
      >
        Submit
      </button>
      <br /><br />
      {qrcodeUrl && <img src={qrcodeUrl} alt="QR Code" />}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

function App(){
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/test')
    .then(res => res.text())
    .then(data => setMessage(data));
  },[]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;

/*Crear una aplicación en React que reciba texto o números a través de un input, 
luego el programa deberá mostrar en la pantalla si la secuencia de letras o números 
introducida es capicúa o no.*/



import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const checkPalindrome = () => {
    const text = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = text.split('').reverse().join('');
    setIsPalindrome(text === reversedText);
  };

  return (
    <div>
      <h1>Dgite una palabra, frase o numero!</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={checkPalindrome}>Verificar</button>
      {isPalindrome ? <p>¡Es un palíndromo!</p> : <p>No es un palíndromo.</p>}
    </div>
  );
}

export default App;

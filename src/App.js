// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Documentation from './components/Documentation';
import './App.css';

function App() {
  const [documentation, setDocumentation] = useState(null);

  const handleGenerate = (apiSpec) => {
    try {
      const parsedDoc = JSON.parse(apiSpec);
      setDocumentation(parsedDoc);
    } catch (error) {
      console.error('Invalid API spec:', error);
      setDocumentation({ error: 'Invalid API spec format' });
    }
  };

  return (
    <div className="App">
      <h1>API Documentation Generator</h1>
      <Form onGenerate={handleGenerate} />
      {documentation && <Documentation doc={documentation} />}
    </div>
  );
}

export default App;

// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Documentation from './components/Documentation';
import './App.css';

function App() {
  const [documentation, setDocumentation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (apiSpec) => {
    setLoading(true);
    try {
      const parsedDoc = JSON.parse(apiSpec);
      setDocumentation(parsedDoc);
    } catch (error) {
      console.error('Invalid API spec:', error);
      setDocumentation({ error: 'Invalid API spec format' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>API Documentation Generator</h1>
      <Form onGenerate={handleGenerate} />
      {loading && <div>Loading...</div>}
      {documentation && <Documentation doc={documentation} />}
    </div>
  );
}

export default App;

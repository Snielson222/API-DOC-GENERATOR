// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onGenerate }) => {
  const [apiSpec, setApiSpec] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!apiSpec.trim()) {
      setError('API spec cannot be empty');
      return;
    }
    setError(null);
    onGenerate(apiSpec);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="apiSpec">Paste API Spec (Swagger/OpenAPI or JSON):</label>
      <textarea
        id="apiSpec"
        value={apiSpec}
        onChange={(e) => setApiSpec(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Paste your API spec here..."
      ></textarea>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Generate Documentation</button>
    </form>
  );
};

export default Form;

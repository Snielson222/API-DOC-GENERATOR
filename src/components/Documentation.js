// src/components/Documentation.js
import React from 'react';

const Documentation = ({ doc }) => {
  return (
    <div>
      <h2>Generated Documentation</h2>
      <pre>{JSON.stringify(doc, null, 2)}</pre> {/* Placeholder for parsed doc */}
    </div>
  );
};

export default Documentation;

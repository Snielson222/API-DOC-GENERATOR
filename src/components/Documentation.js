import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { RedocStandalone } from 'redoc';
import { exportToHtml, exportToPdf } from '../utils/exportUtils';

const Documentation = ({ doc }) => {
  const isSwaggerSpec = doc.openapi || doc.swagger;

  return (
    <div>
      <h2>Generated Documentation</h2>
      {isSwaggerSpec ? (
        <div id="swagger-ui">
          <SwaggerUI spec={doc} />
        </div>
      ) : (
        <div id="swagger-ui">
          <RedocStandalone spec={doc} />
        </div>
      )}

      <button onClick={() => exportToHtml(doc)}>Export as HTML</button>
      <button onClick={() => exportToPdf(doc)}>Export as PDF</button>
    </div>
  );
};

export default Documentation;

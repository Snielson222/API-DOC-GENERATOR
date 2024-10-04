// src/components/Documentation.js
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { RedocStandalone } from 'redoc';

const Documentation = ({ doc }) => {
  // Check if the input is a Swagger/OpenAPI spec
  const isSwaggerSpec = doc.openapi || doc.swagger;

  return (
    <div>
      <h2>Generated Documentation</h2>
      {isSwaggerSpec ? (
        <div>
          <h3>Swagger/OpenAPI Documentation</h3>
          {/* Use SwaggerUI to display the API spec */}
          <SwaggerUI spec={doc} />
        </div>
      ) : (
        <div>
          <h3>Rendered API Documentation (Redoc)</h3>
          {/* Use RedocStandalone to render the OpenAPI spec */}
          <RedocStandalone spec={doc} />
        </div>
      )}
    </div>
  );
};

export default Documentation;

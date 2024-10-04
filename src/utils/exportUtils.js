// src/utils/exportUtils.js
import html2pdf from 'html2pdf.js';
export const exportToHtml = (doc) => {
    const docHtml = `
      <html>
        <head>
          <title>Exported API Documentation</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.0/swagger-ui.css" />
        </head>
        <body>
          <div id="swagger-ui"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.0/swagger-ui-bundle.js"></script>
          <script>
            SwaggerUIBundle({
              spec: ${JSON.stringify(doc)},
              dom_id: '#swagger-ui',
            });
          </script>
        </body>
      </html>
    `;
  
    const blob = new Blob([docHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'api-documentation.html';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  export const exportToPdf = (doc) => {
    const element = document.getElementById('swagger-ui');
    
    html2pdf()
      .from(element)
      .save('api-documentation.pdf');
  };
import React, { useState } from 'react';
import Button from '../ui/Button';
import { Copy, Download, Check } from 'lucide-react';

interface ExportOptionsProps {
  form: any;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ form }) => {
  const [copied, setCopied] = useState(false);
  
  // Generate HTML code for the form
  const generateHtmlCode = () => {
    const fields = form.fields.map(field => {
      switch(field.type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'number':
        case 'date':
          return `
  <div class="form-group">
    <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
    <input type="${field.type}" id="${field.id}" name="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>
  </div>`;
        
        case 'textarea':
          return `
  <div class="form-group">
    <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
    <textarea id="${field.id}" name="${field.id}" placeholder="${field.placeholder || ''}" rows="4" ${field.required ? 'required' : ''}></textarea>
  </div>`;
        
        case 'select':
          return `
  <div class="form-group">
    <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
    <select id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
      <option value="">Select an option</option>
      ${field.options?.map(option => `      <option value="${option}">${option}</option>`).join('\n')}
    </select>
  </div>`;
        
        case 'checkbox':
          return `
  <div class="form-group checkbox">
    <input type="checkbox" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
    <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
  </div>`;
        
        case 'radio':
          return `
  <div class="form-group">
    <p>${field.label}${field.required ? ' *' : ''}</p>
    ${field.options?.map((option, idx) => `    <div class="radio-option">
      <input type="radio" id="${field.id}-${idx}" name="${field.id}" value="${option}" ${field.required ? 'required' : ''}>
      <label for="${field.id}-${idx}">${option}</label>
    </div>`).join('\n')}
  </div>`;
        
        default:
          return '';
      }
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${form.title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    h2 {
      margin-bottom: 10px;
    }
    .form-description {
      margin-bottom: 20px;
      color: #666;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    .checkbox label, .radio-option label {
      display: inline;
      margin-left: 8px;
    }
    input[type="text"], 
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea,
    select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    textarea {
      min-height: 100px;
    }
    button {
      background-color: #3B82F6;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background-color: #2563EB;
    }
  </style>
</head>
<body>
  <h2>${form.title}</h2>
  ${form.description ? `<p class="form-description">${form.description}</p>` : ''}
  
  <form id="generatedForm" action="#" method="POST">
${fields}
    
    <button type="submit">${form.submitButtonText}</button>
  </form>
</body>
</html>`;
  };

  // Generate embed code
  const generateEmbedCode = () => {
    const fields = form.fields.map(field => {
      switch(field.type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'number':
        case 'date':
          return `
    <div class="form-group">
      <label for="${field.id}">${field.label}${field.required ? ' <span class="required">*</span>' : ''}</label>
      <input type="${field.type}" id="${field.id}" name="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>
    </div>`;
        
        case 'textarea':
          return `
    <div class="form-group">
      <label for="${field.id}">${field.label}${field.required ? ' <span class="required">*</span>' : ''}</label>
      <textarea id="${field.id}" name="${field.id}" placeholder="${field.placeholder || ''}" rows="4" ${field.required ? 'required' : ''}></textarea>
    </div>`;
        
        default:
          return '';
      }
    }).join('\n');

    return `<div class="formgenius-form">
  <form>
    <h3>${form.title}</h3>
    ${form.description ? `<p class="form-description">${form.description}</p>` : ''}
${fields}
    <button type="submit">${form.submitButtonText}</button>
  </form>
  <script src="https://formgenius.example.com/embed.js"></script>
</div>`;
  };

  const htmlCode = generateHtmlCode();
  const embedCode = generateEmbedCode();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadHtml = () => {
    const element = document.createElement('a');
    const file = new Blob([htmlCode], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = `${form.title.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">HTML Code</h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}
              onClick={() => copyToClipboard(htmlCode)}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download size={16} />}
              onClick={downloadHtml}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md overflow-auto max-h-60">
          <pre className="text-sm text-gray-800 whitespace-pre-wrap">{htmlCode}</pre>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Embed Code</h3>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Copy size={16} />}
            onClick={() => copyToClipboard(embedCode)}
          >
            Copy
          </Button>
        </div>
        <div className="bg-gray-100 p-4 rounded-md overflow-auto max-h-60">
          <pre className="text-sm text-gray-800 whitespace-pre-wrap">{embedCode}</pre>
        </div>
      </div>
    </div>
  );
};

export default ExportOptions;
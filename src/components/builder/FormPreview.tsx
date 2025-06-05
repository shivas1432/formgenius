import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface FormPreviewProps {
  form: {
    title: string;
    description?: string;
    fields: FormField[];
    submitButtonText: string;
  };
}

const FormPreview: React.FC<FormPreviewProps> = ({ form }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({});
      }, 3000);
    }, 1000);
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'number':
      case 'date':
        return (
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        );
      
      case 'textarea':
        return (
          <textarea
            id={field.id}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        );
      
      case 'select':
        return (
          <select
            id={field.id}
            required={field.required}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select an option</option>
            {field.options?.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <input
            type="checkbox"
            id={field.id}
            required={field.required}
            checked={formData[field.id] || false}
            onChange={(e) => handleInputChange(field.id, e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        );
      
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.id}-${idx}`}
                  name={field.id}
                  value={option}
                  checked={formData[field.id] === option}
                  onChange={() => handleInputChange(field.id, option)}
                  required={field.required}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`${field.id}-${idx}`} className="ml-2 text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="transition-all duration-300">
      <form onSubmit={handleSubmit} className="p-4">
        {formSubmitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-md">
            <h3 className="font-bold text-lg">Form Submitted Successfully!</h3>
            <p>Your form data has been received.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">{form.title}</h2>
            {form.description && (
              <p className="text-gray-600 mb-6">{form.description}</p>
            )}
            
            <div className="space-y-6">
              {form.fields.map((field) => (
                <div key={field.id} className="space-y-1">
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                {form.submitButtonText}
              </Button>
            </div>
          </>
        )}
      </form>
    </Card>
  );
};

export default FormPreview;
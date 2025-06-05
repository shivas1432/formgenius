import React, { useState, useEffect } from 'react';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { Wand2, Loader, Code, Copy, Download, Mic } from 'lucide-react';
import { generateFormFromDescription } from '../../services/formGenerator';
import FormPreview from './FormPreview';
import ExportOptions from './ExportOptions';
import VoiceInput from './VoiceInput';
import { useFormStore } from '../../store/formStore';
import { motion, AnimatePresence } from 'framer-motion';

const FormBuilder: React.FC = () => {
  const [description, setDescription] = useState('');
  const [generatedForm, setGeneratedForm] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const { formsCreated, maxForms, isPro, incrementFormsCreated } = useFormStore();

  const suggestions = [
    "Create a contact form for my restaurant with name, email, phone, and message fields",
    "I need a job application form with personal details, education, experience, and file upload",
    "Make a simple newsletter signup with email and interest checkboxes",
    "Design a customer feedback form with ratings and comments"
  ];

  useEffect(() => {
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setAiSuggestion(randomSuggestion);
  }, []);

  const handleGenerate = () => {
    if (!description.trim()) return;
    if (!isPro && formsCreated >= maxForms) {
      // Show upgrade modal or message
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI processing with a delay
    setTimeout(() => {
      const form = generateFormFromDescription(description);
      setGeneratedForm(form);
      setIsGenerating(false);
      incrementFormsCreated();
    }, 1500);
  };

  const handleVoiceInput = (transcript: string) => {
    setDescription(transcript);
  };

  return (
    <section id="form-builder" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Form Builder</h2>
            <p className="text-gray-600">
              Describe the form you need, and our AI will create it instantly.
            </p>
            {!isPro && (
              <div className="mt-4 text-sm text-gray-500">
                {formsCreated}/{maxForms} forms created with free plan
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <Textarea
                  label="Describe your form"
                  placeholder={aiSuggestion}
                  rows={4}
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mb-4"
                />
              </div>
              <div className="pt-8">
                <VoiceInput onTranscription={handleVoiceInput} />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !description.trim() || (!isPro && formsCreated >= maxForms)}
                leftIcon={isGenerating ? <Loader className="animate-spin" /> : <Wand2 />}
              >
                {isGenerating ? 'Generating...' : 'Generate Form'}
              </Button>
            </div>
          </motion.div>

          <AnimatePresence>
            {generatedForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Form Preview</h2>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Code size={16} />}
                        onClick={() => setShowExport(!showExport)}
                      >
                        {showExport ? 'Hide Export' : 'Show Export'}
                      </Button>
                    </div>
                  </div>
                  
                  <FormPreview form={generatedForm} />
                </div>

                {showExport && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-bold mb-4">Export Options</h2>
                    <ExportOptions form={generatedForm} />
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FormBuilder;
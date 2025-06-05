import React, { useState } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

interface VoiceInputProps {
  onTranscription: (text: string) => void;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscription }) => {
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startListening = async () => {
    try {
      setIsListening(true);
      setIsLoading(true);

      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onTranscription(transcript);
        setIsListening(false);
        setIsLoading(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setIsLoading(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Speech recognition error:', error);
      setIsListening(false);
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={startListening}
        disabled={isListening}
        className={`p-3 rounded-full transition-all duration-300 ${
          isListening ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
        }`}
      >
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : isListening ? (
          <MicOff className="w-6 h-6" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>

      {isListening && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-64">
          <div className="text-center">
            <Player
              autoplay
              loop
              src="https://lottie.host/2e26f645-c5a5-4c17-8be7-3415476c7c90/pGr1zYDpGx.json"
              style={{ height: '100px', width: '100px' }}
            />
            <p className="text-sm font-medium text-gray-700">Listening...</p>
            <p className="text-xs text-gray-500 mt-1">Speak your form description</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default VoiceInput;
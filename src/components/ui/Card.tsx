import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
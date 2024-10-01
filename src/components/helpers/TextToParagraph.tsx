import React from 'react';

interface TextToParagraphsProps {
    text: string;
}

const TextToParagraphs: React.FC<TextToParagraphsProps> = ({ text }) => {
  const formatBoldText = (text: string) => {
    // Split on ** and preserve surrounding content
    const parts = text.split(/(\*\*[^\*]+\*\*)/g);
    
    return parts.map((part, index) => {
      // Check if the part is bold (i.e., wrapped in **)
      if (part.startsWith('**') && part.endsWith('**')) {
        // Remove the ** and return as a <strong> element, preserving spaces
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      // Return the normal text part
      return part;
    });
  };

  return (
    <>
      {text.split('\n\n').map((paragraph, index) => (
        <p className="py-2" key={index}>
          {formatBoldText(paragraph)}
        </p>
      ))}
    </>
  );
};

export default TextToParagraphs;

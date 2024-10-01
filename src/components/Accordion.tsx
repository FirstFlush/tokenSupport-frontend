import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the current one if it's already open
    } else {
      // Close the current one first, then open the new one after a delay
      setActiveIndex(null); // Close the currently open accordion
      setTimeout(() => {
        setActiveIndex(index); // Open the new accordion after a short delay
      }, 300); // Delay to match the closing animation duration (300ms)
    }
  };

  return (
    <div className="bg-headerLight20 rounded-lg overflow-hidden border border-gray-600">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index} // Check if the current index matches the active one
          onToggle={() => handleToggle(index)} // Handle open/close with the delay
          headerClassName='bg-header text-white'
          bodyClassName='bg-headerLight10'
        />
      ))}
    </div>
  );
};

export default Accordion;

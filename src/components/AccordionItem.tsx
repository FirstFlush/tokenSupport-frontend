import React from 'react';
import TextToParagraphs from './helpers/TextToParagraph';


interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  headerClassName?: string;
  bodyClassName?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle, headerClassName, bodyClassName }) => {
  return (
    <div className="border-b border-gray-600">
      <button
        onClick={onToggle}
        className={`${headerClassName || "" } group flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none hover:text-highlightLight10 transition-colors duration-300 ease-in-out hover:bg-headerLight10 ${isOpen ? 'bg-headerLight10' : ''}`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
          <svg
            className="w-5 h-5 text-white group-hover:text-highlightLight10 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>

      <div
        className={`${bodyClassName || ""} text-gray-300 overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="py-4 px-6 border-gray-600 border-t">
          <TextToParagraphs text={content} />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

import React from 'react';
import Accordion from './Accordion';
import { fakeFaqItems } from '../data/fakeFAQ'; // Assuming you have a file to store FAQ data

const FAQ: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
      <Accordion items={fakeFaqItems} />
    </section>
  );
};

export default FAQ;

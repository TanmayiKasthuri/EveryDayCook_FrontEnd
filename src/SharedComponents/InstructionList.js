import React from 'react';
import InstructionItem from './InstructionItem';

const InstructionList = ({ instructions }) => (
  <ol className='list-group list-group-light list-group-numbered'>
    {instructions.map((instruction, index) => (
      <InstructionItem key={index} instruction={instruction} />
    ))}
  </ol>
);

export default InstructionList;
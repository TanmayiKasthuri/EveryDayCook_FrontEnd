import { Button } from 'bootstrap';
import React from 'react';

const InstructionItem = ({ instruction }) => (
  <li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="ms-2 me-auto">
    <div class="fw-bold">{instruction.instruction}</div>
    {instruction.alternateInstruction == "none" ? <></> : instruction.alternateInstruction}<br></br>
    {instruction.canSkip ? "Can skip this step if needed" : <></>}
  </div>
  <button class="badge badge-dark rounded-pill">{instruction.requiredTime}</button>
</li>
);

export default InstructionItem;

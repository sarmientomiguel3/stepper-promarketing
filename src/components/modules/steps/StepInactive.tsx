import React from 'react';
import {
  LineStepActive,
  LineStepInactive,
  LineStepNone,
} from '@/components/elements/lines/LineStep';
import { FontStepInactive } from '@/components/elements/fonts/FontStep';
import { IconStepInactive } from '@/components/elements/icons/IconStep';

const StepInactiveFirst = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepNone />
        <IconStepInactive />
        <LineStepInactive />
      </div>
      <FontStepInactive />
    </div>
  );
};

const StepInactiveIntermediate = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepInactive />
        <IconStepInactive />
        <LineStepInactive />
      </div>
      <FontStepInactive />
    </div>
  );
};

const StepInactiveIntermediateSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepActive />
        <IconStepInactive />
        <LineStepNone />
      </div>
      <FontStepInactive />
    </div>
  );
};

const StepInactiveLast = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepInactive />
        <IconStepInactive />
        <LineStepNone />
      </div>
      <FontStepInactive />
    </div>
  );
};

export {
  StepInactiveFirst,
  StepInactiveIntermediate,
  StepInactiveIntermediateSecond,
  StepInactiveLast,
};

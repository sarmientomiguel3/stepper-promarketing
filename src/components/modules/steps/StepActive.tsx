import React from 'react';
import {
  LineStepActive,
  LineStepNone,
} from '@/components/elements/lines/LineStep';
import { FontStepActive } from '@/components/elements/fonts/FontStep';
import { IconStepActive } from '@/components/elements/icons/IconStep';

const StepActiveFirst = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepNone />
        <IconStepActive />
        <LineStepActive />
      </div>
      <FontStepActive />
    </div>
  );
};

const StepActiveIntermediate = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepNone />
        <IconStepActive />
        <LineStepNone />
      </div>
      <FontStepActive />
    </div>
  );
};

const StepActiveIntermediateSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepActive />
        <IconStepActive />
        <LineStepNone />
      </div>
      <FontStepActive />
    </div>
  );
};

const StepActiveLast = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepActive />
        <IconStepActive />
        <LineStepNone />
      </div>
      <FontStepActive />
    </div>
  );
};

export {
  StepActiveFirst,
  StepActiveIntermediate,
  StepActiveIntermediateSecond,
  StepActiveLast,
};

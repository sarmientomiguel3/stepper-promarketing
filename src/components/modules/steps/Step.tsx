import React from 'react';
import { StepState } from './StepState';

interface PropsStep {
  onClick: () => void;
  children: React.ReactNode;
  index?: number;
}

const Step = (props: PropsStep) => {
  if (props.index === null) return <p>Loading ...</p>;
  return (
    <div onClick={() => props.onClick()}>
      <StepState index={props.index} />
    </div>
  );
};

export { Step };
export type { PropsStep };

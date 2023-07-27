import React, { useContext } from 'react';
import {
  LineStepActive,
  LineStepInactive,
  LineStepNone,
} from '@/components/elements/lines/LineStep';
import { FontStep as FontStepGeneral } from '@/components/elements/fonts/FontStep';
import { IconStep as IconStepGeneral } from '@/components/elements/icons/IconStep';
import { StepperContext } from '@/contexts/StepperContext/StepperProvider';

interface PropsStepState {
  index: number | undefined;
  children: React.ReactNode;
}

interface PropsData {
  stateStep: number;
  isFirst: boolean;
  isLast: boolean;
  children: React.ReactNode;
}

const LineStepBefore = (props: PropsData) => {
  if (props.isFirst) return <LineStepNone />;
  if (props.stateStep < 0) return <LineStepInactive />;
  if (props.stateStep === 0) return <LineStepActive />;
  if (props.stateStep > 0) return <LineStepActive />;
  else return <></>;
};

const LineStepAfter = (props: PropsData) => {
  if (props.isLast) return <LineStepNone />;
  if (props.stateStep < 0) return <LineStepInactive />;
  if (props.stateStep === 0) return <LineStepInactive />;
  if (props.stateStep > 0) return <LineStepActive />;
  else return <></>;
};

const IconStep = (props: PropsData) => {
  if (props.stateStep === 0)
    return <IconStepGeneral state={'active'}>{props.children}</IconStepGeneral>;
  if (props.stateStep < 0)
    return (
      <IconStepGeneral state={'inactive'}>{props.children}</IconStepGeneral>
    );
  if (props.stateStep > 0)
    return (
      <IconStepGeneral state={'default'}>{props.children}</IconStepGeneral>
    );
  else return <></>;
};

const FontStep = (props: PropsData) => {
  if (props.stateStep === 0)
    return (
      <FontStepGeneral state={'default'} isLast={props.isLast}>
        {props.children}
      </FontStepGeneral>
    );
  if (props.stateStep < 0)
    return (
      <FontStepGeneral state={'inactive'} isLast={props.isLast}>
        {props.children}
      </FontStepGeneral>
    );
  if (props.stateStep > 0)
    return (
      <FontStepGeneral state={'active'} isLast={props.isLast}>
        {props.children}
      </FontStepGeneral>
    );
  else return <></>;
};

const StepState = (props: PropsStepState) => {
  const stepper = useContext(StepperContext);
  const stateStep = stepper!.activeStep - props.index!;
  const isFirst = props.index! - 0 === 0;
  const isLast = props.index! - stepper!.maxStep + 1 === 0;
  const data: PropsData = {
    stateStep: stateStep,
    isFirst: isFirst,
    isLast: isLast,
    children: props.children,
  };
  if (stepper === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="flex items-center justify-center">
        <LineStepBefore {...data} />
        <IconStep {...data} />
        <LineStepAfter {...data} />
      </div>
      <FontStep {...data} />
    </div>
  );
};

export { StepState };

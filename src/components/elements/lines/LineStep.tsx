import React from 'react';

const LineStepActive = () => {
  return (
    <div
      className="items-center justify-center w-[100px] h-[3px] -ml-0.5 -mr-0.5 z-0"
      style={{ backgroundColor: '#EDFBD8' }}
    ></div>
  );
};
const LineStepInactive = () => {
  return (
    <div className="items-center justify-center w-[100px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0"></div>
  );
};
const LineStepNone = () => {
  return (
    <div
      className="items-center justify-center w-[100px] h-[3px] bg-white invisible -ml-0.5 -mr-0.5 z-0"
      style={{ backgroundColor: '#FFFFFF' }}
    ></div>
  );
};

type stateLine = 'none' | 'active' | 'inactive';
interface PropsLine {
  state: stateLine;
}
const LineStep = (props: PropsLine) => {
  let styleLine: string = '';
  if (props.state === 'none')
    styleLine =
      'items-center justify-center min-w-[64px] h-[3px] -ml-0.5 -mr-0.5 z-0';
  if (props.state === 'active')
    styleLine =
      'items-center justify-center min-w-[64px] h-[3px] -ml-0.5 -mr-0.5 z-0 bg-green-200';
  if (props.state === 'inactive')
    styleLine =
      'items-center justify-center min-w-[64px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0';
  return <div className={`${styleLine}`}></div>;
};
export { LineStep, LineStepActive, LineStepInactive, LineStepNone };

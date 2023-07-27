import React from 'react';

const FontStepActive = () => {
  return (
    <div className="font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide font-bold text-green-500">
      Step 1
    </div>
  );
};
const FontStepInactive = () => {
  return (
    <div className="font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide">
      Step 1
    </div>
  );
};
const FontStepDefault = () => {
  return (
    <div className="font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide text-green-500">
      Step 1
    </div>
  );
};

type stateElement = 'default' | 'active' | 'inactive';
interface PropsFont {
  state: stateElement;
  isLast: boolean;
  children: React.ReactNode;
}

const FontStep = (props: PropsFont) => {
  let styleIcon: string = '';
  if (props.state === 'default')
    styleIcon =
      'font-sans w-auto h-[28px] text-center align-middle text-sm leading-7 tracking-wide text-green-500';
  if (props.state === 'active')
    styleIcon =
      'font-sans w-auto h-[28px] text-center align-middle text-sm leading-7 tracking-wide font-bold text-green-500';
  if (props.state === 'inactive')
    styleIcon =
      'font-sans w-auto h-[28px] text-center align-middle text-sm leading-7 tracking-wide';

  return <div className={`${styleIcon}`}>Step {props.children}</div>;
};

export { FontStep, FontStepActive, FontStepInactive, FontStepDefault };

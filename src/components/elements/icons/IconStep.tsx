import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const IconStepActive = () => {
  return (
    <div
      className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10"
      style={{ backgroundColor: '#EDFBD8' }}
    >
      1
    </div>
  );
};
const IconStepInactive = () => {
  return (
    <div className="flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10">
      1
    </div>
  );
};

type stateElement = 'default' | 'active' | 'inactive';

interface PropsIcon {
  state: stateElement;
  children: React.ReactNode;
}
const IconStepDefault = () => {
  return (
    <div className="w-[32px] h-[32px] bg-white rounded-full z-10">
      <FontAwesomeIcon
        className="w-full h-full"
        icon={faCheckCircle}
        style={{ color: '#22c55e' }}
      />
    </div>
  );
};

const IconStep = (props: PropsIcon) => {
  let styleIcon: string = '';
  if (props.state === 'default')
    styleIcon = 'w-[32px] h-[32px] bg-white rounded-full z-10';
  if (props.state === 'active')
    styleIcon =
      'flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10';
  if (props.state === 'inactive')
    styleIcon =
      'flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10';
  return (
    <div className={`${styleIcon}`}>
      {props.state === 'default' ? (
        <FontAwesomeIcon
          className="w-full h-full"
          icon={faCheckCircle}
          style={{ color: '#22c55e' }}
        />
      ) : (
        <>{props.children}</>
      )}
    </div>
  );
};

export { IconStep, IconStepActive, IconStepInactive, IconStepDefault };
export type { PropsIcon };

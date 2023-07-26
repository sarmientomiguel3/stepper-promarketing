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

export { IconStepActive, IconStepInactive, IconStepDefault };

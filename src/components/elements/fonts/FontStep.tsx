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

export { FontStepActive, FontStepInactive, FontStepDefault };

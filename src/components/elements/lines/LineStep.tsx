import React from 'react'

const LineStepActive = () => {
  return (
    <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
    </div>
  );
}
const LineStepInactive = () => {
  return (
    <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
    </div>
  );
}
const LineStepNone = () => {
  return (
    <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#FFFFFF",}}>
    </div>
  );
}
export { LineStepActive, LineStepInactive, LineStepNone };

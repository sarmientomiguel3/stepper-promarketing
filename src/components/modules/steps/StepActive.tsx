import React from 'react'
import { LineStepActive , LineStepInactive, LineStepNone} from '@/components/elements/lines/LineStep'
import { FontStepActive, FontStepInactive, FontStepDefault} from '@/components/elements/fonts/FontStep'
import { IconStepActive, IconStepInactive, IconStepDefault} from '@/components/elements/icons/IconStep'

const StepActiveFirst = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepNone/>
        <IconStepActive/>
        <LineStepActive/>
      </div>
      <FontStepActive />
    </div>
  )
}

const StepActiveIntermediate = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepNone/>
        <IconStepActive/>
        <LineStepNone/>
      </div>
      <FontStepActive />
    </div>
  )
}

const StepActiveIntermediateSecond = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepActive/>
        <IconStepActive/>
        <LineStepNone/>
      </div>
      <FontStepActive />
    </div>
  )
}

const StepActiveLast = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepActive/>
        <IconStepActive/>
        <LineStepNone/>
      </div>
      <FontStepActive />
    </div>
  )
}

export { StepActiveFirst, StepActiveIntermediate, StepActiveIntermediateSecond, StepActiveLast }

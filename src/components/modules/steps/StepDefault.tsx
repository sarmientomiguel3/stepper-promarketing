import React from 'react'
import { LineStepActive , LineStepInactive, LineStepNone} from '@/components/elements/lines/LineStep'
import { FontStepActive, FontStepInactive, FontStepDefault} from '@/components/elements/fonts/FontStep'
import { IconStepActive, IconStepInactive, IconStepDefault} from '@/components/elements/icons/IconStep'

const StepDefaultFirst = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepNone/>
        <IconStepDefault/>
        <LineStepActive/>
      </div>
      <FontStepDefault />
    </div>
  )
}

const StepDefaultIntermediate = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepActive/>
        <IconStepDefault/>
        <LineStepActive/>
      </div>
      <FontStepDefault />
    </div>
  )
}

const StepDefaultIntermediateSecond = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4px]'>
      <div className="flex items-center justify-center">
        <LineStepActive/>
        <IconStepDefault/>
        <LineStepNone/>
      </div>
      <FontStepDefault />
    </div>
  )
}

export { StepDefaultFirst, StepDefaultIntermediate, StepDefaultIntermediateSecond }

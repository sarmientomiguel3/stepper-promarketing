import React, { useContext } from 'react'
import { StepActiveFirst, StepActiveIntermediate, StepActiveIntermediateSecond, StepActiveLast } from './StepActive'
import { StepInactiveFirst, StepInactiveIntermediate, StepInactiveIntermediateSecond, StepInactiveLast } from './StepInactive'
import { StepDefaultFirst, StepDefaultIntermediate, StepDefaultIntermediateSecond } from './StepDefault'
import { StepperContext } from '@/contexts/StepperContext/StepperProvider'
import { setActiveStep } from '@/contexts/StepperContext/StepperActions'
import { LineStepActive , LineStepInactive, LineStepNone} from '@/components/elements/lines/LineStep'
import { FontStepActive, FontStepInactive, FontStepDefault} from '@/components/elements/fonts/FontStep'
import { IconStepActive, IconStepInactive, IconStepDefault} from '@/components/elements/icons/IconStep'
import { StepState } from './StepState'

interface PropsStep{
  onClick: ()=>void;
  children: React.ReactNode;
  index?: number
}

const Step = (props: PropsStep) => {
  if(props.index === null)
    return (<p>Loading ...</p>);
  return (
    <div onClick={()=>props.onClick()}>
      <StepState 
        index={props.index} 
      />

    </div>
  )
}

export {Step}

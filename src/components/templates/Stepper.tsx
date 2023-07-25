import React, {ReactNode} from 'react'

interface PropsSteeper{
  activeStep: boolean;
  isLastStep: Function;
  isFirstStep: Function;
  children: ReactNode;
}

const Stepper = (props: PropsSteeper) => {
  return (
    <>
      {props.children}
    </>
  )
}



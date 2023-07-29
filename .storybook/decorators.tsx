import React from 'react';
import '../src/app/globals.css';
import { DecoratorFn, Story } from '@storybook/react'

export const withMaxWidth: DecoratorFn = (Story:Story) => (
  <div className='container relative p-8 mx-auto bg-gray-50'>
    <Story />
  </div>
)

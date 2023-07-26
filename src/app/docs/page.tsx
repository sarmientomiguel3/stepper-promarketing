import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Docs = () => {
  return (
    <div className="container w-full min-h-screen p-4 mx-auto bg-red-200">

      <div className="flex">
        {/*estado inicial inactivo*/}
        <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full'>
          1
        </div>
        {/*estado inicial activo*/}
        <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400' style={{backgroundColor: "#EDFBD8",}}>
          1
        </div>
        {/*estado inicial default*/}
        <div className='w-[32px] h-[32px] bg-white rounded-full'>
          <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            1
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            2
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            3
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial activo*/}
          <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10' style={{backgroundColor: "#EDFBD8",}}>
            1
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            2
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            3
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial default*/}
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10' style={{backgroundColor: "#EDFBD8",}}>
            2
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            3
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial default*/}
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10' style={{backgroundColor: "#EDFBD8",}}>
            2
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0'>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full z-10'>
            3
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial default*/}
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-emerald-400 z-10' style={{backgroundColor: "#EDFBD8",}}>
            3
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {/*estado inicial default*/}
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/*estado inicial inactivo*/}
          <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
          </div>
          <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
          </div>
        </div>
      </div>
      {/*estado inicial inactivo*/}
      <div className="flex items-center justify-center">
        <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide text-green-500'>
          Step 1
        </div>
        <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide font-bold text-green-500'>
          Step 1
        </div>
        <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide'>
          Step 1
        </div>
      </div>
      {/*estado inicial junto*/}
      <div className="flex items-center justify-center">
        <div className='flex flex-col items-center justify-center gap-[4px]'>
          <div className="flex items-center justify-center">
            {/*estado inicial inactivo*/}
            <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
            </div>
            <div className='w-[32px] h-[32px] bg-white rounded-full z-10'>
              <FontAwesomeIcon icon={faCheckCircle} style={{color: "#22c55e",}} />
            </div>
            <div className='items-center justify-center w-[180px] h-[3px] bg-gray-200 -ml-0.5 -mr-0.5 z-0' style={{backgroundColor: "#EDFBD8",}}>
            </div>
          </div>
          <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide text-green-500'>
            Step 1
          </div>
        </div>
        <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide font-bold text-green-500'>
          Step 1
        </div>
        <div className='font-sans w-[41px] h-[28px] text-center align-middle text-sm leading-7 tracking-wide'>
          Step 1
        </div>
      </div>
    </div>
  )
}


export default Docs;

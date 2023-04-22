import React from 'react'
import {ModalWrapperProps} from '../models'

export const ModalWrapper = ({ children, onClose, title, className, hidden, ...props }: ModalWrapperProps):JSX.Element => {
  const stylesModal = `shadow-2xl mx-auto my-auto p-4 w-screen max-w-sm max-h-max absolute inset-0 bg-slate-50 rounded-md border`
  if(hidden) return <></>;
  return (
    <div className='fixed left-0 top-0 w-screen h-screen z-40 bg-black bg-opacity-30 backdrop-blur'>
      <div className={`${stylesModal} ${className || ''}`} {...props}>
        <div className='flex mb-2'>
          {title && <h4 className='text-lg font-bold'>{title}</h4>}
          <button className='ml-auto text-xl' onClick={onClose}>&times;</button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
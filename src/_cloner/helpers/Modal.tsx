import React, {FC} from 'react'

interface IProps {
  isOpen: boolean
  onClose: () => void
  className?: string
  children: React.ReactNode
}

const Modal: FC<IProps> = ({isOpen, onClose, className, children}) => {

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[150]'>
      <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true' onClick={onClose}>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <span
          className='hidden sm:inline-block sm:h-screen sm:align-middle'
          aria-hidden='true'
        ></span>

        <div
          className={`inline-block z-[200] transform overflow-auto rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle ${className}`}
          // className={`inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle ${className}`}
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal

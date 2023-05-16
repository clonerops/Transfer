import {FC} from 'react'

interface IProps {
  children: React.ReactNode
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<IProps> = ({children, showModal, setShowModal}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div
              className='fixed inset-0 h-full w-full bg-black opacity-40'
              onClick={() => setShowModal(false)}
            ></div>
            <div className='flex max-h-screen items-center px-4 py-8'>
              <div className='relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-lg'>
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal

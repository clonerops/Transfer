import { FC, useState } from 'react';

interface IProps {
    title?: string
    dealer?: any
    province?: any
    city?: any
}

const Collapsible:FC<IProps> = ({title, dealer, province, city}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='mt-2 mb-2'>
      <div className="flex items-center rounded-tl-md justify-between p-4 bg-blue-500 text-white cursor-pointer" onClick={toggleCollapsible}>
        <h3>{title}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-200">
          <p>This is the collapsible content</p>
          <p>You can add any additional content here...</p>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import RequestButton from './reusable/RequestButton';

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [currentStyle, setCurrentStyle] = useState('hidden');

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
    setCurrentStyle(showNavigation ? 'hidden' : 'block');
  };

  return (
    <header className="h-[6rem] flex justify-center z-50 absolute w-full bg-white">
      <div className="flex w-[80%] h-full items-center justify-between">
        <img className="w-[15rem] md:w-[15%]" src={Logo} alt="logo" />

        <nav
          className={`bg-white md:p-2 ${currentStyle} ${
            currentStyle === 'block'
              ? 'absolute top-[8rem] h-[15rem] bg-white w-[80%] rounded-lg flex flex-col justify-center items-center gap-4 md:hidden'
              : ''
          } md:block`}
        >
          <a className="md:mr-[2rem] hover:text-[#31d35c]" href="#">
            Home
          </a>
          <a className="md:mr-[2rem] hover:text-[#31d35c]" href="#">
            About
          </a>
          <a className="md:mr-[2rem] hover:text-[#31d35c]" href="#">
            Contact
          </a>
          <a className="md:mr-[2rem] hover:text-[#31d35c]" href="#">
            Blog
          </a>
          <a className="md:mr-[2rem] hover:text-[#31d35c]" href="#">
            Careers
          </a>
        </nav>

        <div className="hidden md:block">
          <RequestButton text="Request Invite" />
        </div>

        {currentStyle === 'hidden' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 block md:hidden cursor-pointer"
            onClick={() => handleShowNavigation()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 block md:hidden cursor-pointer"
            onClick={() => handleShowNavigation()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </header>
  );
}

import Logo from '../assets/images/logo.svg';
import RequestButton from './reusable/RequestButton';

export default function Header() {
  return (
    <header className="h-[6rem] flex justify-center z-50 absolute w-full bg-white">
      <div className="flex w-[80%] h-full items-center justify-between">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <nav className="p-2">
          <a className="mr-[2rem]" href="#">
            Home
          </a>
          <a className="mr-[2rem]" href="#">
            About
          </a>
          <a className="mr-[2rem]" href="#">
            Contact
          </a>
          <a className="mr-[2rem]" href="#">
            Blog
          </a>
          <a className="mr-[2rem]" href="#">
            Careers
          </a>
        </nav>

        <RequestButton text="Request Invite" />
      </div>
    </header>
  );
}

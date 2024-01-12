import RequestButton from './reusable/RequestButton';
import LandingBGImage from '../assets/images/bg-intro-desktop.svg';
import LandingImagePhone from '../assets/images/image-mockups.png';

import MobileBGImage from '../assets/images/bg-intro-mobile.svg';

export default function Landing() {
  return (
    <div className="w-full justify-center flex h-full relative">
      <div className="md:w-[80%] flex justify-start gap-[5rem] max-md:flex-col ">
        <div className="md:hidden w-full ">
          <img className="w-full" src={MobileBGImage} alt="image" />
          <img className="absolute top-0" src={LandingImagePhone} alt="image" />
        </div>

        <div className="md:w-[40%] flex items-center md:items-start flex-col text-center md:text-start justify-center h-[100%]  md:h-[800px]">
          <h1 className="font-semibold text-5xl md:text-[4rem] mb-[2rem]">
            Next generation digital banking
          </h1>
          <p className="mb-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            ratione quod a culpa doloribus odit, sit, minima repudiandae
            obcaecati aut maxime consectetur excepturi accusantium dolorem
            architecto facilis, nesciunt officiis deserunt!
          </p>

          <RequestButton text="Request Invite" />
        </div>

        <div className="w-[40%]">
          <img
            className="absolute top-[-10rem] right-[-18rem] w-[70%] max-md:hidden"
            src={LandingBGImage}
            alt="image"
          />

          <img
            className="absolute top-0 right-[-9rem] w-[46%] max-md:hidden"
            src={LandingImagePhone}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

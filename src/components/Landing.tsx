import RequestButton from './reusable/RequestButton';
import LandingBGImage from '../assets/images/bg-intro-desktop.svg';
import LandingImagePhone from '../assets/images/image-mockups.png';
export default function Landing() {
  return (
    <div className="w-full justify-center flex h-full relative">
      <div className="w-[80%] flex justify-start gap-[5rem]">
        <div className="w-[40%] flex items-start flex-col justify-center h-[800px]">
          <h1 className="font-bold text-[4rem] mb-[2rem]">
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
            className="absolute top-[-10rem] right-[-18rem] w-[70%]"
            src={LandingBGImage}
            alt="image"
          />

          <img
            className="absolute top-0 right-[-9rem] w-[46%]"
            src={LandingImagePhone}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

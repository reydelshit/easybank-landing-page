import OnlineBanking from '../assets/images/icon-online.svg';
import Budgeting from '../assets/images/icon-budgeting.svg';
import OnBoarding from '../assets/images/icon-onboarding.svg';
import Api from '../assets/images/icon-api.svg';

type SecondaryPType = {
  img: string;
  title: string;
  text: string;
};

export default function SecondaryP() {
  const data: SecondaryPType[] = [
    {
      img: OnlineBanking,
      title: 'Online Banking',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus unde maiores dolor repellendus quisquam explicabo velit, incidunt natus amet?',
    },
    {
      img: Budgeting,
      title: 'Simple Budgeting',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus unde maiores dolor repellendus quisquam explicabo velit, incidunt natus amet?',
    },
    {
      img: OnBoarding,
      title: 'Fast Onboarding',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus unde maiores dolor repellendus quisquam explicabo velit, incidunt natus amet?',
    },
    {
      img: Api,
      title: 'Open AI',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus unde maiores dolor repellendus quisquam explicabo velit, incidunt natus amet?',
    },
  ];

  return (
    <div className="w-full flex h-[800px] justify-center items-center bg-[#f3f4f6]">
      <div className="w-[80%] ">
        <div className="mb-[8rem]">
          <h1 className="text-[4rem] mb-[1rem]">Why choose Easybank?</h1>
          <p className="w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            deleniti neque eaque ad commodi earum, autem porro expedita quod?
            Modi.
          </p>
        </div>
        <div className="flex gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <img className="mb-[2rem]" src={item.img} alt={item.text} />
              <h1 className="mb-[2rem] font-semibold text-[2rem]">
                {item.title}
              </h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Money from '../assets/images/image-currency.jpg';
import Restaurant from '../assets/images/image-restaurant.jpg';
import Plane from '../assets/images/image-plane.jpg';
import Confetti from '../assets/images/image-confetti.jpg';

export default function Articles() {
  const data = [
    {
      image: Money,
      title: 'Receive money in any currency with no fees',
      author: 'Reydel Ocon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },

    {
      image: Restaurant,
      title: 'Treat yourself without worrying about money',
      author: 'Reydel Ocon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },

    {
      image: Plane,
      title: 'Take your Easybank card wherever you go',
      author: 'Reydel Ocon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },

    {
      image: Confetti,
      title: 'Our invite-only Beta accounts are now live!',
      author: 'Reydel Ocon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
  ];
  return (
    <div className="flex w-full justify-center h-[800px] items-center">
      <div className="w-[80%]">
        <h1 className="text-[4rem] mb-[1rem]">Latest Articles</h1>
        <div className="flex gap-8">
          {data.map((item, index) => (
            <div
              className="overflow-y-hidden border-2 rounded-md bg-white h-[25rem]"
              key={index}
            >
              <img
                className="w-full h-[50%]"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm">By {item.author}</p>

                <h1 className="font-semibold text-lg">{item.title}</h1>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

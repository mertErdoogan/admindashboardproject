import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-yellow-100/50">
      <div className="py-5">
        <span className="block relative before:absolute before:-left-3 text-xl text-black font-bold text-center before:flex before:h-full before:w-1 before:mr-3 before:bg-yellow-300">
          MANAGE COURSES
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="overflow-hidden mt-10 rounded-full">
          <Image src={'/avatar.png'} alt="qwer" width={150} height={150} />
        </div>
        <span className="text-lg text-center font-bold text-black mt-4">
          John Doe
        </span>
        <span className="text-yellow-500 font-semibold">Admin</span>
      </div>
      <div className="block mt-20">
        <Nav />
      </div>
    </div>
  );
};

export default Header;

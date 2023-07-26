import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '../shared/Wrapper';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../public/assets/logo-main.png';
import Button from '../shared/Button';
import { CgMenuRightAlt } from 'react-icons/cg';
import BorderButton from '../shared/BorderButton';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };


  const { isLoggedIn, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <header className="">
      <Wrapper>
        {/* parent div */}
        <div className="flex justify-between text-primary-color-text items-center font-normal text-base">
          {/* left section */}
          <div>
            <Link href={'/'}>
            <Image
                src={Logo}
                alt="Maglo"
                width={120}
                height={100}
                className="h-9 w-20 md:h-14 md:w-32"
              />
            </Link>
          </div>
          {/* right section */}
          <div className="md:flex flex-col hidden">
            <ul className="flex-col pb-6 flex md:flex-row space-x-12 items-center mt-6 text-primary-color-text">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/seller">
                <li>Seller</li>
              </Link>
              <Link href="/">
                <li>Buyer</li>
              </Link>
              <Link href="/blogs">
                <li>Blogs</li>
              </Link>
              <Link href="/">
                <li>Join Us</li>
              </Link>
              <div className="text-base flex gap-x-4">
                {isLoggedIn ? (
                  <div
                    className="relative flex flex-row-reverse items-center gap-x-2 cursor-pointer"
                    onClick={handleDropdown}
                  >
                    <Image
                      src={user.image}
                      alt="User Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="mr-2">
                      <p className="text-md font-medium">{user.firstName} {user.lastName}</p>
                      <p className="text-xs">{user.location}</p>
                    </div>
                    {showDropdown && (
                      <div className="absolute bottom-[-120px] left-35 bg-white text-black text-center py-4 px-3 rounded shadow-lg z-20">
                        <Link href={{ pathname: '/user', query: { role: user.role } }}>
                          <span className="block rounded-md px-4 py-2 hover:bg-custom-blue hover:bg-blue-300">
                            Dashboard
                          </span>
                        </Link>
                        <button
                          className="block rounded-md px-4 py-2 hover:bg-custom-red hover:bg-blue-300 w-full"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <BorderButton text="Login" linkTo="login" />
                    <Button text="Join Us" linkTo="" />
                  </>
                )}
              </div>
            </ul>
          </div>
          {/* menu button  */}
          <div
            onClick={handleNavbar}
            className="block md:hidden items-center cursor-pointer z-50"
          >
            {nav ? (
              <AiOutlineClose size={35} className="text-black" />
            ) : (
              <CgMenuRightAlt
                size={35}
                className="text-white bg-[#1E7FCB] py-2 rounded-lg"
              />
            )}
          </div>
          {/* mobile menu */}
          <div
            className={
              nav
                ? 'sm:hidden fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-full bg-white text-black text-center ease-linear duration-300 z-20'
                : 'sm:hidden fixed top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-full bg-white text-black text-center ease-linear duration-300 z-20'
            }
          >
            <ul>
              <li className="p-4 text-xl hover:text-custom-blue duration-300 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-300 cursor-pointer">
                <Link href="/seller">Seller</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/">Buyer</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-30 pb-16 cursor-pointer">
                <Link href="/">Join Us</Link>
              </li>
              <div className="text-base flex-col space-y-4">
              {isLoggedIn ? (
                <>
                <div className="flex items-center cursor-pointer mb-3">
                <Link href={{ pathname: '/user', query: { role: user.role } }} className='flex items-center gap-x-3 '>
                  <Image
                    src={user.image}
                    alt="User Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="text-md font-medium">{user.firstName} {user.lastName}</p>
                    <p className="text-xs">{user.location}</p>
                  </div>
                  </Link>
                </div>
                <button
                          className="bg-[#F6BE00] rounded-full w-40 h-12 flex-shrink-0 text-black hover:scale-105 ease-in duration-300 transition-all"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                </>
                
              ) : (
                <div className="text-base flex-col space-y-4">
                  <BorderButton text="Login" linkTo="login" />
                  <Button text="Join Us" linkTo=" " />
                </div>
              )}
            </div>
            </ul>
           
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

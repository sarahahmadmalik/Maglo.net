
import { useAuth } from '../../context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '../shared/Wrapper';
import Logo from '../../public/assets/headerLogo.svg';
import Button from '../shared/Button';
import BorderButton from '../shared/BorderButton';
import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useRouter } from 'next/router';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };


  const { isLoggedIn, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length > 0); 
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  useEffect(() => {

    const dummySuggestions = ['ship spare parts', 'Engine Spare Parts', 'Engine Spare Parts', 'Engine Spare Parts', 'Engine Spare Parts'];
    const filteredSuggestions = dummySuggestions.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchQuery]);

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
                width={160}
                height={130}
                className="h-20 w-20 md:h-24 md:w-32"
              />
            </Link>
          </div>
          <div className=" hidden xs:flex relative flex-col  justify-center border border-green-700 items-center w-[140px] smd:w-[200px]  xl:w-[40%]">
            <div className={`absolute top-[-25px] right-[50] bg-white text-black rounded-xl ${showSuggestions ? `border border-[#E7E5E5]` : ``}    py-1 px-2 w-50 z-30  xl:w-full`}>
            <div className="relative flex items-center">
            <div className="absolute left-3">
              <Image src="/assets/search.svg" height={20} width={20} alt="search"/>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className={`pl-12 pr-8 py-2 text-base focus:outline-none border-b border-[#E7E5E5] `}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute right-3">
                <div
                  className="rounded-full bg-[#1E7FCB21] p-1 cursor-pointer"
                  onClick={clearSearch}
                >
                  <AiOutlineClose size={13} className="text-[#1E7FCB]" />
                </div>
              </div>
            )}
              </div>
              {showSuggestions && (
              <ul className="bg-white w-full text-black  py-2">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(item);
                      setShowSuggestions(false);
                      router.push(`/suppliers?searchQuery=${encodeURIComponent(item)}`)
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
        
            </div>
         
          </div>
        
           
          {/* right section */}
          <div className="md:flex flex-col hidden">
            <ul className="flex-col text-base pb-6 flex md:flex-row space-x-12 items-center mt-6 text-primary-color-text">
             
              <Link href="/seller">
                <li className='hover:text-[#F6BE00] duration-300 ease-in transition-all'>Seller</li>
              </Link>
              <Link href="/buyer">
                <li className='hover:text-[#F6BE00] duration-300 ease-in transition-all'>Buyer</li>
              </Link>
              <Link href="/News">
                <li className='hover:text-[#F6BE00] duration-300 ease-in transition-all'>News</li>
              </Link>
              {/* <Link href="/inquiry">
                <li className='hover:text-[#F6BE00] duration-300 ease-in transition-all'>Inquiries</li>
              </Link> */}
           
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
                    <Button text="Join Us" linkTo="login" />
                  </>
                )}
              </div>
            </ul>
          </div>
          {/* menu button  */}
          <div
            onClick={handleNavbar}
            className="block md:hidden items-center cursor-pointer z-50 py-5"
          >
            {nav ? (
              <AiOutlineClose size={30} className="text-black" />
            ) : (
              <CgMenuRightAlt
                size={30}
                className="text-black"
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
            <ul className="">
              
              <li className="p-4 text-xl hover:text-custom-blue duration-300 cursor-pointer">
                <Link href="/seller">Seller</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/buyer">Buyer</Link>
              </li>
              <li className="p-4 text-xl hover:text-custom-blue duration-30 cursor-pointer">
                <Link href="/News">News</Link>
              </li>
              
              <div className="text-base flex-col space-y-4 mt-4 ">
              {isLoggedIn ? (
                <>
                <div className="flex items-center cursor-pointer mb-4">
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
                  <Button text="Join Us" linkTo="login" />
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
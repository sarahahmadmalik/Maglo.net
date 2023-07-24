import Image from "next/image";
import { useState } from "react";
import { Work_Sans } from "next/font/google";
import { useRouter } from 'next/router';
import User from '../data/User';
import { useAuth } from "../context/AuthProvider";
const font = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const [rememberMe, setRememberMe] = useState(false);
      const [error, setError] = useState('');
      const { user, login} = useAuth();
      const router = useRouter();

    const handleSubmit =  (event) => {
        event.preventDefault();
        // try {
        //     // const response = await axios.post('/api/login', formData);
      
        //     // if (response.status === 200) {
        //     //   console.log('Login successful!');

        //     // } else {
        //     //   console.log('Login failed!');
        //     // }
        //   } catch (error) {
        //     console.error('Error during login:', error);
        //   }

        const loginUser = User.find((user) => user.email === formData.email && user.password === formData.password);
        if (loginUser) {
          login(loginUser)
          router.push({
            pathname: '/user',
            query: { role: user.role }, 
          });
        } else {
          setError('Invalid username or password');
        }

      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
      };
  return (
    <>
    <div className="bg-white w-[100vw] h-[100vh] text-black overflow-hidden">
      <div className="w-full h-full flex">
        
        <div className="w-full h-full relative overflow-hidden hidden sm:block">
          <Image
            src="/assets/login-img.svg"
            alt="banner-image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full h-full border flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <div className="">
              <Image
                src="/assets/logo.png"
                alt="banner-image"
                width={106}
                height={106}
              />
            </div>
            <div>
              <h1 className={` ${font.className} font-bold text-2xl`}>
                Welcome!
              </h1>
            </div>
            <div>
              <h1 className={`${font.className} font-medium text-lg`}>
                Log in
              </h1>
            </div>
            <div>
            <div>
              <form className="font-inter py-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                <div>
                    <label className="text-xs font-medium" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Doejohn78@gmail.com"
                      value={formData.email}
                      className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                      onChange={handleChange}
                    />
                  </div>

               
                  <div>
                    <label className="text-xs font-medium" htmlFor="createPassword">
                      Create Password
                    </label>
                    <input
                      type="password"
                      id="createPassword"
                      placeholder=". . . . ."
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className=" text-xs font-medium w-full border border-[#A4CCEC] px-4 py-2 rounded focus:border bg-[#F3FAFF] focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF] transition-colors"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 my-2">
                    <div className='flex items-center gap-2'>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe"  checked={rememberMe}
                onChange={handleRememberMeChange} className=" text-xs font-light font-roboto">
                      Remember me!
                    </label>
                  </div>
                  <a href="#" className="font-light text-xs font-roboto">
                    Forgot password?
                  </a>
                  </div>
                  <div>
  {error && <p className="text-red-500 text-xs">{error}</p>}
</div>
                  <button
                    type="submit"
                    className="bg-customYellow text-black py-2 rounded-md text-sm hover:scale-105 ease-in duration-300 transition-all"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;

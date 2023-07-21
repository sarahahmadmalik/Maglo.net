import Image from "next/image";
import { useState } from 'react';

function login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //http requests here
            const response = await axios.post('/api/login', formData);
      
            if (response.status === 200) {
              console.log('Login successful!');

            } else {
              console.log('Login failed!');
            }
          } catch (error) {
            console.error('Error during login:', error);
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
    <div className="bg-white w-full h-full  border border-yellow-500 text-black overflow-hidden">
      <div className="w-full h-full flex">
        <div className="w-full h-full relative border border-red-400 overflow-hidden">
          <Image
            src="/assets/login-img.svg"
            alt="banner-image"
            fill
            priority
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
              <h1 className="font-bold text-2xl font-workSans">Welcome</h1>
            </div>
            <div>
              <h1 className="font-semibold text-medium font-workSans">Log in</h1>
            </div>
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
                      placeholder="Doejohn78@gmail.com"
                      value={formData.email}
                      className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded"
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
                  <button
                    type="submit"
                    className="bg-customYellow text-black py-2 rounded-md text-sm"
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
  );
}

export default login;

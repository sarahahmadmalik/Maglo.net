import Image from 'next/image';
import { Raleway } from 'next/font/google';
import { AiOutlineSearch, AiOutlineEnvironment, AiOutlineUpload } from 'react-icons/ai';
import { useState } from 'react';

const font = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

const Sales = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [inputType, setInputType] = useState<'text' | 'date'>('text'); 
  const [choice, setChoice] = useState<'text' | 'file'>('text'); 
  const [text, setText] = useState('');

  const handleFileChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value as 'text' | 'file'; // Change the type to match options
    setChoice(option);
    if (option === 'text') {
      setFileName(null);
      setImage(null);
    }
  };

  const handletextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleUploadClick = () => {
    const uploadInput = document.querySelector('.upload') as HTMLInputElement;
    if (uploadInput) {
      uploadInput.click();
    }
  };

  return (
    <div className={`p-4 pb-8 pt-4  w-full h-full border-t border-slate-600 ${font.className}`}>
      
      <form action="" className="xs:min-w-[400px]">
        <div className="relative">
          <AiOutlineSearch className="absolute left-2 top-4 text-gray-500" />
          <input
            type="text"
            placeholder="Category"
            className="w-full h-12 pl-8 pr-2 mb-4 rounded-lg placeholder-black focus:outline-none"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Manufacturer"
            className="w-full h-12 pl-5 pr-2 mb-4 rounded-lg placeholder-black focus:outline-none"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Model"
            className="w-full h-12 pl-5 pr-2 mb-4 rounded-lg placeholder-black focus:outline-none"
          />
        </div>
        <div className="relative">
          <AiOutlineSearch className="absolute left-2 top-4 text-gray-500" />
          <AiOutlineEnvironment className="absolute right-2 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Country"
            className="w-full h-12 pl-8 pr-10 mb-4 rounded-lg placeholder-black focus:outline-none"
          />
        </div>
        
        <div className="relative ">
          <input
            type={inputType}
            placeholder="Delivery Date"
            className="w-full h-12 px-2 pl-5 mb-4 rounded-lg placeholder-black focus:outline-none"
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
          />
          <Image className="absolute right-0 top-4 " src="/assets/calenderr.svg" width={20} height={20} alt="calendar" />
        </div>
        
        <div className="flex text-white mb-4">
        <div className="mr-4">
          <input
            type="radio"
            id="textOption"
            name="inputOption"
            value="text"
            checked={choice === "text"}
            onChange={handleOptionChange}
          />
          <label htmlFor="textOption">Free Text</label>
        </div>
        <div>
          <input
            type="radio"
            id="fileOption"
            name="inputOption"
            value="file"
            checked={choice === "file"}
            onChange={handleOptionChange}
          />
          <label htmlFor="fileOption">Upload Image</label>
        </div>
        </div>
        {choice === "file" ? (
           <div className="relative cursor-pointer w-full flex items-center justify-center  rounded-md mb-4 border-dashed border border-white " onClick={handleUploadClick}>
           <div className="absolute left-1/4 transform -translate-x-1/2 ">
             <Image src="/assets/upload.svg" width={20} height={20} alt="upload" />
           </div>
           <div className="absolute left-1/2 transform -translate-x-1/2 text-white">
             {fileName || "Upload Image"}
           </div>
           <input
             type="file"
             accept=".jpeg,.jpg,.png"
             className="w-full h-12 pl-10 text-white pr-2 mb-4 rounded-lg focus:outline-none bg-transparent upload"
             onChange={handleFileChange}
             style={{ visibility: "hidden" }}
           />
         </div>
        ) : (
          <div className="relative w-full">
          <textarea
            placeholder="Add Inquiry"
            className="w-full border h-20 px-2 py-1 pr-2 mb-2 rounded-lg placeholder-black focus:outline-none"
            value={text}
            style={{resize: "none"}}
            onChange={handletextChange}
          />
          </div>
        )}
       
        <button type="submit" className="bg-transparent border-2 border-white rounded-lg text-white w-full h-14">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sales;

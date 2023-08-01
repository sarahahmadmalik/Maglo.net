import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoIosInformationCircle } from 'react-icons/io'; 
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const Report = () => {
  const router = useRouter();
  const { commentId, commentUser } = router.query;
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReport = (e) => {
    e.preventDefault();
    if (reason === '') {
      setErrorMessage('Please select one reason.');
      return;
    }
    
    setIsLoading(true);

    console.log('Reported Comment ID:', commentId);
    console.log('Reported User:', commentUser);
    console.log('Reason:', reason);
    console.log('Other Reason:', otherReason);

    // Simulate some asynchronous report submission
    setTimeout(() => {
      setIsLoading(false);
      setErrorMessage('');
      setIsSubmitted(true);

      // Automatically redirect back to the previous page after 3 seconds
      setTimeout(() => {
        router.back();
      }, 3000);
    }, 2000); // 2000 milliseconds (2 seconds) delay before showing the success message
  };

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center w-full h-[70vh]">
        <div className="rounded-sm shadow-md border border-[#1E7FCB24] py-[2rem] px-[1.5rem] mb-7">
          <h1 className="font-[700] text-[30px]">Why do you wish to report this message?</h1>
          <div className="bg-[#F0F4FF] w-full text-[18px] px-3 py-3 flex items-center mt-2"> 
            <div className="flex items-center justify-center">
              <IoIosInformationCircle size={24} style={{color: "#2A458A", marginRight: "5px"}} />
            </div>
            <p className="text-[#445B99]">Your report will be kept anonymous</p>
          </div>
          <form className="py-4 flex flex-col" onSubmit={handleReport}>
            <label className="my-1">
              <input
                type="radio"
                value="Payment or Communication Outside Maglo"
                checked={reason === 'Payment or Communication Outside Maglo'}
                onChange={(e) => setReason(e.target.value)}
                className="mr-2"
              />
              The user asked for payment or wanted to communicate Outside Maglo
            </label>
          
            <label className="my-1">
              <input
                type="radio"
                value="Behaved Inappropriately"
                checked={reason === 'Behaved Inappropriately'}
                onChange={(e) => setReason(e.target.value)}
                className="mr-2"
              />
              The user behaved Inappropriately
            </label>
            
            <label className="my-1">
              <input
                type="radio"
                value="Sent Spam"
                checked={reason === 'Sent Spam'}
                onChange={(e) => setReason(e.target.value)}
                className="mr-2"
              />
              The user Sent Spam
            </label>
          
            <label className="my-1">
              <input
                type="radio"
                value="Other"
                checked={reason === 'Other'}
                onChange={(e) => setReason(e.target.value)}
                className="mr-2"
              />
              Other
            </label>
          
            {reason === 'Other' && (
              <textarea
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                placeholder="Tell us what went wrong"
                className="my-1 rounded-sm border border-grey-400 focus:outline-none px-3 py-2 h-[200px]"
                style={{resize: "none"}}
              />
            )}
            {errorMessage && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            {isSubmitted && (
              <p className="text-green-500">Your report has been submitted.</p>
            )}
            <div className="w-full flex justify-center mt-4">
              <button className="bg-[#FFB84E] rounded-md py-2 w-[70%] smd:w-[30%] text-black font-[400] text-[16px] hover:bg-[DF9F3E] ease-in duration-300 transition-all" type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Report'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Report;

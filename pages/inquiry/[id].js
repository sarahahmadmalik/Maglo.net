import { useRouter } from "next/router";
import InquiryData from "../../data/InquiryData";
import Banner from "../../components/Banner";
import CommentsSection from "../../components/CommentsSection"
import Link from "next/link";
import {  Roboto } from "next/font/google";
import {  Work_Sans } from "next/font/google";
const font = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
  });

  const font2 = Work_Sans({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
  });

  
const InquiryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const inquiry = InquiryData.find((item) => item.id === parseInt(id));

  if (!inquiry) {
    return <div>Inquiry not found</div>;
  }


  return (
    <>
      <Banner title="Inquiry Details" />
      <div className="w-full sm:px-[4.8rem] smd:py-[6rem] py-[2rem] px-3">
        <div className={`flex flex-row px-3 ${font2.className}`}>
        <p className="text-black font-bold "> RFQ.No: </p>
        <p className='font-bold ml-2'>{inquiry.rfqNo}</p>
        </div>

        <div className="max-w-full h-auto md:h-auto bg-white mt-5 overflow-hidden rounded-md shadow-md">
          <div className="bg-[#1E7FCB] w-full h-8 flex justify-between items-center px-4">
            <p className="text-white font-medium">Buyer Information</p>
            <Link href="#" className="text-white">
              Download
            </Link>
          </div>

          <div className="px-4 font-medium text-base py-2 sm:py-6 grid grid-cols-1 sm:grid-cols-3 gap-y-3 mdd:gap-y-7 md:gap-x-4">
            <div className="flex ">
              <p className="text-black ">Buyer: </p>
              <p className="text-[#1E7FCB] ml-2">www.website.com</p>
            </div>
            <div className="flex">
              <p className="text-black ">Inquiry from: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.country}</p>
            </div>
            <div className="flex ">
              <p className="text-black ">Buyer Ref.No: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.buyerRefNo}</p>
            </div>
            <div className="flex ">
              <p className="text-black ">Delivery Date: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.deliveryDate}</p>
            </div>
            <div className="flex ">
              <p className="text-black ">Delivery Address: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.DeliveryAddress}</p>
            </div>
            <div className="flex ">
              <p className="text-black">Acceptable currency: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.currency}</p>
            </div>
            <div className="flex ">
              <p className="text-black ">Valid Date: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.validDate}</p>
            </div>
            <div className="flex ">
              <p className="text-black">RFQ No: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.rfqNo}</p>
            </div>
            <div className="flex ">
              <p className="text-black ">RFQ Date: </p>
              <p className="text-[#1E7FCB] ml-2">{inquiry.date}</p>
            </div>
          </div>
          <p className="px-4 py-6">
            <span className={`text-black font-[500] ${font.className} `}>Item:</span> {inquiry.item}
          </p>
        </div>
      </div>
      {inquiry && <CommentsSection comments={inquiry.Comments}/>}
    </>
  );
};

export default InquiryDetails;

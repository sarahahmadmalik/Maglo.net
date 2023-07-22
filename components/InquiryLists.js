import { Roboto } from "next/font/google";
import Link from 'next/link';
const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

function InquiryLists({ inquiries }) {
  return (
    <div className="w-full grid-row  sm:inline-grid grid-cols-2 items-center place-content-center px-4 sm:px-8 mdd:px-12 md:px-16 mb-3 ">
      {inquiries.map((data, id) => (
        <div
          key={id}
          className="max-w-[480px] h-[250px] md:h-auto bg-white mt-8 overflow-hidden rounded-md shadow-md"
        >
          <div className="bg-[#1E7FCB] w-full h-8 flex justify-between items-center px-4">
            <p className="text-white font-medium">Whimson International</p>
            <p className="text-white">10 Days Left</p>
          </div>

          <div className="px-4 font-medium text-base flex flex-col pt-3 gap-y-3">
            <p>
              Country: <span className="text-[#1E7FCB]">{data.country}</span>
            </p>

            <p>
              Brand: <span className="text-[#1E7FCB]">{data.brand}</span>
            </p>

            <p>
              Model: <span className="text-[#1E7FCB]">{data.model}</span>
            </p>

            <p className="pr-10">Item: {data.item}</p>
          </div>
          <div className={`flex justify-between items-center px-4 py-3 my-3 ${font.className}`}>
          <Link href={`/inquiry/${data.id}`}>
              <span className="px-4 py-2 bg-[#1E7FCB] text-white rounded">View & Quote</span>
            </Link>
            <div className="bg-[#E2E2E2] text-black rounded px-4 py-1">{data.date} {data.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InquiryLists;

import Image from 'next/image'
import {Work_Sans} from "next/font/google";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link'

const font = Work_Sans({
    subsets: ["latin"],
    weight: [
        "200",
        "300",
        "400",
        "500",
        "700",
        "800",
        "900"
    ]
});

const BlogCard = ({blog}) => {
    return (
        <div className="rounded-md flex flex-col justify-center shadow-md max-w-[480px]">
            <div className="relative w-full h-60 objectFit-contain">
                <Image src={
                        blog.image
                    }
                    alt='blog-image'

                    fill/>
                <div className={
                    `absolute bottom-0 left-[1.6rem] px-3 py-2 rounded-md mb-[-.6rem] text-black bg-[#F6BE00] font-medium ${
                        font.className
                    }`
                }>
                    <p>{
                        blog.subTitle
                    }</p>
                </div>
            </div>
            <div className='px-4'>
                <div className='my-4 ml-3 mr-5 text-[24px]'>
                    {
                    blog.title
                } </div>
                <div className=" flex flex-row justify-left overflow-hidden ml-3">
                    <div className='relative flex items-center  objectFit-contain'>
                        <Image src='/assets/date.png' alt='date'
                            width={20}
                            height={20}/>
                        <p className="ml-2 text-[#777777] text-sm">
                            {
                            blog.date
                        }</p>
                    </div>

                    <div className='relative flex items-center  objectFit-contain ml-[2rem]'>
                        <Image src='/assets/icon1.png' alt='date'
                            width={15}
                            height={15}/>
                        <p className="ml-2 text-[#777777] text-sm">
                            {
                            blog.author
                        }</p>
                    </div>
                </div>

                <div className='ml-3 my-4'>
                    <p>{
                        blog.content
                    }</p>
                </div>
                <Link href='/' className="inline-block relative text-black font-semibold group ml-3 mb-8">
                    <span className="">Learn More</span>
                    <span className="absolute bottom-0 left-0 w-[80%] h-[3px] bg-black rounded-[80px]"></span>
                    <ArrowForwardIcon sx={
                            {
                                fontSize: '1rem',
                                transform: 'translateY(1px)',
                                transition: 'transform 0.2s ease'
                            }
                        }
                        className="ml-1 transform-gpu group-hover:translate-x-1"/>
                </Link>


            </div>

        </div>
    );
};

export default BlogCard;

import { useRouter } from "next/router";
import blogsData from "../../data/Blogs";
import Banner from "../../components/Banner";
import CommentsSection from '../../components/CommentsSection'
import { Work_Sans } from "next/font/google";
import Image from "next/image";

const font = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id);
  const blog = blogsData.find((blog) => blog.id === parseInt(id));
  
  return (
    <div>
      <Banner title="Blogs" para="Blogs" />
      <main className="w-full h-full my-[3rem]  flex flex-col items-center">
        {blog && (
          <>
            <div className="flex flex-col smd:flex-row w-full h-full justify-center items-center">
              <div
                className={`px-3 py-2 rounded-md mb-[-.6rem] text-black mx-5 bg-[#F6BE00] font-medium ${font.className}`}
              >
                <p>{blog.subTitle}</p>
              </div>
              <div className='flex flex-row smd:my-3 mt-9'>
              <div className="relative flex items-center  objectFit-contain mx-5">
                <Image src="/assets/date.png" alt="date" width={20} height={20} />
                <p className="ml-2 text-[#777777] text-sm">{blog.date}</p>
              </div>
              <div className="relative flex items-center  objectFit-contain ml-[2rem] mx-5">
                <Image src="/assets/icon1.png" alt="date" width={15} height={15} />
                <p className="ml-2 text-[#777777] text-sm">{blog.author}</p>
              </div>
            </div>
            </div>
            <div className="my-5 ml-3 mr-5 smd:text-[20px] lg:text-[27px] text-[24px] text-center font-medium">{blog.title}</div>

            <div className="max-w-[800px] px-2 smd:px-0 h-full rounded-md shadow-md flex flex-col overflow-hidden">
              <div className="relative w-full h-[400px] overflow-hidden objectFit-cover">
                <Image src={blog.image} alt="blog-image" fill objectFit="cover" />
              </div>

              <div className="smd:ml-3 my-4 px-[1.3rem]">
                <p>{blog.content}</p>
                <p>{blog.content}</p>
              </div>

              <div className="flex items-center smd:mx-6 my-6 bg-[#E2EEF8] py-[1rem] px-[1.6rem] rounded-lg font-semibold text-sm">
                <div className="mr-2 hidden smd:block">
                  <Image src="/assets/colon.png" alt="colon" width={25} height={25} />
                </div>
                <div className='hidden smd:block'>
                  <Image src="/assets/colon.png" alt="colon" width={25} height={25} />
                </div>
                <div className="smd:ml-4">
                  <p>{blog.content}</p>
                </div>
              </div>

              <div className='mx-4 mx-2'>
                <div className="smd:mx-6 mb-3">
                  <p className={`font-semibold smd:text-[1.7rem] text-[1.3rem] ${font.className}`}>Why Choose Our Services</p>
                </div>
                <div className="smd:mx-6 mb-3">
                  <p>{blog.content}</p>
                </div>
                <div className="w-full h-full flex flex-col smd:flex-row mt-[2rem]">
                  <div className="relative w-full h-60 smd:mx-3 objectFit-contain">
                    <Image src="/assets/blogImg1.png" fill objectFit="contain" alt="blog-image" />
                  </div>
                  <div className="relative w-full h-60 smd:mx-3 objectFit-contain">
                    <Image src="/assets/blogImg2.png" fill objectFit="contain" alt="blog-image" />
                  </div>
                </div>
              </div>
              <div className='mx-7 my-6 text-left'>
                <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
                <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
                <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
                <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
                <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
              </div>
              <div className="mx-7 mb-3">
                  <p>{blog.content}</p>
                </div>
            </div>
            <CommentsSection wrapperStyles="max-w-[800px] my-6 h-full rounded-md shadow-md flex flex-col overflow-hidden" comments={blog.comments}/>
          </>
        )}
      </main>
    </div>
  );
}

export default BlogDetails;

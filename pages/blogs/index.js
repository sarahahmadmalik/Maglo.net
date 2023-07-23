import Banner from "../../components/Banner";
import BlogCard from "../../components/BlogCard";
import { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import blogsData from "../../data/Blogs";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

const font2 = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function blogs() {
  const popularTags = [
    "marine",
    "Spare",
    "Engine",
    "Ship",
    "Seller",
    "Buyer",
    "Spare",
    "Ship Engine",
  ];

  const itemsPerPage = 4;
  const totalPosts = blogsData.length;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const posts = blogsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = blogsData.length;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (totalPages - endPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>
      <Banner title="Blogs" para="Blogs" />
      <main className="grid md:grid-cols-3 gap-4 smd:mx-[2.4rem] mx-[1.8rem] mdd:mx-[4rem] my-5">
        {/* First Column */}
        <div className={`md:col-span-1 w-[67%] ${font.className}`}>
          {/* Recent Blogs Section */}
          <div className="hidden mdd:block bg-white p-4 shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
            {/* Add your recent blogs content here */}
          </div>

          {/* Popular Tags Section */}
          <div className="hidden mdd:block mt-4 bg-white p-4 shadow">
            <h2 className="text-lg font-semibold">Popular Tags</h2>
            <div className="flex justify-center flex-wrap">
              {popularTags.map((tag, index) => (
                <p
                  className={`cursor-pointer flex-grow align-center text-sm m-1 px-4 py-2 rounded-md bg-[#DFEBF5] ${font2.className}`}
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          {/* Blog Cards */}
          <div className="grid grid-cols-1 mdd:grid-cols-2 gap-4 justify-center">
            {posts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-[3rem] space-x-2 mb-[4rem]">
            {currentPage > 1 && (
              <button
                onClick={handlePrevious}
                className="text-[#1E7FCB] text-xl px-2 py-1 rounded-l bg-transparent border-none"
              >
                <img src="/assets/arrow-up.png" alt="Previous" />
              </button>
            )}
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-[#1E7FCB] text-white font-bold"
                    : "bg-white text-[#1E7FCB]"
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={handleNext}
                className="text-[#1E7FCB] text-xl px-2 py-1 rounded-r bg-transparent border-none"
              >
                <img src="/assets/arrow-down.png" alt="Next" />
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default blogs;

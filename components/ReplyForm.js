import React, { useState } from "react";
import { Work_Sans } from "next/font/google";

const font2 = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const ReplyForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      yourName: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className={` ${font2.className} text-[1.5rem] md:text-[1.6rem] xl:text-[1.9rem] font-bold mb-2`}>Leave a Reply</h2>
      <p className="mb-4 text-sm">
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              id="yourName"
              name="yourName"
              placeholder="Your Name"
              value={formData.yourName}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#E2EEF8] rounded text-sm"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-[#E2EEF8] rounded text-sm"
            />
          </div>
          <div className="flex-1">
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 bg-[#E2EEF8] rounded text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-2 bg-[#E2EEF8] rounded text-sm resize-none"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-black bg-[#F6BE00] rounded focus:outline-none"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;

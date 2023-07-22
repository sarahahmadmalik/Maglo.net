import { useState } from 'react';
import Image from "next/image";
const ReplyItem = ({ reply }) => {
  const { user, comments, day } = reply;

  return (
    <div className="flex items-start mt-2 pb-2">
    <div >
     <Image
          src={reply.profile}
          alt="Profile"
          width={60}
          height={50}
          className=" mr-2"
          style={{ objectFit: 'cover' }}
        />
        </div>
      <div>
        <div className="flex mb-1 text-sm font-bold"><p>{reply.user}</p> <p className="text-xs text-gray-500  ml-[1.6rem]">
            {reply.day}
          </p></div>
        <div>
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
};

const Comments = (props) => {
  const [visibleReplies, setVisibleReplies] = useState(2); // Number of replies initially visible

  const handleViewMoreReplies = () => {
    setVisibleReplies(props.eachComment.replies.length);
  };

  return (
    <div className="flex items-start my-3 mx-5">
      <div className="rounded-full">
        <Image
          src={props.eachComment.profile}
          alt="Profile"
          width={170}
          height={170}
          className=" mr-2"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="px-5 py-4 ">
        <div className="font-bold flex align-center">
          <p>{props.eachComment.user}</p>{' '}
          <p className="text-sm text-gray-500 ml-[1.6rem]">
            {props.eachComment.day}
          </p>
        </div>
        <div className="px-2 pb-8 rounded border-b border-[#E6D8D8]">
          <p>{props.eachComment.comment}</p>
        </div>
        {props.eachComment.replies.length > visibleReplies && (
          <button
            onClick={handleViewMoreReplies}
            className="mt-2 text-sm text-blue-500 focus:outline-none"
          >
            View More Replies
          </button>
        )}
        {props.eachComment.replies.slice(0, visibleReplies).map((reply, index) => (
          <ReplyItem key={index} reply={reply} />
        ))}

       
      </div>
    </div>
  );
};

export default Comments;

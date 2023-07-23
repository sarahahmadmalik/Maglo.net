import { useState } from 'react';
import Image from "next/image";
const ReplyItem = ({ reply }) => {
  const { user, comments, day } = reply;

  return (
    <div className="flex items-start mt-2 pb-2">
    <div className="relative aspect-square rounded-md w-full min-w-[30px] max-w-[50px] overflow-hidden mr-3">
        <Image
          src={reply.profile}
          alt="Profile"
          fill
          priority
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
      <div className="relative aspect-square rounded-full w-full min-w-[60px] max-w-[80px] mr-3">
        <Image
          src={props.eachComment.profile}
          alt="Profile"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="sm:px-5 sm:py-4 px-auto ">
        <div className="font-bold flex align-center justify-between">
          <p>{props.eachComment.user}</p>{' '}
          <p className="text-sm text-gray-500 sm:ml-[1.6rem]">
            {props.eachComment.day}
          </p>
        </div>
        <div className="sm:px-2 pb-8 rounded border-b border-[#E6D8D8]">
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

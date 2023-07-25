import { useState } from 'react';
import Image from "next/image";

const ReplyButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-black focus:outline-none ml-5">
      <div className="flex items-center text-sm">
        <div className="relative mr-1 w-3 h-3 px-2 py-2">
          <Image src="/assets/replyIcon.png" alt="Reply Icon" fill objectFit="contain" />
        </div>
        <p>Reply</p>
      </div>
    </button>
  );
};

const ReplyItem = ({ reply, wrapperStyles }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState([]);
const { user, comments, day } = reply;


const handleReplyClick = () => {
  setShowReplyInput(true);
};

const handleReplySubmit = () => {
  // Logic to submit the reply
  // For now, we just log the reply to the console
  console.log(newReply);
  setShowReplyInput(false);
  setNewReply('');
};
  return (
    <div className="flex items-start mt-2 pb-2 ">
    <div className="relative aspect-square rounded-md w-full min-w-[30px] max-w-[50px] overflow-hidden mr-3">
        <Image
          src={reply.profile}
          alt="Profile"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={wrapperStyles ? `rounded-md border border-grey-600 px-0 smd:px-4 py-5 overflow-hidden` : ``}>
        <div className="flex justify-between items-center w-full mb-1 text-sm font-bold">
          <div className='flex'><p>{reply.user}</p> <p className="text-xs text-gray-500  smd:ml-[1.6rem]">
            {reply.day}
          </p>
          </div>
          {!showReplyInput && <ReplyButton onClick={handleReplyClick} />}
          </div>
        <div>
          <p>{comments}</p>
        </div>
        <div className="flex w-full justify-end sm:items-center sm:justify-start sm:ml-[1.6rem] mt-[0.3rem]">
       
        {showReplyInput && (
          <div className="flex items-center w-full mr-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write your reply here..."
              className="w-full py-2 px-2 text-sm h-[70px] border rounded focus:outline-none resize-none mr-2"
            />
            <button
              onClick={handleReplySubmit}
              className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded focus:outline-none"
            >
              Submit
            </button>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
};

const Comments = (props) => {
  const [visibleReplies, setVisibleReplies] = useState(2); // Number of replies initially visible
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState([]);
  
const handleReplyClick = () => {
  setShowReplyInput(true);
};

const handleReplySubmit = () => {
 
  console.log(newReply);
  setShowReplyInput(false);
  setNewReply('');
};
  const handleViewMoreReplies = () => {
    setVisibleReplies(props.eachComment.replies.length);
  };

  return (
    <div className="flex items-start my-3 mx-5">
      <div className="relative aspect-square rounded-full  min-w-[60px] max-w-[80px] mr-3 sm:my-2 sm:mr-auto">
        <Image
          src={props.eachComment.profile}
          alt="Profile"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div>
      <div className={ props.wrapperStyles ? `sm:px-5 sm:py-4 px-auto border border-grey-600 rounded-lg mb-5` : `sm:px-5 sm:py-4 px-auto`}>
        <div className="w-full font-bold us:text-[14px] flex align-center justify-start sm:justify-between mb-3">
          <div className='flex '>
          <p>{props.eachComment.user}</p>{' '}
          <p className="text-sm text-gray-500 us:text-[14px] sm:ml-[1.6rem]">
            {props.eachComment.day}
          </p>
          </div>
          {!showReplyInput && <ReplyButton onClick={handleReplyClick} />}
        </div>
        <div className={ props.wrapperStyles ? `sm:px-2 pb-8 us:text-[15px]`: `sm:px-2 pb-8 us:text-[15px] rounded border-b border-[#E6D8D8]`}>
          <p>{props.eachComment.comment}</p>
        </div>
        <div className="flex w-full justify-end sm:items-center sm:justify-start sm:ml-[1.6rem] mt-[0.3rem]">
       
       {showReplyInput && (
         <div className="flex items-center w-full mr-4">
           <textarea
             value={newReply}
             onChange={(e) => setNewReply(e.target.value)}
             placeholder="Write your reply here..."
             className="w-full py-2 px-2 text-sm h-[70px] border rounded focus:outline-none resize-none mr-2"
           />
           <button
             onClick={handleReplySubmit}
             className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded focus:outline-none"
           >
             Submit
           </button>
         </div>
       )}
     </div>
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
          <ReplyItem wrapperStyles={props.wrapperStyles} key={index} reply={reply} />
        ))}

       
      </div>
    </div>
  );
};

export default Comments;

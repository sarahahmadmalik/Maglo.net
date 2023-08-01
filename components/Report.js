import { useState } from 'react';
import { useRouter } from 'next/router';

const Report = () => {
  const router = useRouter();
  const { commentId, commentUser } = router.query;
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const handleReport = () => {
    // Handle the reporting logic, e.g., submit the report
    console.log('Reported Comment ID:', commentId);
    console.log('Reported User:', commentUser);
    console.log('Reason:', reason);
    console.log('Other Reason:', otherReason);

    // You can implement your reporting logic here, e.g., send the report to the backend
    // Once the report is handled, you can redirect the user to the comments page or any other page
    // For now, we will just log the report data to the console
  };

  return (
    <div>
      <h1>Report Comment</h1>
      <p>Comment ID: {commentId}</p>
      <p>Comment User: {commentUser}</p>
      <p>Select Reason for Reporting:</p>
      <label>
        <input
          type="radio"
          value="Payment or Communication Outside Maglo"
          checked={reason === 'Payment or Communication Outside Maglo'}
          onChange={(e) => setReason(e.target.value)}
        />
        Payment or Communication Outside Maglo
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Behaved Inappropriately"
          checked={reason === 'Behaved Inappropriately'}
          onChange={(e) => setReason(e.target.value)}
        />
        Behaved Inappropriately
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Sent Spam"
          checked={reason === 'Sent Spam'}
          onChange={(e) => setReason(e.target.value)}
        />
        Sent Spam
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Other"
          checked={reason === 'Other'}
          onChange={(e) => setReason(e.target.value)}
        />
        Other
      </label>
      <br />
      {reason === 'Other' && (
        <textarea
          value={otherReason}
          onChange={(e) => setOtherReason(e.target.value)}
          placeholder="Please specify the reason..."
        />
      )}
      <br />
      <button onClick={handleReport}>Submit Report</button>
    </div>
  );
};

export default Report;

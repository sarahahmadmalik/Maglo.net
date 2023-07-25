import {useState} from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {useAuth} from "../../context/AuthProvider";
import {KeyboardArrowDown as KeyboardArrowDownIcon} from "@mui/icons-material";
import CommentsSection from '../../components/CommentsSection'
import Button from "../../components/shared/Button";
const BuyerDashboard = () => {
    const [activeButton, setActiveButton] = useState("inquiries");
    const [showMoreContent, setShowMoreContent] = useState(false);
    const [selectedInquiryIndex, setSelectedInquiryIndex] = useState(null);
    const {user, isLoggedIn} = useAuth();
    const [firstName, setFirstName] = useState(() => user ? user.firstName : "");
    const [lastName, setLastName] = useState(() => user ? user.lastName : "");
    const [email, setEmail] = useState(() => user ? user.email : "");
    const [phoneNumber, setPhoneNumber] = useState(()=> user? user.phone : "");
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');
    const[isSubmitted, setIsSubmitted] = useState(false);

 
    if (!user) {
        return <div>User not logged in</div>;
      }

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };


    const handleViewMore = (index) => {
        setSelectedInquiryIndex(index);
        setShowMoreContent(!showMoreContent);
    };

    const renderSelectedInquiryComments = () => {
        if (selectedInquiryIndex !== null) {
            const selectedInquiry = user.inquiries[selectedInquiryIndex];
            return <CommentsSection hide={true}
                comments={
                    selectedInquiry.Comments
                }/>;
        }
        return null;
    };

    const renderInquiriesContent = () => {
        return (
            <div> {
                user.inquiries.map((inquiry, index) => (
                    <>
                        <div key={index}
                            className=" flex-col rounded-md shadow-md mb-4 py-4 px-6 justify-between border border-grey-400">
                            <div className="flex">
                                <div className="flex flex-col w-[40%] justify-between">
                                    <div className="flex mb-2">
                                        <p>Country:
                                        </p>
                                        <p className="text-[#1E7FCB] ml-1">
                                            {
                                            inquiry.country
                                        }</p>
                                    </div>
                                    <div className="flex mb-2">
                                        <p>Brand:
                                        </p>
                                        <p className="text-[#1E7FCB] ml-1">
                                            {
                                            inquiry.brand
                                        }</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex">
                                        <p>Item:{
                                            inquiry.item
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-between items-start mb-2">
                                <div className="flex">
                                    <p>Model:
                                    </p>
                                    <p className="text-[#1E7FCB] ml-1">
                                        {
                                        inquiry.model
                                    }</p>
                                </div>
                                <button className=" text-black px-3 py-2 rounded-md focus:outline-none transition-colors duration-300"
                                    onClick={
                                        () => handleViewMore(index)
                                }>
                                    View More{" "}
                                    <span className={
                                            `${
                                                selectedInquiryIndex === index && showMoreContent ? "transform rotate-180" : ""
                                            } inline-block`
                                        }
                                        style={
                                            {color: "[#1E7FCB]"}
                                    }></span>
                                    <KeyboardArrowDownIcon className={
                                        `${
                                            selectedInquiryIndex === index && showMoreContent ? "transform rotate-180" : ""
                                        } inline-block`
                                    }/>
                                </button>
                            </div>
                        </div>
                        {
                        selectedInquiryIndex === index && showMoreContent && renderSelectedInquiryComments()
                    } </>
                ))
            } </div>

        )
    };

    const renderCommentRecordContent = () => {
        return <div>Comment Record Content</div>;
    };

    const renderOrdersContent = () => {
        return (
            <div className="shadow-md border border-grey-400 rounded-md px-3 py-5">
                <table className="w-full">
                    <thead>
                        <tr className="">
                            <th className="py-2 pb-6">OrderId</th>
                            <th className="py-2 pb-6">Order</th>
                            <th className="py-2 pb-6">Delivery Date</th>
                            <th className="py-2 pb-6">Delivery Pricing</th>
                            <th className="py-2 pb-6">Delivery Status</th>
                            <th className="py-2 pb-6">Payment</th>
                        </tr>
                    </thead>
                    <tbody> {
                        user.orders.map((order, index) => (
                            <tr key={index}
                                className={
                                    `border-b ${
                                        index === 0 ? 'border-t' : ''
                                    } mx-4`
                            }>
                                <td className="py-5 text-center text-gray-400">
                                    {
                                    order.orderId
                                }</td>
                                <td className="py-2 text-center text-gray-400">
                                    {
                                    order.orderName
                                }</td>
                                <td className="py-2 text-center text-gray-400">
                                    {
                                    order.deliveryDate
                                }</td>
                                <td className="py-2 text-center text-gray-400">
                                    {
                                    order.deliveryPricing
                                }</td>
                                <td className="py-2">
                                    <span className={
                                        `text-center inline-block w-full py-1 px-2 rounded-md ${
                                            order.status === "Completed" ? "bg-[#C7F4D1] text-black" : order.status === "Cancelled" ? "bg-[#FFB8C5] text-black" : "bg-yellow-100 text-black"
                                        }`
                                    }>
                                        {
                                        order.status
                                    } </span>
                                </td>
                                <td className="py-2 text-center text-gray-400">
                                    {
                                    order.payment
                                }</td>
                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        );
    };
    const renderLoggedOutMessage = () => {
        return (
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <p className="text-lg font-semibold text-gray-500">You're logged out. Please log in to access the dashboard.</p>
            </div>
        );
    };

    const renderAccountSettingContent = () => {
      
        const handleSubmit = (event) => {
          // Perform form submission logic here
      
          // Display success message
         
        };
      
        return (
            <div className="rounded-md shadow-md border border-grey-400 px-6 py-5 overflow-hidden">
            <h1 className="font-semibold text-lg mb-4 ml-4">Personal Information</h1>
            {isSubmitted ? (
              <div className="mb-4 text-green-500">Changes successfully saved!</div>
            ) : (
              <form className="font-inter w-full px-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4 w-[100%]">
                  <div className="w-full flex">
                    <div className="w-1/2 pr-2">
                      <label className="text-xs font-medium" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="text-xs font-medium" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
          
                  <div className="w-full flex">
                    <div className="w-1/2 pr-2">
                      <label className="text-xs font-medium" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="text-xs font-medium" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
          
                  <div className="w-full flex">
                    <div className="w-1/2 pr-2">
                      <label className="text-xs font-medium" htmlFor="newPassword">
                        Create New Password
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="text-xs font-medium" htmlFor="repeatNewPassword">
                        Repeat New Password
                      </label>
                      <input
                        type="password"
                        id="repeatNewPassword"
                        name="repeatNewPassword"
                        value={repeatNewPassword}
                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                        className="text-xs font-medium w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
          
                <div className="mt-4">
                  <Button text='Submit' linkTo=''/>
                </div>
              </form>
            )}
          </div>
          
          
        );
      };
      

    const renderContent = () => {
        switch (activeButton) {
            case "inquiries":
                return renderInquiriesContent();
            case "commentRecord":
                return renderCommentRecordContent();
            case "orders":
                return renderOrdersContent();
            case "accountSetting":
                return renderAccountSettingContent();
            default:
                return null;
        }
    };

    return (
        <div>
            <Header/> {
            user && isLoggedIn ? (
                <div className="w-[100vw] h-full flex justify-center items-center">
                    <div className="flex w-full h-full mx-[3rem] my-2 mb-3">
                        <div className="flex flex-col w-[20%] h-[470px] bg-[#DEF1FF66] rounded-md">
                            <div className="p-7">
                                <h1 className="font-semibold text-lg">My Account</h1>
                            </div>
                            <div className="flex flex-col text-left">
                                <button className={
                                        `text-left border-b border-t border-[#C8E1F5] px-7 py-3 ${
                                            activeButton === "inquiries" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("inquiries")
                                }>
                                    Inquiries
                                </button>
                                <button className={
                                        `text-left border-b border-[#C8E1F5] px-7 py-3 ${
                                            activeButton === "commentRecord" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("commentRecord")
                                }>
                                    Comment Record
                                </button>
                                <button className={
                                        `text-left border-b border-[#C8E1F5] px-7 py-3 ${
                                            activeButton === "orders" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("orders")
                                }>
                                    Orders
                                </button>
                                <button className={
                                        `text-left border-b border-[#C8E1F5] px-7 py-3 ${
                                            activeButton === "accountSetting" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("accountSetting")
                                }>
                                    Account Setting
                                </button>
                            </div>
                        </div>

                        <div className="w-[80%]  h-full overflow-hidden mx-5">

                            {
                            renderContent()
                        } </div>
                    </div>
                </div>
            ) : renderLoggedOutMessage()
        }
            <Footer/>
        </div>
    );
};

export default BuyerDashboard;

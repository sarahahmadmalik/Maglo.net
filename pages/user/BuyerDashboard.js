import {useState} from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {useAuth} from "../../context/AuthProvider";
import {KeyboardArrowDown as KeyboardArrowDownIcon} from "@mui/icons-material";
import CommentsSection from '../../components/CommentsSection'
import Button from "../../components/shared/Button";
import { useRouter } from "next/router";
import {OrderProvider} from '../../context/OrderContext'
import { useOrderContext } from "../../context/OrderContext";

const BuyerDashboard = () => {
  const router = useRouter();
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
    const { setSelectedOrder } = useOrderContext();

    const showOrderDetails = (order) => {
      setSelectedOrder(order)
      router.push({
        pathname: `/user/OrderDetails`,
        query: {id: order.id, orderId: order.orderId, status: order.status, subtotal: order.subtotal, storeCredit:order.storeCredit, shipping: order.shipping, total:order.total,  deliverDate:order.deliverDate, address:order.address, name:order.orderName }, 
      });
    }
 
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
    const placeOrder = (commentId, commentUser) => {
      const inquiry = user.inquiries.filter((inquiry) => inquiry.id === selectedInquiryIndex )
      const orderData = {
        commentUser,
        inquiry,

      };

      
  
      router.push({
        pathname: `/user/CheckOut`,
        query: orderData,
      });
    }
    
    const renderSelectedInquiryComments = () => {
        if (selectedInquiryIndex !== null) {
            const selectedInquiry = user.inquiries[selectedInquiryIndex];
            return <CommentsSection hide={true}
                comments={
                    selectedInquiry.Comments
                } placeorder="Place an order" orderFunction={placeOrder}/>;
        }
        return null;
    };

    const renderInquiriesContent = () => {
        return (
            <div className=' w-full '> {
                user.inquiries.map((inquiry, index) => (
                    <>
                        <div key={index}
                            className=" flex-col rounded-md shadow-md mb-4 py-4 px-6 justify-between border border-grey-400">
                            <div className="flex smd:flex-row flex-col" >
                                <div className="flex flex-row flex-wrap smd:flex-col smd:w-[40%] w-full justify-between">
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
                                    <div className="flex">
                                    <p>Model:
                                    </p>
                                    <p className="text-[#1E7FCB] ml-1">
                                        {
                                        inquiry.model
                                    }</p>
                                </div>
                                </div>
                                <div>
                                    <div className="mt-3 smd:mt-0">
                                        <p>Item:{
                                            inquiry.item
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end items-start mt-3 smd:mt-0 mb-2">
                               
                                <button className=" text-black px-3 py-4 rounded-md focus:outline-none transition-colors duration-300"
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
          <div className="w-full flex-1 flex shadow-md border border-grey-400 rounded-md px-3 py-5 overflow-x-auto ">
            <table className="w-full ">
              <thead>
                <tr className="">
                  <th className="py-2 smd:pb-6 smd:text-[16px] text-[13px]">OrderId</th>
                  <th className="py-2 smd:pb-6 smd:text-[16px] text-[13px]">Order</th>
                  <th className="py-2 smd:pb-6 smd:text-[16px] text-[13px]">Delivery Date</th>
                  <th className="py-2 smd:pb-6 smd:text-[16px] text-[13px]">Delivery Pricing</th>
                  <th className="py-2 smd:pb-6 smd:text-[16px] text-[13px]">Delivery Status</th>
                  <th className="py-2 smd:pb-6  smd:text-[16px] text-[13px]">Payment</th>
                  <th className="py-2 smd:pb-6  smd:text-[16px] text-[13px]"></th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order, index) => (
                  <tr
                    key={index}
                    className={`border-b text-[10px] smd:text-[16px] ${index === 0 ? "border-t" : ""} mx-4`}
                  >
                    <td className="py-2 text-center text-gray-400">
                      {order.orderId}
                    </td>
                    <td className="py-2 text-center text-gray-400">{order.orderName}</td>
                    <td className="py-2 text-center text-gray-400">{order.deliveryDate}</td>
                    <td className="py-2 text-center text-gray-400">{order.deliveryPricing}</td>
                    <td className="py-2">
                      <span
                        className={`text-center inline-block w-full py-1 px-2 rounded-md ${
                          order.status === "Completed"
                            ? "bg-[#C7F4D1] text-black"
                            : order.status === "Cancelled"
                            ? "bg-[#FFB8C5] text-black"
                            : "bg-yellow-100 text-black"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 text-center text-gray-400">{order.payment}</td>
                    <td className="py-2 text-center text-black"> <button
    className="py-1 px-4 text-[#1E7FCB] rounded border-2 border-transparent transition-all duration-300 hover:[#389EEE]  hover:underline focus:outline-none"
    onClick={() => showOrderDetails(order)}
  >
    View
  </button></td>
                  </tr>
                ))}
              </tbody>
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
         event.preventDefault()
        };
      
        return (
            <div className="rounded-md shadow-md border border-grey-400 px-10 py-5 overflow-hidden  md:h-[582px]">
            <h1 className="font-semibold text-lg mb-4 ml-4">Personal Information</h1>
            {isSubmitted ? (
              <div className="mb-4 text-green-500">Changes successfully saved!</div>
            ) : (
              <form className="font-inter w-full px-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap smd:gap-4 gap-1 w-[100%]">
                  <div className="w-full smd:flex flex-col smd:flex-row">
                    <div className="smd:w-1/2 w-full bordersmd:pr-2 mb-2">
                     <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        First Name
                      </label>
                     </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="smd:w-1/2 w-full smd:pl-2 mb-2">
                    <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        Last Name
                      </label>
                     </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
          
                  <div className="w-full smd:flex smd:flex-row flex-col">
                    <div className="smd:w-1/2 w-full smd:pr-2 mb-2 smd:mb-0">
                    <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        Email Address
                      </label>
                     </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="smd:w-1/2 w-full smd:pl-2 mb-2 smd:mb-0">
                    <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        Phone Number
                      </label>
                     </div>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
          
                  <div className="w-full smd:flex smd:flex-row flex-col">
                    <div className="smd:w-1/2 w-full smd:pr-2 mb-2 smd:mb-0">
                    <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        Create New Password
                      </label>
                     </div>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                    <div className="smd:w-1/2 w-full smd:pl-2 smd:mb-0 mb-2">
                    <div className="mb-2">
                     <label className="text-[16px]  font-medium" htmlFor="firstName">
                        Repeat New Password
                      </label>
                     </div>
                      <input
                        type="password"
                        id="repeatNewPassword"
                        name="repeatNewPassword"
                        value={repeatNewPassword}
                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                        className="text-[16px] font-normal w-full border border-[#A4CCEC] bg-[#EBF3FA] px-4 py-2 rounded focus:border-[#1E7FCB] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
          
                <div className="mt-10">
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
      <OrderProvider>
        <div>
            <Header/> 
            <div className="xl:mx-4 mx-auto mt-8 mb-20 mr-3 md:mr-0 ">
            {
            user && isLoggedIn ? (
                <div className="w-[100vw]  flex-col smd:flex justify-center items-center">
                    <div className="smd:flex smd:flex-row smd:justify-center flex-col w-full h-full my-2 mb-3">
                        <div className=" smd:flex-col w-full smd:w-[20%] smd:h-[400px] md:h-[582px] flex flex-row mx-4  mb-4 bg-[#DEF1FF66] rounded-md">
                            <div className="smd:p-7 p-3 hidden smd:block"> 
                                <h1 className="font-semibold text-lg">My Account</h1>
                            </div>
                            <div className="flex smd:flex-col justify-center text-left w-full">
                                <button className={
                                        `text-left smd:text-[16px] text-[14px] font-medium smd:border-b smd:border-t border-[#C8E1F5] px-3 smd:px-7 smd:py-3 ${
                                            activeButton === "inquiries" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("inquiries")
                                }>
                                    Inquiries
                                </button>
                               
                                <button className={
                                        `text-left  smd:text-[16px] text-[14px]  font-medium border-l smd:border-l-0 smd:border-b border-[#C8E1F5] px-7 py-3 ${
                                            activeButton === "orders" ? "bg-[#1E7FCB] text-white" : ""
                                        }`
                                    }
                                    onClick={
                                        () => handleButtonClick("orders")
                                }>
                                    Orders
                                </button>
                                <button className={
                                        `text-left  smd:text-[16px] text-[14px] font-medium border-l smd:border-l-0 smd:border-b border-[#C8E1F5] px-4 md:px-7 py-3 ${
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

                        <div className="smd:w-[80%]  w-full xl:w-[50%] flex flex-col items-center  h-full overflow-hidden px-3 smd:mx-5">
                            {
                            renderContent()
                        } </div>
                    </div>
                </div>
            ) : renderLoggedOutMessage()
        }

            </div>
            <Footer/>
        </div>
        </OrderProvider>
    );
};

export default BuyerDashboard;

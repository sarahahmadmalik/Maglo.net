import {useState} from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {useAuth} from "../../context/AuthProvider";
import {KeyboardArrowDown as KeyboardArrowDownIcon} from "@mui/icons-material";
import CommentsSection from '../../components/CommentsSection'
const BuyerDashboard = () => {
    const [activeButton, setActiveButton] = useState("inquiries");
    const [showMoreContent, setShowMoreContent] = useState(false);
    const [selectedInquiryIndex, setSelectedInquiryIndex] = useState(null);
    const {user, isLoggedIn} = useAuth();


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
        return <div>Account Setting Content</div>;
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

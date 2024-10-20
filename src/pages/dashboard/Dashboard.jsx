import { CardItems } from "../../common/db";
import Search from "../../components/Search";
import Card from "./Card";
import { IoClose } from "react-icons/io5";
import ChatBox from "./ChatBox";
import { useState } from "react";

const Dashboard = () => {
  const [chat, setChat] = useState(false);
  const handleChat = () => {
    setChat(!chat);
  };
  return (
    <>
      <Search welcome="welcome back" heading="Dashboard" button="Cypher AI" />
      <section className="pb-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 p-10">
          {CardItems.map((cardDetails, i) => (
            <Card key={i} {...cardDetails} />
          ))}
        </div>

        {/* <button
        className="bg-orange text-white md:w-[77px] w-[57px] md:h-[77px] h-[57px] rounded-full inline-flex justify-center items-center bottom-2 right-4 fixed hover:cursor-pointer font-bold text-[55px] font-white font-babesNeue z-[9999] hover:scale-95 transition-all duration-500"
        onClick={handleChat}
      >
        {chat ? <IoClose /> : "C"}
      </button> */}

        <button
          className={`${
            chat ? "bg-transparent text-gray-500" : "bg-orange text-white"
          } md:w-[77px] w-[57px] md:h-[77px] h-[57px] rounded-full inline-flex justify-center items-center bottom-2 right-4 fixed hover:cursor-pointer font-bold text-[55px] font-white font-babesNeue z-[9999] hover:scale-95 transition-all duration-500`}
          onClick={handleChat}
        >
          {chat ? <IoClose className="text-gray-500" /> : "C"}
        </button>
        {/* chatBox  */}
        <div className="fixed  right-[47px] bottom-[80px]">
          {chat ? <ChatBox /> : null}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

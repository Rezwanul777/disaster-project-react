import { CiCamera } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go"
import Button from "../../common/Button";

const ChatBox = () => {
    return (
      <>
        <div className="bg-zinc-50 shadow-sm shadow-sky-300 rounded-[12px] lg:w-[331px] md:w-[285px] w-[250px] ms-0">
          <div className="bg-orange rounded-t-[12px] lg:p-5 p-2">
            <h1 className="w-full font-bold text-[18px] text-zinc-50 tracking-[-1%]">
              Chat with Cypher
            </h1>
          </div>
  
          <div>
            <div className="flex flex-col items-end">
              <div className="bg-[#3F3F46] rounded-[7px] lg:w-[213px] md:w-[185px] w-[150px] lg:px-4 px-2 lg:py-2 py-1 lg:my-2 my-1 lg:ms-3 ms-1">
                <p className="text-12 leading-5 text-white">
                  Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-zinc-50 border border-[#E4E4E7] rounded-[7px] lg:w-[213px] md:w-[185px] w-[150px] lg:px-4 px-2 lg:py-2 py-1 lg:my-2 my-1 lg:ms-3 ms-1">
                <p className="text-12 leading-5 text-grayBold">
                  Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-zinc-50 border border-[#E4E4E7] rounded-[7px] lg:w-[213px] md:w-[185px] w-[150px] lg:px-4 px-2 lg:py-2 py-1 lg:my-2 my-1 lg:ms-3 ms-1">
                <p className="text-12 leading-5 text-grayBold">
                  Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-[#3F3F46] rounded-[7px] lg:w-[213px] md:w-[185px] w-[150px] lg:px-4 px-2 lg:py-2 py-1 lg:my-2 my-1 lg:ms-3 ms-1">
                <p className="text-12 leading-5 text-white">
                  Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-6 flex justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Enter your question..."
              className="border border-[#E5E7EB] lg:w-[301px] md:w-[270px] w-[235px] px-[10px] py-3 rounded-md bg-[#F3F4F6] hover:shadow-sm focus:outline-emerald-300 text-12 text-grayBold"
            />
          </div>
  
          <div className="flex md:justify-between justify-around items-center gap-3 mx-3 mt-3 pb-4">
            <div className="flex gap-2 items-center">
              <CiCamera className="hover:cursor-pointer md:w-6 w-4 md:h-6 h-4 text-grayBold" />
                    <IoImageOutline className='text-[20px] text-[#71717A] cursor-pointer hover:scale-105 transition-transform' />
               <GoPaperclip className='text-[20px] text-[#71717A] cursor-pointer hover:scale-105 transition-transform'/>
              
            </div>
            <Button className="rounded-full md:h-7 h-6 md:w-20 w-16">
              Send
            </Button>
          </div>
        </div>
      </>
    );
  };

export default ChatBox
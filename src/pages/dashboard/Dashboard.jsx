import { CardItems } from "../../common/db"


const Dashboard = () => {
  return (
   <>

<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 p-4">
        {CardItems.map((cardDetails, i) => (
          <Card key={i} {...cardDetails} />
        ))}
      </div>

      <button
        className="bg-orange text-white md:w-[77px] w-[57px] md:h-[77px] h-[57px] rounded-full inline-flex justify-center items-center bottom-4 right-4 fixed hover:cursor-pointer font-bold text-[55px] font-white font-babesNeue z-[9999] hover:scale-95 transition-all duration-300"
        onClick={handleChat}
      >
        {chatOpen ? <IoClose /> : "C"}
      </button>
      {/* chatBox component */}
      <div className="fixed top-0 right-4">{chatOpen ? <ChatBox /> : null}</div>
   
   </>
  )
}

export default Dashboard
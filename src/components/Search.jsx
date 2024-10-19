/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { cn } from "../common/lib/utils/cn"
import { IoIosSearch } from "react-icons/io";
import Button from "../common/Button";

const Search = ({ welcome, heading, button, img, className }) => {
    const navigate = useNavigate();
  const condition = () => {
    if (button === "+ New Incidents") {
      navigate("/incidents/stepbar");
    } else {
      return null;
    }
  };
  return (
    <section className="bg-whiteLight lg:py-6 py-3">
    <div className="flex md:flex-row flex-col justify-between items-center mx-20">
      <div>
        <p className="text-12 text-grayBold">{welcome}</p>
        <h1
          className={cn(
            "text-[26px] font-bold text-blackBold",
            img && "flex justify-center items-center gap-3",
            className
          )}
        >
          <img src={img} />
          {heading}
        </h1>
      </div>
      <div>
        <form className="flex md:flex-row flex-col gap-3">
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search incident"
              className="py-2 px-6 rounded-[6px] text-12 text-grayBold w-40 md:w-48 h-10 focus:outline-none focus:shadow-inner focus:shadow-sky-300 transition-all duration-300"
            />
            <IoIosSearch className=" absolute top-[10px] left-1 text-zinc-500 h-5 w-5" />
          </div>

          <input
            type="text"
            placeholder="sort by: Date modified"
            className="md:w-48 w-40 h-10 py-2 px-6 rounded-[6px] text-12 text-grayBold focus:outline-none focus:shadow-inner focus:shadow-sky-300 transition-all duration-300"
          />
          <Button className="mx-auto" handleChange={condition}>
            {button}
          </Button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Search
/* eslint-disable react/prop-types */

import { IoIosClose } from "react-icons/io";
import Button from "../../common/Button";

const NewIncident = ({
    button,
    btnBack,
    welcome,
    heading,
    onClick,
    stepBack,
  }) => {
    return (
      <section className="bg-whiteLight lg:py-6 py-3">
        <div className="flex md:flex-row flex-col justify-between items-center mx-20 gap-3">
          <div className="flex items-center gap-3">
            <div>
              <IoIosClose className="text-4xl bg-white rounded-full" />
            </div>
            <div>
              <p className=" text-12 text-grayBold">{welcome}</p>
              <h1 className=" text-[26px] font-bold text-blackBold">{heading}</h1>
            </div>
          </div>
          <div className="lg:w-[527px] md:w-[475px] sm:w-[327px] w-[227px] bg-gray-300 h-[5px] rounded-full">
            <div className="bg-orange lg:w-[200px] md:w-[160px] sm:w-[100px] w-[70px] h-[5px] rounded-full"></div>
          </div>
          <div className="flex">
            <Button
              className="mx-auto me-3 bg-[#FAFAFA] border-[#D4D4D8] !text-grayBold hover:!text-white"
              handleChange={stepBack}
            >
              {btnBack}
            </Button>
            <Button handleChange={onClick} className="mx-auto">
              {button}
            </Button>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewIncident;
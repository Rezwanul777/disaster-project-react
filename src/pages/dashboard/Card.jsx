/* eslint-disable react/prop-types */
import { cn } from "../../common/lib/utils/cn";


const Card = ({ img, title, description, amount, className, imgClass }) => {
    return (
      <div
        className={cn(
          "flex flex-col w-fit m-2 rounded-lg p-3 gap-1 shadow-inner shadow-sky-200 hover:cursor-pointer hover:scale-105 transition-all duration-300",
          className
        )}
      >
        <img src={img} alt={title} className={cn("rounded-lg", imgClass)} />
        <div>
          <h3 className="font-bold text-base leading-8 text-blackBold">
            {title}
          </h3>
          <p className="text-grayBold text-14 leading-7">{description}</p>
          <p className="font-bold text-base text-blackBold leading-8">{amount}</p>
        </div>
      </div>
    );
  };
  

export default Card
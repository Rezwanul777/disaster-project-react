/* eslint-disable react/prop-types */

import { cn } from "../../common/lib/utils/cn";

const NewIncidentsCard = ({ img, title, onClick, isActive }) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          "inline-flex justify-start items-center gap-2 w-44 p-3 bg-whiteLight border border-gray-300 rounded-md hover:cursor-pointer hover:bg-orange transition-all duration-300 group",
          isActive && "bg-orange"
        )}
      >
        <img src={img} alt={title} />
        <p
          className={cn(
            "text-14 font-onest group-hover:text-white text-grayBold",
            isActive && "text-white"
          )}
        >
          {title}
        </p>
      </button>
    );
  };
  
  export default NewIncidentsCard;
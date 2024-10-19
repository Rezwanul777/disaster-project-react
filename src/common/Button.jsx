import { cn } from "./lib/utils/cn";

/* eslint-disable react/prop-types */
const Button = ({ children, className, handleChange }) => {
    return (
      <button
        type="button"
        onClick={handleChange}
        className={cn(
          "w-[108px] h-[42px] bg-orange rounded-[6px] !text-zinc-50 hover:text-white hover:bg-amber-600 transition-all duration-500 text-12 font-bold",
          className
        )}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
/* eslint-disable react/prop-types */
const IncidentBarCard= ({ img, title, describe }) => {
    return (
      <div>
        <div className="bg-[#E4E4E7] w-[235px] lg:p-4 p-3 mx-auto rounded-xl shadow-inner shadow-sky-300">
          <div className="mb-16">
            <img src={img} alt={title} />
          </div>
          <h3 className="font-bold text-xl leading-7 text-blackBold mb-4">
            {title}
          </h3>
          <p className="text-14 text-grayBold leading-5">{describe}</p>
        </div>
      </div>
    );
  };
  
  export default IncidentBarCard;
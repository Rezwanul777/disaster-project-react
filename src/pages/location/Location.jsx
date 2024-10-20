import { FaLocationDot } from "react-icons/fa6";
import Search from "../../components/Search";
import Card from "../dashboard/Card";
import { locationItems, locationsData, locationsDocs } from "../../common/db";
import treePng from "../../assets/images/tree.png";
import locationIcon from "../../assets/images/location-icon.png";
import locationMap from "../../assets/images/location-map.png";

import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Location = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 ,
      offset: 100,     
      easing: 'ease-in-out'  
  }); },[]);
  return (
    <div>
      <Search
        welcome="Incidents - DR-4699 March 2023 Severe Storms "
        heading="DR-4699 March 2023 Severe Storms"
        button="+ New Location"
        img={treePng}
        className={"md:text-2xl text-base"}
      />
      {/* data details */}
      <div className="flex md:flex-row flex-col md:justify-around justify-center md:items-start items-center my-12 gap-3 w-full">
        <div className="flex flex-col justify-start md:ms-16 ms-0 items-start gap-3 md:w-1/2 w-full">
          <div className="flex justify-center items-center gap-4">
            <FaLocationDot className="bg-whiteLight text-grayBold rounded-full md:w-10 w-7 md:h-10 h-7 px-2 py-1" />

            <div>
              <p className="text-14 text-grayBold leading-6">location</p>
              <h1 className="font-bold text-xl text-blackBold md:leading-7 leading-5">
                Tulare County, Los Angles, CA 23415
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <img
              src={locationIcon}
              alt=""
              className="bg-whiteLight text-grayBold rounded-full md:w-10 w-7 md:h-10 h-7 px-2 py-1"
            />
            <div>
              <p className="text-14 text-grayBold leading-6">Approx. Cost:</p>
              <h1 className="font-bold text-xl text-blackBold md:leading-7 leading-5">
                $60,607,456.00
              </h1>
            </div>
          </div>
          <hr className="w-full bg-whiteLight h-[2px] my-8" />
          <div className="md:ms-0 ms-5">
            <h1 className="font-bold text-black text-14 leading-6 ">
              Description
            </h1>
            <p className="text-base text-grayBold leading-6">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>
          <hr className="w-full bg-whiteLight h-[2px] my-8" />
          <div className="w-full">
            <div className="flex md:justify-between justify-around">
              <h3 className="text-14 text-blackBold leading-6 font-bold">
                Location
              </h3>
              <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                see all
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center">
              {locationItems.map(({ img, title, description, amount }, i) => (
                <Card
                  key={i}
                  img={img}
                  title={title}
                  description={description}
                  amount={amount}
                />
              ))}
            </div>
            <hr className="w-full bg-whiteLight h-[2px] my-8" />
            <div>
              <div className="flex md:justify-between justify-around">
                <h3 className="text-14 text-blackBold leading-6 font-bold">
                  activities
                </h3>
                <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                  see all
                </p>
              </div>
              {/* location data part */}
              <div>
                {locationsData.map(
                  ({ img, title, locationName, amount }, i) => (
                    <Card
                      key={i}
                      img={img}
                      title={title}
                      description={locationName}
                      amount={amount}
                      imgClass={"w-[78px] h-[78px]"}
                      className={
                        "flex flex-row justify-start items-center gap-3 bg-whiteLight md:w-full w-[90%] mx-auto"
                      }
                    />
                  )
                )}
              </div>
            </div>
            <hr className="w-full bg-whiteLight h-[2px] my-8" />
            <div>
              <div className="flex md:justify-between justify-around">
                <h3 className="text-14 text-blackBold leading-6 font-bold">
                  Documents
                </h3>
                <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                  see all
                </p>
              </div>
              {/* location docs part */}
              <div>
                {locationsDocs.map(
                  ({ img, title, locationName, amount }, i) => (
                    <Card
                      key={i}
                      img={img}
                      title={title}
                      description={locationName}
                      amount={amount}
                      imgClass={"w-[78px] h-[78px]"}
                      className={
                        "flex flex-row justify-start items-center gap-3 bg-whiteLight md:w-full w-[90%] mx-auto"
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Google Map part */}
        <div className="md:w-1/2 ms-5 w-[90%] flex flex-col justify-center items-start" >
          <p className="text-14 leading-6 text-grayBold mb-5">Incident Map</p>
          <img src={locationMap} alt="" data-aos="fade-left"/>
          <p className="text-14 leading-6 text-grayBold mb-5">
            Start 19.1232, -118.233 End 19.3245, -119.2323
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
import { useNavigate } from "react-router-dom";
import NewIncident from "./NewIncident";
import { IoIosSearch } from "react-icons/io";
import googleMap from "../../assets/images/google-map.png";

const NewIncidentLocation = () => {
    const navigate = useNavigate();
    const stepBack = () => {
      navigate("/incidents/incidentBar/newIncidents/nextPartIncidents");
    };
    const finished = () => {
      navigate("/Location");
    };
    return (
      <div>
        <NewIncident
          button="Finished"
          btnBack="Back"
          welcome="Home - incidents - NewIncidents"
          heading="Incidents"
          onClick={finished}
          stepBack={stepBack}
        />
        <div className="flex flex-col justify-center items-center gap-4 my-6 md:mx-0 mx-5">
          <div className="md:-ms-10 ms-0 ">
            <h1 className="font-bold text-2xl text-blackBold ">
              Where&apos;s the incident?
            </h1>
            <p className="text-14 leading-5 text-grayBold">
              Enter a GPS, address. or pin point on the map. Try to be as accurate
              as possible, or click:Jurisdiction Wide
            </p>
          </div>
          <div className="relative">
            <img src={googleMap} alt="google-map" />
            <div className="flex flex-col gap-2 absolute top-3 left-3 z-[9999]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter incident address or GPS"
                  className="bg-whiteLight px-6 py-2 rounded-md focus:outline-none focus:shadow-inner focus:shadow-sky-300 text-grayBold text-14"
                />
                <IoIosSearch className=" absolute top-2 left-0 size-5 text-grayBold" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pinpoint damage"
                  className="bg-whiteLight px-6 py-2 rounded-md focus:outline-none focus:shadow-inner focus:shadow-sky-300 text-grayBold text-14"
                />
                <IoIosSearch className=" absolute top-2 left-0 size-5 text-grayBold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewIncidentLocation
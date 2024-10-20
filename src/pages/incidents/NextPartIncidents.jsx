import { useNavigate } from "react-router-dom";
import NewIncident from "./NewIncident";


const NextPartIncidents = () => {
    const navigate = useNavigate();
    const handle = () => {
      navigate("/incidents/incidentBar/newIncidents");
    };
    const nextStep = () => {
      navigate("/incidents/incidentBar/newIncidents/nextPartIncidents/location");
    };
    return (
      <div>
        <NewIncident
          button="Next step"
          btnBack="Back"
          welcome="Home - incidents - NewIncidents"
          heading="Incidents"
          onClick={nextStep}
          stepBack={handle}
        />
        <div className="flex flex-col justify-center items-center my-10 gap-8">
          <div className="md:w-1/2 w-[90%] flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold text-blackBold ">
                Let&apos;s give the incident a title?
              </h1>
              <p className="text-14 leading-5 text-grayBold">
                Make a title that will easily identify the incidents
              </p>
            </div>
            <input
              type="text"
              placeholder="Add title here"
              className="bg-whiteLight border border-gray-300 px-6 py-4 rounded-lg w-full focus:outline-none focus:shadow-inner focus:shadow-green-300 transition-all duration-300 text-12"
            />
          </div>
          <div className="md:w-1/2 w-[90%] flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold text-blackBold ">
                Describe what happened during the incident?
              </h1>
              <p className="text-14 leading-5 text-grayBold">
                Share some information about the incident. The when, where, how.
              </p>
            </div>
            <textarea
              type="text"
              placeholder="Type here"
              className="bg-whiteLight border border-gray-300 px-4 py-2 rounded-lg w-full h-32 focus:outline-none focus:shadow-inner focus:shadow-green-300 transition-all duration-300 text-12"
            ></textarea>
          </div>
        </div>
      </div>
    );
}

export default NextPartIncidents
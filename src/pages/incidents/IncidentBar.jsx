import { useNavigate } from "react-router-dom";
import Button from "../../common/Button"
import { IncidentBarData } from "../../common/db"
import IncidentBarCard from "./IncidentBarCard"


const IncidentBar = () => {

  const navigate = useNavigate();
  const handle = () => {
    navigate("/incidents/incidentBar/newIncidents");
  };
  return (
    <section>
    <div className="text-center mt-16">
      <h1 className="font-bold text-blackBold text-[32px]">
        Let&apos;s get started
      </h1>
      <p className="text-grayBold text-base leading-6">
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar
        sit general sac mascho werhoLorem ipsum dolar sit gene
      </p>
    </div>

    <div className="flex justify-center items-center lg:w-[598px] md:w-[485px] sm:w-[355px] w-[250px] mx-auto mt-5">
      <div className="lg:w-7 w-5 lg:h-7 h-5 bg-whiteLight rounded-full"></div>
      <hr className="bg-whiteLight w-[299px] h-[3px]" />
      <div className="lg:w-7 w-5 lg:h-7 h-5 bg-whiteLight rounded-full"></div>
      <hr className="bg-whiteLight w-[299px] h-[3px]" />
      <div className="lg:w-7 w-5 lg:h-7 h-5 bg-whiteLight rounded-full"></div>
    </div>

    <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-6">
      {IncidentBarData.map((incidentBarDetails, i) => (
        <IncidentBarCard key={i} {...incidentBarDetails} />
      ))}
    </div>
    <div className="flex justify-center my-5">
      <Button handleChange={handle}>Get started</Button>
    </div>
  </section>
  )
}

export default IncidentBar
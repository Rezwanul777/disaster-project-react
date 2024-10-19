import { CardItems } from "../../common/db";
import Search from "../../components/Search";
import Card from "../dashboard/Card";




const Incidents = () => {
  return (
    
        <div>
          <Search
            welcome="Home - Incidents"
            heading="Incidents"
            button="+ New Incidents"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 lg:p-6 p-3">
            {CardItems.map((cardDetails, i) => (
              <Card key={i} {...cardDetails} />
            ))}
          </div>
        </div>
      );
    }
    
    export default Incidents;


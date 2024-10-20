import { CardItems } from "../../common/db";
import Search from "../../components/Search";
import Card from "../dashboard/Card";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Incidents = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with a 1000ms animation duration
  }, []);
  return (
    
        <div >
          <Search
            welcome="Home - Incidents"
            heading="Incidents"
            button="+ New Incidents"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 lg:p-6 p-3" data-aos="fade-up">
            {CardItems.map((cardDetails, i) => (
              <Card key={i} {...cardDetails} />
            ))}
          </div>
        </div>
      );
    }
    
    export default Incidents;


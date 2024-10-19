/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import { cn } from './../common/lib/utils/cn';


const navbarList = [
    {
      label: "Dashboard",
      to: "/",
    },
    {
      label: "Incidents",
      to: "/Incidents",
    },
    {
      label: "Location",
      to: "/Location",
    },
    {
      label: "Activities",
      to: "/Activities",
    },
    {
      label: "Documents",
      to: "/Documents",
    },
    {
      label: "Cypher AI",
      to: "/CypherAI",
    },
  ];

const MobileMenu = ({ toggle, handle }) => {
    return (
      <div>
        <div
          className={cn(
            "absolute md:hidden top-14 left-0 w-full bg-white h-screen flex flex-col items-start gap-4 font-semibold text-2xl z-[999999] transform transition-transform duration-300 ",
            toggle ? "flex flex-col" : "hidden"
          )}
          style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
        >
          <ul className="ms-5">
            {navbarList.map(({ label, to }, i) => (
              <li key={i}>
                <NavLink
                  to={to}
                  onClick={handle}
                  className="font-onest text-14 text-grayBold"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;
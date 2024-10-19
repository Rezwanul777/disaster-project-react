import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    label: "Locations",
    to: "/Locations",
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


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handle = () => {
      setToggle(!toggle);
    };
  
    useEffect(() => {
      const bodyClass = document.body.classList;
      toggle ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");
    }, [toggle]);
  
    return (
      <>
        <nav className="flex justify-around items-center bg-whiteLight py-2 border border-b-black">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div>
            <ul className="md:flex hidden justify-center items-center gap-3">
              {navbarList.map(({ label, to }, i) => (
                <li key={i}>
                  <NavLink
                    to={to}
                    onClick={handle}
                    className="text-14 text-grayBold"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="flex justify-center items-center gap-3">
            <button className="md:hidden inline-block" onClick={handle}>
              {toggle ? <IoMdClose /> : <FaBars />}
            </button>
  
            <img src="/notification.png" alt="notification" />
            <img src="/login-logo.png" alt="login-logo" />
            <div className="md:flex flex-col hidden">
              <p className="text-grayBold text-14 ">Usman Zafar</p>
              <p className="text-grayBold text-14 ">usmanzafar@gmail.com</p>
            </div>
          </div>
        </nav>
        {/* <MobileMenu toggle={toggle} handle={handle} /> */}
      </>
    );
  };

export default Navbar
import { IconDefinition, faChartLine, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <main className="pt-4 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col items-center gap-4 m-auto">
      <nav className="w-full flex justify-between items-center gap-4">
        <Link to={"/"}>
          <h1 className="text-3xl">TileTap</h1>
        </Link>
        <div className="flex gap-2">
          <NavTab to="/settings" icon={faGear}/>
          <NavTab to="/scores" icon={faChartLine}/>
        </div>
      </nav>
      <div className="w-full flex flex-col gap-4">
        <Outlet />
      </div>
    </main>
  );
}

interface NavTabProps {
  to: string,
  icon?: IconDefinition,
  label?: string
}

function NavTab({to, icon, label}: NavTabProps) {
  return (
    <NavLink to={to} className={({isActive}) => `flex gap items-center p-1 ${isActive ? "text-sky-500 " : "text-slate-500 "}`}>
      {icon && <FontAwesomeIcon icon={icon}/>}
      {label && <span>{label}</span>}
    </NavLink>
  )
}

export default App;

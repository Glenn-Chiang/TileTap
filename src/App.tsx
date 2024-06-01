import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main className="pt-4 w-full flex flex-col items-center gap-4">
      <Link to={"/"}>
        <h1 className="text-4xl ">TileTap</h1>
      </Link>
      <Link to={"/settings"}>
        Settings
      </Link>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 flex flex-col gap-4">
        <Outlet />
      </div>
    </main>
  );
}

export default App;

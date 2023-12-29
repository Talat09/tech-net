import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1 className="text-6xl text-center">This is Header</h1>
      <Outlet />
      <p className="text-3xl text-center">footer is coming...</p>
    </div>
  );
};

export default Main;

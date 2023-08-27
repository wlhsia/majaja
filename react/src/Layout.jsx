import { Outlet } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function Layout() {
  const location = useLocation();
  console.log(location.pathname);

  let navigate = useNavigate();

  const actions = {
    onHome: () => {
      navigate("/");
    },
  };

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

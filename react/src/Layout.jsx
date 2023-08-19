import {
  Outlet
} from "react-router-dom";

import { useLocation, useNavigate } from 'react-router-dom'

export default function Layout() {
  const location = useLocation();
  console.log(location.pathname);

  let navigate = useNavigate();

  const actions = {
    onHome: () => {
      navigate("/")
    },
  }

  return (
    <div>
        <Outlet />
    </div>
  );
}
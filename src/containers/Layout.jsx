import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Suspense } from "react";
import Loader from "../components/Loader";

function Layout() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;

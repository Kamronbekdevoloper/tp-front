import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./header/mainHeader";

const DefaultLayout = () => {
  return (
    <div className="mt-[20px] mx-[20px] xs:mx-6 md:mx-7.5 lg:mx-9 xl:mx-18">
      <Header />
      <Suspense fallback={<p>Yuklanmoqda...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default DefaultLayout;

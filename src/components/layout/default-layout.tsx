import { Suspense } from "react";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Yuklashda hatolik...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default DefaultLayout;

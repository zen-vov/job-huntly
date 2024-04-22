import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header/";
import { Footer } from "@widgets/footer";
import { Sidebar } from "../../widgets/sidebar";

export const Layout = ({ showHeaderFooter = true }) => {
  return (
    <>
      {showHeaderFooter && (
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
      {showHeaderFooter === false && (
        <div>
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
    // <div>
    //   {showHeaderFooter && <Header />}
    //   <main>
    //     <Outlet />
    //   </main>
    //   {showHeaderFooter && <Footer />}
    // </div>
  );
};

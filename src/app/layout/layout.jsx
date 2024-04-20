import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header/";
import { Footer } from "@widgets/footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container bg-primary">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

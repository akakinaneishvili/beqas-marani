import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
    </>
  );
}

export default Layout;

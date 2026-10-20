import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function MainLayout() {
  return (
   <>
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
     <BackToTop />
    </div>
     
   </>
    
  );
}

export default MainLayout;

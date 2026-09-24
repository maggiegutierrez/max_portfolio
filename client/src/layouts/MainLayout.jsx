import { Outlet } from "react-router-dom";
import Preloader from "../components/Preloader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;

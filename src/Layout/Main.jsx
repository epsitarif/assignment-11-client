import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import NavBar from "../pages/Home/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
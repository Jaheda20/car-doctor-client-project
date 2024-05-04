import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
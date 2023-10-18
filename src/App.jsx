import { Outlet } from "react-router-dom";
import { Footer, Hero, Navbar } from "./components";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;

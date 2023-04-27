import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import NotificationContainer from "../components/notifications/NotificationContainer";

const navRoutes = [<Route path="/" key="/" element={<Home />} />];

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>{navRoutes}</Routes>
      <NotificationContainer />
    </BrowserRouter>
  );
};

export default Navigation;

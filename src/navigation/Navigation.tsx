import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

const navRoutes = [<Route path="/" key="/" element={<Home />} />];

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>{navRoutes}</Routes>
    </BrowserRouter>
  );
};

export default Navigation;

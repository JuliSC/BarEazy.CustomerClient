import {Link} from "react-router-dom";
import Modal from "./Modal";
import Btn from "./Btn";
import Order from "./Order";

function NavBar({children}: any) {
  return (
    <nav className="w-full text-white fixed top-0 p-4 shadow-white-lg backdrop-blur-md">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="font-bold text-yellow">
            BarEazy 🍺
          </Link>
        </li>
        <li>
          <Modal
            activator={<Btn title="Order" className="px-2 py-1"></Btn>}
            content={<Order />}
          ></Modal>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

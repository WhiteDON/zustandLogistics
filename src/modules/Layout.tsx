import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "../assets/styles/layout.module.scss";

/* icons */
import logo from "../assets/images/logo.png";

import {
  BsTruck,
  BsCart,
  BsFillGrid1X2Fill,
  BsFillFilePersonFill,
  BsChatDots,
  BsArrowLeftCircle,
  BsCircle
} from "react-icons/bs";

const Layout = () => {
  const pathname = useLocation().pathname;

  return (
    <div className={styles.mainLayoutDiv}>
      <nav className={styles.mainNavBar}>
        <img src={logo} className={styles.mainNavBarLogo}></img>
        <ul className={styles.mainNavbarLinks}>
          <li className={`${pathname === '/' ? styles.active : styles.link}`}>
            <Link to="/">
              <BsFillGrid1X2Fill />
            </Link>
          </li>
          <li className={`${pathname === '/carts' ? styles.active : styles.link}`}>
            <Link to="/">
              <BsCart />
            </Link>
          </li>
          <li className={`${pathname === '/deliveries' ? styles.active : styles.link}`}>
            <Link to="/deliveries">
              <BsTruck />
            </Link>
          </li>
          <li className={`${pathname === '/users' ? styles.active : styles.link}`}>
            <Link to="/">
              <BsFillFilePersonFill />
            </Link>
          </li>
          <li className={`${pathname === '/chats' ? styles.active : styles.link}`}>
            <Link to="/">
              <BsChatDots />
            </Link>
          </li>
        </ul>

        <ul className={styles.mainNavbarAuth}>
          <li>
            <BsCircle />
          </li>
          <li>
            <Link to="/">
              <BsArrowLeftCircle />
            </Link>
          </li>
        </ul>

      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;

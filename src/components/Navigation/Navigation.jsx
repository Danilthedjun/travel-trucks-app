import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import icons from "../../assets/sprite.svg";

const active = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={active}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={active}>
          <svg width="26" height="24">
            <use className="rgeg" href={`${icons}#heart`} />
          </svg>
        </NavLink>
      </nav>
    </>
  );
}

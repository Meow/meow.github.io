import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navigation__link navigation__link--active" : "navigation__link";

function Navigation() {
  return (
    <div className="navigation__block">
      <nav className="navigation">
        <NavLink to="/" end className={navLinkClass}>
          <i className={`fa fa-info-circle`}></i>
          <span className="hidden--phone"> About Me</span>
        </NavLink>
        <NavLink to="/pages/programmer" className={navLinkClass}>
          <i className={`fa fa-code`}></i>
          <span className="hidden--phone"> Programmer</span>
        </NavLink>
        <NavLink to="/pages/contact" className={navLinkClass}>
          <i className={`fa fa-envelope`}></i>
          <span className="hidden--phone"> Contact</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;

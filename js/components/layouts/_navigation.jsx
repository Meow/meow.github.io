import React from "react";
import { Link } from "react-router-dom";

function Navigation(_props) {
  return <div className="block navigation__block">
    <div className="block__content navigation">
      <Link to="/" className="navigation__link"><i className={`fa fa-info-circle`}></i><span className="hidden--phone"> About Me</span></Link>
      <Link to="/pages/programmer" className="navigation__link"><i className={`fa fa-code`}></i><span className="hidden--phone"> Programmer</span></Link>
      <Link to="/pages/contact" className="navigation__link"><i className={`fa fa-envelope`}></i><span className="hidden--phone"> Contact</span></Link>
    </div>
  </div>;
}

export default Navigation;

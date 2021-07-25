import React from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./_navigation_link";

function Navigation(_props) {
  return <div className="navigation">
    <Link to="/" icon="fa-info-circle" name="About me" component={NavigationLink} />
    <Link to="/pages/programmer" icon="fa-code" name="Programmer" component={NavigationLink} />
    <Link to="/pages/artist" icon="fa-paint-brush" name="Artist" component={NavigationLink} />
    <Link to="/pages/characters" icon="fa-dog" name="My characters" component={NavigationLink} />
  </div>;
}

export default Navigation;

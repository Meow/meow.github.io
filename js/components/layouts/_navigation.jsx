import React from "react";

class Navigation extends React.Component {
  render() {
    return <div className="navigation">
      <a className="navigation__link" href="#"><i className="fa fa-home"></i> Home</a>
      <a className="navigation__link" href="#"><i className="fa fa-horse"></i> Nighty Cloud</a>
      <a className="navigation__link" href="#"><i className="fa fa-horse"></i> Midnight Story</a>
      <a className="navigation__link" href="#"><i className="fa fa-dog"></i> Luna the Enfield</a>
      <a className="navigation__link" href="#"><i className="fa fa-dog"></i> Fletch the Enfield</a>
    </div>;
  }
}

export default Navigation;

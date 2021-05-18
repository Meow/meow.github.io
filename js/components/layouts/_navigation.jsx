import React from "react";

class Navigation extends React.Component {
  render() {
    return <div className="navigation">
      <a className="navigation__link" href="#">Home</a>
      <a className="navigation__link" href="#">Nighty Cloud</a>
      <a className="navigation__link" href="#">Luna the Enfield</a>
      <a className="navigation__link" href="#">Midnight Story</a>
    </div>;
  }
}

export default Navigation;

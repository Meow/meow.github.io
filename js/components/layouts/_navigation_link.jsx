import React from "react";

function NavigationLink(props) {
  return <a href={props.href} className="navigation__link"><i className={`fa ${props.icon}`}></i> {props.name}</a>;
}

export default NavigationLink;

import React from "react";

function NavigationLink(props) {
  return <a href={props.href} className="navigation__link"><i className={`fa ${props.icon}`}></i><span className="hidden--phone"> {props.name}</span></a>;
}

export default NavigationLink;

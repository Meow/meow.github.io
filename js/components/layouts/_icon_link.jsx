import React from "react";

function IconLink(props) {
  return <a href={props.href} className="icon_link"><i className={`fa ${props.icon}`}></i> {props.name}</a>;
}

export default IconLink;

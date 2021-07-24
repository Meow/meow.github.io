import React from "react";
import Navigation from "./_navigation";

function PageContainer(props) {
  return <div className="container">
    <Navigation></Navigation>
    <div className="content">
      <div className="block block--information block--solid">
        <div className="block__content">
          <i className="fa fa-wrench"></i> This site is still WIP. The information is incomplete.
        </div>
      </div>
      {props.children}
    </div>
  </div>;
}

export default PageContainer;

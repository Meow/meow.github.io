import React from "react";
import Navigation from "./_navigation";
import Header from "./_header";

function PageContainer(props) {
  return <div className="container">
    <Header></Header>
    <Navigation></Navigation>
    <div className="content">
      {props.children}
    </div>
  </div>;
}

export default PageContainer;

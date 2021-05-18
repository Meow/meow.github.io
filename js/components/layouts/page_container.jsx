import React from "react";
import Navigation from "./_navigation";

class PageContainer extends React.Component {
  render() {
    return <div className="container">
      <Navigation></Navigation>
      {this.props.children}
    </div>;
  }
}

export default PageContainer;

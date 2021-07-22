import React from "react";
import Navigation from "./_navigation";

class PageContainer extends React.Component {
  render() {
    return <div className="container">
      <Navigation></Navigation>
      <br />
      <div className="block block--information block--solid">
        <div className="block__content">
          <i className="fa fa-wrench"></i> This site is still WIP. The information is incomplete.
        </div>
      </div>
      {this.props.children}
    </div>;
  }
}

export default PageContainer;

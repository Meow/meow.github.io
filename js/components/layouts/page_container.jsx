import React from "react";

class PageContainer extends React.Component {
  render() {
    return <div className="container">
      {this.props.children}
    </div>;
  }
}

export default PageContainer;

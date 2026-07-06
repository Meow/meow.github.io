import type { ReactNode } from "react";
import Navigation from "./_navigation";
import Header from "./_header";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer(props: PageContainerProps) {
  return (
    <div className="container">
      <Header></Header>
      <Navigation></Navigation>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default PageContainer;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageContainer from "./components/layouts/page_container.jsx";
import Index from "./components/index.jsx";

export default function Routes() {
  return (
    <Router>
      <PageContainer>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

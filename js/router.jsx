import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageContainer from "./components/layouts/page_container.jsx";
import Index from "./components/index.jsx";
import ArtistPage from "./components/artist/index.jsx";
import CharactersPage from "./components/characters/index.jsx";
import ProgrammerPage from "./components/programmer/index.jsx";

export default function Routes() {
  return (
    <Router>
      <PageContainer>
        <Switch>
        <Route path="/pages/artist">
            <ArtistPage />
          </Route>
          <Route path="/pages/programmer">
            <ProgrammerPage />
          </Route>
          <Route path="/pages/characters">
            <CharactersPage />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

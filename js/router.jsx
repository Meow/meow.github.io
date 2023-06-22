import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import PageContainer from "./components/layouts/page_container.jsx";
import Index from "./components/index.jsx";
import ArtistPage from "./components/artist/index.jsx";
import CharactersPage from "./components/characters/index.jsx";
import ProgrammerPage from "./components/programmer/index.jsx";
import ContactPage from "./components/contact/index.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <PageContainer>
        <Routes>
          <Route path="/pages/artist" element={<ArtistPage />} />
          <Route path="/pages/programmer" element={<ProgrammerPage />} />
          <Route path="/pages/characters" element={<CharactersPage />} />
          <Route path="/pages/contact" element={<ContactPage />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

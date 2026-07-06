import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageContainer from "./components/layouts/page_container";
import Index from "./components/index";
import ArtistPage from "./components/artist/index";
import CharactersPage from "./components/characters/index";
import ProgrammerPage from "./components/programmer/index";
import ContactPage from "./components/contact/index";

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

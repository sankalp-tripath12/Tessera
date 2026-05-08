import { Routes, Route } from "react-router-dom";

import CityIntelligence from "./pages/Cityintelligence/index";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import Issuepage2 from "./pages/Issuepage2";
import Issuepage3 from "./pages/Issuepage3";

const App = () => {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* City Intelligence */}
      <Route
        path="/city-intelligence"
        element={<CityIntelligence />}
      />

      {/* Issue Reporting Flow */}
      <Route path="/issue" element={<Issue />} />
      <Route path="/issue/step2" element={<Issuepage2 />} />
      <Route path="/issue/step3" element={<Issuepage3 />} />

    </Routes>
  );
};

export default App;
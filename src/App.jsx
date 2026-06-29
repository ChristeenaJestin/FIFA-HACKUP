import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Loader>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
    </Loader>

  );

}

export default App;
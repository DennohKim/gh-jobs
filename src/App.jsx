import { Route, Routes } from "react-router-dom";
import JobPage from "./pages/JobPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/jobs" element={<LandingPage />}></Route>
        <Route path="/jobs/:id" element={<JobPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

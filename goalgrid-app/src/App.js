import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridPage from './pages/GridPage.js'
import AddGoals from "./pages/AddGoals.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<GridPage/>} />
          <Route path="/grid" element={<GridPage/>} />
          <Route path="/add" element={<AddGoals/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GridPage from './pages/GridPage.js'
import AddGoals from "./pages/addgoals/AddGoals.js";
import Signup from "./pages/signup/signup.js";
import Signin from "./pages/signin/signin.js";
import PrivateRoute from "./pages/privateRoute.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin/>} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <GridPage/>
            </PrivateRoute>
            } />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/add" element={<AddGoals/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Recipe from "./pages/recipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Recipe/>} />
        <Route path="/recipe" element={<Recipe/>} />
      </Routes>
    </>
  );
}

export default App;

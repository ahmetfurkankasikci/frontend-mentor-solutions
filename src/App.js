import { Route, Routes } from "react-router-dom";
import Recipe from "./pages/recipe/index";
import ProductPreview from "./pages/product-preview-card";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/product" element={<ProductPreview />} />
      </Routes>
    </>
  );
}

export default App;

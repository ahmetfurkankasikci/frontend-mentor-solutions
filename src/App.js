import { Route, Routes } from "react-router-dom";
import Recipe from "./pages/recipe/index";
import ProductPreview from "./pages/product-preview-card";
import ColumnPreview from "./pages/column-preview-card";
import NftCard from "./pages/nft_preview-card";
import BentoGrid from "./pages/bento-grid";

function App() {
  return (
    <>
      <Routes>
        <Route path="/nft" element={<NftCard />} />      
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/product" element={<ProductPreview />} />
        <Route path="/bento-grid" element={<BentoGrid />} />
        <Route path="/column" element={<ColumnPreview />} />
        <Route path="/" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;

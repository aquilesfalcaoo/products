import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

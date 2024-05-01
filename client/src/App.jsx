import { Website } from "./pages/Website";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Website />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

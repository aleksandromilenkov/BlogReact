import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import { useContext } from "react";
import Context from "./context/context";
import "./App.css";
function App() {
  const ctx = useContext(Context);
  console.log(ctx.theme);
  return (
    <div className={`app ${ctx.theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

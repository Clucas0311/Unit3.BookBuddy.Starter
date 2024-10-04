import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/book" element={<h1>Books</h1>} />
        <Route path="/book/:id" element={<h1>Single Books</h1>} />
        <Route path="/account" element={<h1>Account</h1>} />
      </Routes>
    </div>
  );
}

export default App;

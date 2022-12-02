import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sections from './components/Sections';
import Home from './components/Home';
import AddSection from './components/AddSection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sections" element={<Sections />} />
        <Route path="edit-section/:id" element={<AddSection />} />
        <Route path="add-section" element={<AddSection />} />
      </Routes>
    </BrowserRouter>
  );
}

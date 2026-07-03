import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import JavaModule from './pages/JavaModule';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div className="welcome"><h2>Select a module from the sidebar to begin.</h2></div>} />
        <Route path="java" element={<JavaModule />} />
      </Route>
    </Routes>
  );
}
export default App;
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ModulePage from './pages/ModulePage';
import TopicDetail from './pages/TopicDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":module" element={<ModulePage />} />
        <Route path=":module/:topicId" element={<TopicDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
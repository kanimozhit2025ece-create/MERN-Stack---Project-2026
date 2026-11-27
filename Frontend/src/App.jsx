import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Signup from './auth/Signup';
import DepartmentManagement from './pages/DepartmentManagement';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/departments" element={<DepartmentManagement />} />
        </Routes>
    );
}

export default App;
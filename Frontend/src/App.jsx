import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Signup from './auth/Signup';
import DepartmentManagement from './pages/DepartmentManagement';
import IssueCategories from './pages/IssueCategories';
import Settings from './pages/Settings';
import Logout from './auth/Logout';
const App=() =>{
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/departments" element={<DepartmentManagement />} />
            <Route path="/categories" element={<IssueCategories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
}

export default App;
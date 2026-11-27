import React, { useState } from 'react';
import './DepartmentManagement.css';

const DepartmentManagement = () => {

    const [departments, setDepartments] = useState([
        { id: 1, name: 'Public Works', head: 'Kumar' },
        { id: 2, name: 'Water Supply', head: 'Ravi' }
    ]);

    const [name, setName] = useState('');
    const [head, setHead] = useState('');

    const addDepartment = (e) => {
        e.preventDefault();

        if (name === '' || head === '') {
            alert('Fill all fields');
            return;
        }

        setDepartments([...departments, {
            id: Date.now(), name, head
        }]);

        setName('');
        setHead('');
    };

    const deleteDepartment = (id) => {
        setDepartments(departments.filter((dept) => dept.id !== id));
    };

    return (
        <div className="department-page">

            <h1>Department Management</h1>
            <p>Manage Infrastructure Departments</p>

            <form onSubmit={addDepartment}>
                <input
                    placeholder="Department Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Department Head"
                    value={head}
                    onChange={(e) => setHead(e.target.value)}
                />

                <button type="submit">Add Department</button>
            </form>

            <h2>Department List</h2>

            <table>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Department Head</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {departments.map((dept) => (
                        <tr key={dept.id}>
                            <td>{dept.name}</td>
                            <td>{dept.head}</td>
                            <td>
                                <button onClick={() => deleteDepartment(dept.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default DepartmentManagement;
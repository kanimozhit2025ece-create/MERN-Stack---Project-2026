import { useState } from 'react';
import './Signup.css';

function Signup() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        department: '',
        role: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
            setError('Enter a valid 10-digit phone number');
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must contain at least 8 characters');
            return;
        }

        console.log(formData);
        alert('Registration successful!');
    };

    return (
        <div className="signup-container">

            <div className="signup-card">

                <h1>Create Account</h1>

                <p className="subtitle">
                    Public Infrastructure Issue Prioritization Platform
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter 10-digit phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                    />

                    <label>Department</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="Public Works">
                            Public Works Department
                        </option>
                        <option value="Water">
                            Water Supply & Sewerage
                        </option>
                        <option value="Electricity">
                            Electricity Department
                        </option>
                        <option value="Roads">
                            Roads & Highways
                        </option>
                        <option value="Sanitation">
                            Sanitation Department
                        </option>
                        <option value="Transportation">
                            Transportation Department
                        </option>
                        <option value="Parks">
                            Parks & Recreation
                        </option>
                        <option value="Other">Other</option>
                    </select>

                    <label>User Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Your Role</option>
                        <option value="Citizen">Citizen</option>
                        <option value="Government Official">
                            Government Official
                        </option>
                    </select>

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create password"
                        value={formData.password}
                        onChange={handleChange}
                        minLength={8}
                        required
                    />

                    {error && (
                        <p className="error-message">{error}</p>
                    )}

                    <button type="submit">
                        Create Account
                    </button>

                </form>

                <p className="login-link">
                    Already have an account? <a href="#">Login</a>
                </p>

            </div>

        </div>
    );
}

export default Signup;
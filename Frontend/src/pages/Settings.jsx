import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {

    const [name, setName] = useState('Admin');
    const [email, setEmail] = useState('admin@gmail.com');

    return (
        <div className="settings-page">
            <h1>Settings</h1>
            <p>Manage your account settings</p>

            <form>
                <label>Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="button" onClick={() => alert('Settings Saved')}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;
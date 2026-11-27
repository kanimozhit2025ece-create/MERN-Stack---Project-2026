import React, { useState } from 'react';
import './IssueCategories.css';

const IssueCategories = () => {

    const [categories, setCategories] = useState([
        'Electrical',
        'Water Supply',
        'Road Damage',
        'Sanitation'
    ]);

    const [name, setName] = useState('');

    const addCategory = () => {
        if (name !== '') {
            setCategories([...categories, name]);
            setName('');
        }
    };

    const deleteCategory = (item) => {
        setCategories(categories.filter((cat) => cat !== item));
    };

    return (
        <div className="category-page">

            <h1>Issue Categories</h1>

            <input
                placeholder="Enter Category"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addCategory}>Add</button>

            {categories.map((cat, index) => (
                <div className="category-item" key={index}>
                    {cat}
                    <button onClick={() => deleteCategory(cat)}>Delete</button>
                </div>
            ))}

        </div>
    );
};

export default IssueCategories;
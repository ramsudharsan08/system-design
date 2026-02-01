import React, { useState } from 'react'

export default function UseForm({onSubmit}) {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
         }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
            onSubmit(formData);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input
                type='text'
                name='name'
                value={formData.name}
                placeholder='Enter your name'
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Email</label>
            <input
                type='text'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                onChange={handleChange}
            />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

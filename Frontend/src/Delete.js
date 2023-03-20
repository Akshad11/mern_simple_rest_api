import React, { useState } from 'react';
import axios from 'axios';

function TeacherDetails() {
    const [teacherId, setTeacherId] = useState('');

    const handleIdChange = (event) => {
        setTeacherId(event.target.value);
    };

    const handleDeleteData = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/new/${teacherId}`);
            console.log('Teacher data deleted:', response.data);
        } catch (error) {
            console.error('Error deleting teacher data:', error);
        }
    };

    return (
        <div>
            <h1>Teacher Details</h1>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" value={teacherId} onChange={handleIdChange} />
            </div>
            <button onClick={handleDeleteData}>Delete Data</button>
        </div>
    );
}

export default TeacherDetails;

import React, { useState } from 'react';
import axios from 'axios';

function TeacherDetails() {
    const [teacherId, setTeacherId] = useState('');
    const [teacher, setTeacher] = useState(null);

    const handleIdChange = (event) => {
        setTeacherId(event.target.value);
    };

    const handleFetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/new/${teacherId}`);
            setTeacher(response.data);
        } catch (error) {
            console.error('Error fetching teacher data:', error);
        }
    };

    return (
        <div>
            <h1>Teacher Details</h1>
            <div>
                <label htmlFor="teacherId">Teacher ID:</label>
                <input type="text" id="teacherId" value={teacherId} onChange={handleIdChange} />
                <button onClick={handleFetchData}>Fetch Data</button>
            </div>
            {teacher && (
                <div>
                    <p>Name: {teacher.Name}</p>
                    <p>Phone: {teacher.PhoneNo}</p>
                    <p>Subject: {teacher.Subject}</p>
                    <p>Attendance: {teacher.Attendance}</p>
                </div>
            )}
        </div>
    );
}

export default TeacherDetails;

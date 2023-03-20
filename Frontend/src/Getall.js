import React, { useState } from 'react';
import axios from 'axios';

function TeacherList() {
    const [teacherData, setTeacherData] = useState(null);

    const handleButtonClick = async () => {
        try {
            const response = await axios.get('http://localhost:3001/');
            setTeacherData(response.data);
        } catch (error) {
            console.error('Error fetching teacher data:', error);
        }
    };

    return (
        <div>
            <h1>Teacher List</h1>
            <button onClick={handleButtonClick}>Fetch Teacher Data</button>
            {teacherData ? (
                <ul>
                    {teacherData.map((teacher) => (
                        <li key={teacher._id}>
                            <h2>{teacher.Name}</h2>
                            <p>Phone: {teacher.PhoneNo}</p>
                            <p>Subject: {teacher.Subject}</p>
                            <p>Attendance: {teacher.Attendance}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Click the button to fetch teacher data.</p>
            )}
        </div>
    );
}

export default TeacherList;

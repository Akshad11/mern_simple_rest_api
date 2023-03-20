import React, { useState } from 'react';
import axios from 'axios';

function TeacherDetails() {
    const [teacher, setTeacher] = useState({
        id: '',
        Name: '',
        PhoneNo: '',
        Subject: '',
        Attendance: ''
    });

    const handleIdChange = (event) => {
        setTeacher({ ...teacher, id: event.target.value });
    };

    const handleNameChange = (event) => {
        setTeacher({ ...teacher, Name: event.target.value });
    };

    const handlePhoneChange = (event) => {
        setTeacher({ ...teacher, PhoneNo: event.target.value });
    };

    const handleSubjectChange = (event) => {
        setTeacher({ ...teacher, Subject: event.target.value });
    };

    const handleAttendanceChange = (event) => {
        setTeacher({ ...teacher, Attendance: event.target.value });
    };

    const handlePatchData = async () => {
        try {
            const response = await axios.patch(`http://localhost:3001/new/${teacher.id}`, teacher);
            console.log('Teacher data updated:', response.data);
        } catch (error) {
            console.error('Error updating teacher data:', error);
        }
    };

    return (
        <div>
            <h1>Teacher Details</h1>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" value={teacher.id} onChange={handleIdChange} />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={teacher.Name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" value={teacher.PhoneNo} onChange={handlePhoneChange} />
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={teacher.Subject} onChange={handleSubjectChange} />
            </div>
            <div>
                <label htmlFor="attendance">Attendance:</label>
                <input type="text" id="attendance" value={teacher.Attendance} onChange={handleAttendanceChange} />
            </div>
            <button onClick={handlePatchData}>Update Data</button>
        </div>
    );
}

export default TeacherDetails;

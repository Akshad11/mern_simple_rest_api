import React, { useState } from 'react';
import axios from 'axios';

function TeacherForm() {
    const [teacherName, setTeacherName] = useState('');
    const [teacherPhone, setTeacherPhone] = useState('');
    const [teacherSubject, setTeacherSubject] = useState('');
    const [teacherAttendance, setTeacherAttendance] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^\d+$/.test(teacherPhone)) {
            alert('Please enter a valid phone number');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/new', {
                Name: teacherName,
                PhoneNo: teacherPhone,
                Subject: teacherSubject,
                Attendance: teacherAttendance,
            });
            console.log('Teacher data saved:', response.data);
        } catch (error) {
            console.error('Error saving teacher data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Teacher Name:
                <input type="text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
            </label>
            <br />
            <label>
                Teacher Phone:
                <input type="tel" value={teacherPhone} onChange={(e) => setTeacherPhone(e.target.value)} />
            </label>
            <br />
            <label>
                Teacher Subject:
                <input type="text" value={teacherSubject} onChange={(e) => setTeacherSubject(e.target.value)} />
            </label>
            <br />
            <label>
                Teacher Attendance:
                <input type="text" value={teacherAttendance} onChange={(e) => setTeacherAttendance(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TeacherForm;

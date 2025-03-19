import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", age: "", email: "", courseSelection: "" });

   
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/getuser/${id}`);
                if (!response.data) {
                    console.log("No user data found.");
                }
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error.response?.data || error.message);
            }
        };
        if (id) fetchUserData();
    }, [id]);

   
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/updateuser/${id}`, user);
            alert("User updated successfully!");
            navigate("/users"); 
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-900 text-white">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Update User</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="p-2 mb-2 bg-gray-700 text-white rounded"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                        placeholder="Age"
                        className="p-2 mb-2 bg-gray-700 text-white rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="p-2 mb-2 bg-gray-700 text-white rounded"
                        required
                    />
                    <select
                        name="courseSelection"
                        value={user.courseSelection}
                        onChange={handleChange}
                        className="p-2 mb-4 bg-gray-700 text-white rounded"
                        required
                    >
                        <option value="" hidden>Select Course</option>
                        <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Applied Electronics and Instrumentation Engineering">Applied Electronics and Instrumentation Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                    </select>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;

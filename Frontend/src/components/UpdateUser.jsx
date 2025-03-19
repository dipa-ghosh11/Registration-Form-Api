import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    const { id } = useParams(); // Get user ID from the URL
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", age: "", email: "", courseSelection: "" });

    // Fetch user details when the component loads
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

    // Handle input changes
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission for updating the user
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/api/updateuser/${id}`, user);
            alert("User updated successfully!");
            navigate("/users"); // Redirect back to UserList
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
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
                    <input
                        type="text"
                        name="courseSelection"
                        value={user.courseSelection}
                        onChange={handleChange}
                        placeholder="Course"
                        className="p-2 mb-4 bg-gray-700 text-white rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;

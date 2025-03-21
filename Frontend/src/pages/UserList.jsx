import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserData from '../components/UserData.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    const fetchUsers = async () => {
        await axios.get("http://localhost:4000/api/getuser")
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                toast.error("Error fetching users!");
                console.error("Error fetching users:", error);
            });
        
    };



    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen bg-gray-900 text-white">
                <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-4">User List</h2>

                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Home
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-700">
                            <thead>
                                <tr className="bg-gray-700 text-gray-200">
                                    <th className="p-3 border border-gray-600">Name</th>
                                    <th className="p-3 border border-gray-600">Age</th>
                                    <th className="p-3 border border-gray-600">Email</th>
                                    <th className="p-3 border border-gray-600">Course</th>

                                </tr>
                            </thead>
                            <tbody>
                                <UserData users={users} fetchUsers={fetchUsers} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList
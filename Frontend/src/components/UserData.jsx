import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserData = ({ users, fetchUsers }) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/deleteuser/${id}`);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleUpdate = (id) => {
        
        navigate(`/updateuser/${id}`);
    };

    return (
        <>
            {users.map((curUser, index) => {
                const { _id, name, age, email, courseSelection } = curUser;

                return (
                    <tr key={_id} className={`${index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"} hover:bg-gray-600 transition-all`}>
                        <td className="p-3 border border-gray-600 text-center">{name}</td>
                        <td className="p-3 border border-gray-600 text-center">{age}</td>
                        <td className="p-3 border border-gray-600 text-center">{email}</td>
                        <td className="p-3 border border-gray-600 text-center">{courseSelection}</td>
                        <td className="p-3 border border-gray-600 text-center">
                            <button
                                onClick={() => handleUpdate(_id)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition-all"
                            >
                                Update
                            </button>
                        </td>
                        <td className="p-3 border border-gray-600 text-center">
                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition-all"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default UserData;

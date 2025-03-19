import axios from 'axios';
import React, { useEffect,useState } from 'react';
import UserData from '../components/UserData.jsx';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/getuser");
            // console.log(response.data.users)
            setUsers(response.data.users); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

   

    useEffect(()=>{
        fetchUsers("http://localhost:4000/api/getuser")
    },[])
  return (
    <>
          <div className="flex justify-center items-center min-h-full bg-gray-900 text-white">
              <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-center mb-4">User List</h2>
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
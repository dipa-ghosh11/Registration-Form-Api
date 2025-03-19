import React from 'react';

const UserData = ({ users }) => {
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
                    </tr>
                );
            })}
        </>
    );
};

export default UserData;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState(
        [
            {
                Name: "Supun",
                Email: "Supuntharaka@gmail.com",
                age: 24
            }
        ]
    )

    return (
        <div className='bg-blue-200 p-10 rounded-xl shadow-lg'>
            <Link to="/create"><button className='bg-yellow-400 rounded-lg px-5 py-1 m-1 font-bold'>Add </button></Link>

            <table className='bg-white border-collapse border-gray-600'>
                <thead>
                    <tr>
                        <th className='border-2 border-gray-600'>Name</th>
                        <th className='border-2 border-gray-600'>Email</th>
                        <th className='border-2 border-gray-600'>Age</th>
                        <th className='border-2 border-gray-600'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='border-2 border-gray-600 px-5' >{user.Name}</td>
                            <td className='border-2 border-gray-600 px-5'>{user.Email}</td>
                            <td className='border-2 border-gray-600 px-5'>{user.age}</td>
                            <td className='border-2 border-gray-600 px-5'>
                                <button className='px-2 py-1 m-1 font-bold rounded-lg bg-cyan-600 text-white'>Edit</button>
                                <button className='px-2 py-1 m-1 font-bold rounded-lg bg-red-600 text-white'>Delete</button>
                                <Link to="/update"><button className='px-2 py-1 m-1 font-bold rounded-lg bg-green-600 text-white'>Update</button></Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Users

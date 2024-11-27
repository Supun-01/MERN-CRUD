import React from 'react'

function CreateUser() {
    return (
        <div className='bg-blue-200 p-10 rounded-xl shadow-lg'>
            <h1 className='font-bold text-3xl mb-2'>Add User</h1>
            <div>
                <div className="mb-2">
                    <label>Name</label>
                    <br />
                    <input className='border-2 w-96 border-black rounded-lg px-2 py-1' placeholder="Enter Name" type="text" />
                </div>
                <div className="mb-2">
                    <label>Email</label>
                    <br />
                    <input className='border-2 w-96 border-black rounded-lg px-2 py-1' placeholder="Enter Email" type="text" />
                </div>
                <div className="mb-2">
                    <label>Age</label>
                    <br />
                    <input className='border-2 w-96 border-black rounded-lg px-2 py-1' placeholder="Enter Age" type="text" />
                </div>
                <div className="mb-2">
                    <button className='bg-green-600 text-white px-5 rounded-lg font-bold py-1'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateUser

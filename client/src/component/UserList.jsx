import React from 'react';

const UserList = () => {
    return (
        <div>
            <h1 className="title">Users</h1>
            <h2 className="subtitle">List of User</h2>
            <table className='table is-striped is-fullwidth'>
                <thread>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Phone No</th>
                        <th>Action</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserList;

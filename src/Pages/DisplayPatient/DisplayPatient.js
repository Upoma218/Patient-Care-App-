import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const DisplayPatient = () => {
    const [patients, setPatients] = useState([]);
    const [deletePatient, setDeletePatients] = useState([]);
    useEffect(() => {
        fetch('https://patient-care-app-server.vercel.app/details')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this task?');
        if (proceed) {
            fetch(`https://patient-care-app-server.vercel.app/details/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = deletePatient.filter(dPatient => dPatient._id !== id);
                        setDeletePatients(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-info my-6'>Patient Information</h1>
            <div className="overflow-x-auto border-1 lg:px-12" >
                <table className="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Disease Name</th>
                            <th>Patient Condition</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients?.length && patients.map(patient =>
                                <tr key={patient._id}>
                                    <td>{patient.name}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.disease}</td>
                                    <td>{patient.condition}</td>
                                    <td><Link to={`/editInfo/${patient._id}`}><button className="btn btn-sm btn-info text-white">Edit</button></Link></td>
                                    <td><button onClick={() => { handleDelete(patient._id) }} className="btn btn-sm btn-error text-white">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default DisplayPatient;
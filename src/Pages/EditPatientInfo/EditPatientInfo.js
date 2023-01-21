import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditPatientInfo = () => {
    const previousInfo = useLoaderData();
    const navigate = useNavigate();
    console.log(previousInfo)

    const handleEdit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const disease = form.disease.value;
        const condition = form.condition.value;
        const info = {
            email: email,
            phone: phone,
            address: address,
            disease: disease,
            condition: condition,
        }
        console.log(info)

        fetch(`https://patient-care-app-server.vercel.app/editInfo/${previousInfo._id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(info)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Patient Information Updated SuccessFully');
                    console.log(data)
                    navigate('/displayPatient')
                }
            })
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-info my-6'>Update Patient Information</h1>
            <form onSubmit={handleEdit} className="bg-sky-50 p-4 rounded-3 px-6 py-12 rounded-2xl shadow-xl lg:mx-32">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div>
                            <label>
                                <h1 className=''>Email</h1>
                            </label>
                            <input type="email" name='email' defaultValue={previousInfo.email} required className='w-full 
                       my-3 p-2' />
                        </div>
                        <div>
                            <label>
                                <h1 className=''>Phone</h1>
                            </label>
                            <input type="text" name='phone' defaultValue={previousInfo.phone} required className='w-full 
                       my-3 p-2' />
                        </div>
                        <div>
                            <label>
                                <h1 className=''>Address</h1>
                            </label>
                            <input type="text" name='address' defaultValue={previousInfo.address} required className='w-full 
                       my-3 p-2' />
                        </div>
                        <div>
                            <label>
                                <h1 className=''>Disease Name</h1>
                            </label>
                            <input type="text" name='disease' defaultValue={previousInfo.disease} required className='w-full 
                       my-3 p-2' />
                        </div>
                        <div>
                            <label>
                                <h1 className='mb-3'>Present Condition of Disease</h1>
                            </label>
                            <select className="w-full p-2" name='condition'>
                                <option disabled selected >{previousInfo.condition}</option>
                                <option>Severe</option>
                                <option>Moderate</option>
                                <option>Mild</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" value="Update Patient Information" className='btn btn-info text-white w-full my-5 rounded-none' />
                </form>
        </div>
    );
};

export default EditPatientInfo;
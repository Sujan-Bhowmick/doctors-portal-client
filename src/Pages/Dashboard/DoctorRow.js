import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <th><div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div></th>
                <td>{name}</td>
                <td>{specialty}</td>
                <td>
                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                  
                </td>
            </tr>
        </div>
    );
};

export default DoctorRow;
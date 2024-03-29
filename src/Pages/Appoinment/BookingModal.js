import React, { useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formattedDate = format(date, 'PP')
    console.log(_id, name, slot);

    const booking = {
      treatmentId : _id, 
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName :user.displayName,
      phone: event.target.phone.value      
    }
    
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast(`Application is set, ${formattedDate} at ${slot}`)
      }
      else{
        toast.error(` Allready have an Application on ${data.booking?.date} at ${data.booking?.slot}`)
      }
      refetch();
      setTreatment(null);
    })
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots.map((slot, index) => <option
                  key={index}
                  value={slot}
                > {slot}</option>)
              }
            </select>
            <input type="text" name='name' disabled value={user?.displayName || ''} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email Adress" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
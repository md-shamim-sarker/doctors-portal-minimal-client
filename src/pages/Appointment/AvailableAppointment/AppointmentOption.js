import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, slots} = option;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p className='text-center'>{slots[0]}</p>
                <p className='text-center'>Available Slote {slots.length}</p>
                <div className="card-actions justify-center">
                    {/* The button to open modal */}
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
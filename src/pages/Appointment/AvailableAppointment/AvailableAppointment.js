import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
            .catch(err => console.log(err));
    }, []);
    console.log(appointmentOptions);
    return (
        <div className='w-4/5 mx-auto my-10'>
            <div className='text-center text-2xl font-bold my-5'>{format(selectedDate, 'PP')}</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map((option, index) => <AppointmentOption
                        key={index}
                        option={option}
                    ></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;
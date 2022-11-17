import React from 'react';
import {DayPicker} from 'react-day-picker';
import login from '../../../assets/login.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="w-4/5 mx-auto hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={login} className="max-w-sm" alt='...' />
                <div>
                    <DayPicker
                        mode="single"
                        selectedDate={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
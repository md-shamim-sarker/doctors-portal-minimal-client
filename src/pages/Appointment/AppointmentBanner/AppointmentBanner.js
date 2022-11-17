import React from 'react';
import {DayPicker} from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div className="w-4/5 mx-auto hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='...' />
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
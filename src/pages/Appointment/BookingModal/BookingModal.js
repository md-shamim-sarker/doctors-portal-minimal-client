import {format} from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, setTreatment, selectedDate}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const treatment = name;
        const date = form.date.value;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {treatment, date, slot, patient, email, phone};
        console.log(booking);
        setTreatment(null);
    };
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-2">{name}</h3>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="date" value={date} disabled className="input input-bordered w-full mb-2" />
                        <select name="slot" className="select select-bordered w-full mb-2">

                            {
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full mb-2" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full mb-2" />
                        <input name="email" type="text" placeholder="Email" className="input input-bordered w-full mb-2" />
                        <button type="submit" className="btn btn-primary w-full mb-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
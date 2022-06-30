import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
                <div> <DayPicker></DayPicker></div>
            </div>
        </div>
    );
};

export default Calendar;
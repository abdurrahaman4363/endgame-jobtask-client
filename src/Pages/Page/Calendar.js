import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import calendar from '../../images/calendar.jfif'

const Calendar = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={calendar} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
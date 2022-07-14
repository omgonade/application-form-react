import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import min from './postapply';
const Dob = () => {
    let minAge = new Date();
    localStorage.getItem('MIN');
    localStorage.getItem('MAX');
    let MinAge = parseInt(localStorage.MIN);
    minAge.setFullYear(minAge.getFullYear() - MinAge);
    let maxAge = new Date();
    let MaxAge = parseInt(localStorage.MAX);
    maxAge.setFullYear(maxAge.getFullYear() - MaxAge);
    let [userDOB, setUserDOB] = useState(minAge);

    return (
        <DatePicker
            selected={userDOB}
            onChange={(date) => setUserDOB(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={minAge}
            minDate={maxAge}
        />
    );
};
export default Dob;
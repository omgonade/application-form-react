import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
const Dob = () => {

    let minAge = new Date();
    let MinAge = 30;
    minAge.setFullYear(minAge.getFullYear() - MinAge);
    let maxAge = new Date();
    let MaxAge = 55;
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
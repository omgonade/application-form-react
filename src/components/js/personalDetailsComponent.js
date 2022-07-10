import React from "react";
import '../css/personalDetailsComponent.css';
import Dob from "./DOB";
import { Link} from "react-router-dom";
const PersonalDetails = () => {
    return (
        <React.Fragment>
            <div className="personal">
                <div className="hed2_1">
                    <h2>Personal Details:</h2>
                </div>
                <div className="content1">
                    <form action="">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Name" required /><br />
                        <label htmlFor="fname">Father's Name: </label>
                        <input type="text" name="fname" id="fname" placeholder="Father's Name" required /><br />
                        <label htmlFor="dob">Date of birth: </label>
                        <Dob />
                        {/* <input type="date" name="dob" id="dob" required /><br /> */}
                        <label htmlFor="gender">Gender:</label>
                        <input type="radio" name="gender" id="male" value="male" required />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" required />
                        <label htmlFor="female">Female</label><br />
                        <label htmlFor="marital">Marital status:</label>
                        <input type="radio" name="marital" id="married" value="married" required />
                        <label htmlFor="married">Married</label>
                        <input type="radio" name="marital" id="unmarried" value="unmarried" required />
                        <label htmlFor="unmarried">Unmarried</label><br />
                        <label htmlFor="nation">Nationality:</label>
                        <input type="text" name="nation" id="nation" required />                        
                    </form>
                    {/* <Link to="/postal">Next</Link>                         */}
                </div>
            </div>
        </React.Fragment>
    );

};

export default PersonalDetails;
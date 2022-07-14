import React from "react";
import { useState } from "react";
import PersonalDetails from "./personalDetailsComponent";
import Dob from "./DOB";
import MainDetails from "./MainDetails";
const PostApply = () => {
    const [NoVacancy, setVacancy] = useState();
    const Vacancy = (e) => {
        if (e.target.value === 'none') {
            setVacancy(false);
        }
        else {
            setVacancy(true);
        }
    };
    let[min,setMinAge]=useState();
    let[max,setMaxAge]=useState();
    let Positions = (e) => {
        if (e.target.value === 'none') {
            setMinAge(0);
            setMaxAge(0);            
        }
        else if(e.target.value==='DR'){
            setMinAge(45);
            setMaxAge(55);
        }
        else if(e.target.value==='AR(PK)') {
            setMinAge(30);
            setMaxAge(45);
        }
        else if(e.target.value==='AR'){
            setMinAge(31);
            setMaxAge(45);
        }
    }
    localStorage.setItem('MIN',min);
    localStorage.setItem('MAX',max);
    
    return (
        <React.Fragment>
            <div className="post">
                <form>
                    <label>Name of the post(s): </label>
                    <select required onChange={Positions}>
                        <option value={'none'}>--Select--</option>
                        <option value={'DR'}>Deputy Registrar</option>
                        <option value={'AR(PK)'}>Assistant Registrar (P K Kelkar Central Library)</option>
                        <option value={'AR'}>Assistant Registrar</option>
                        <option value={'HO'}>Hindi Officer</option>
                        <option value={'StCo'}>Students' Counselor</option>
                        <option value={'JTS'}>Junior Technical Superitendent</option>
                    </select>
                    <br />
                    <label>Select Category:</label>
                    <select onChange={Vacancy}>
                        <option value='none'>--Select--</option>
                        <option value="UR" id="UR" >UR</option>
                        <option value="EWS" id="EWS">EWS</option>
                        <option value="OBC" id="OBC">OBC</option>
                        <option value="SC" id="SC">SC</option>
                        <option value="ST" id="ST">ST</option>
                        <option value="PwD" id="PwD">PwD</option>
                    </select>
                </form>
            </div>
            {NoVacancy ? <MainDetails/> : null} 
            
        </React.Fragment>
    );
};
export default PostApply;

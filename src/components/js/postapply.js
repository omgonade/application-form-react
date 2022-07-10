import React from "react";
import { useState } from "react";
import PersonalDetails from "./personalDetailsComponent";
// import '../css/personalDetailsComponent.css';

const PostApply =()=>{
    const[NoVacancy,setVacancy]=useState();
    const Vacancy=(e)=>{
        if(e.target.value==='none'){
            setVacancy(false);
        }
        else{
            setVacancy(true);
        }
    };
    
    return(
        <React.Fragment>
            <div className="post">
                <form>
                    <label>Name of the post(s): </label>
                    <select required>
                        <option>--Select--</option>
                        <option value={'DR'}>Deputy Registrar</option>
                        <option value={'AR(PK)'}>Assistant Registrar (P K Kelkar Central Library)</option>
                        <option value={'AR'}>Assistant Registrar</option>
                        <option value={'HO'}>Hindi Officer</option>
                        <option value={'StCo'}>Students' Counselor</option>
                        <option value={'JTS'}>Junior Technical Superitendent</option>
                    </select>
                    <br/>
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
            {NoVacancy ? <PersonalDetails/>:null}
        </React.Fragment>
    );
};
// class PostApply extends React.Component {
//     const[NoVacancy,setVacancy]=useState();
//         const SelectVacancy=(e)=>{
//             if(e.target.value==='none'){
//                 setVacancy(false);
//             }
//             else{
//                 setVacancy(true);
//             }
//         }
//     render() {
        
        
//         return (
            // <div className="post">
            //     <form>
            //         <label>Name of the post(s): </label>
            //         <select>
            //             <option>--Select--</option>
            //             <option value={'DR'}>Deputy Registrar</option>
            //             <option value={'AR(PK)'}>Assistant Registrar (P K Kelkar Central Library)</option>
            //             <option value={'AR'}>Assistant Registrar</option>
            //             <option value={'HO'}>Hindi Officer</option>
            //             <option value={'StCo'}>Students' Counselor</option>
            //             <option value={'JTS'}>Junior Technical Superitendent</option>
            //         </select>
            //         <br/>
            //         <label>Select Category:</label>
            //         <select onChange={SelectVacancy}>
            //             <option>--Select--</option>
            //             <option value="UR" id="UR">UR</option>
            //             <option value="EWS" id="EWS">EWS</option>
            //             <option value="OBC" id="OBC">OBC</option>
            //             <option value="SC" id="SC">SC</option>
            //             <option value="ST" id="ST">ST</option>
            //             <option value="PwD" id="PwD">PwD</option>
            //         </select>
            //     </form>
            // </div>
//         );
//     };
// };

export default PostApply;
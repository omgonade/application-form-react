import React from 'react';
import PersonalDetails from './personalDetailsComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Postal from './postal';
export const MainDetails = () => {
  return (
     
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PersonalDetails/>}/>
            <Route path="/postal" element={<Postal/>}/>
        </Routes>
        </BrowserRouter>
    
  )
}
export default MainDetails

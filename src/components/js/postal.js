import React from 'react'
import '../css/personalDetailsComponent.css';
import { useNavigate } from 'react-router-dom';

const Postal = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="postal">
        <div className="hed2_2">
          <h2> Postal Address</h2>
        </div>
        <h3 className="hed3_1">Present Address</h3>
        <div className="content2">
          <form action="">
            <label htmlFor="address">Address:</label>
            <br />
            <textarea
              name="address"
              id="address"
              col={100}
              rows={4}
              placeholder="Address"
              defaultValue={""}
            />
            <br />
            <label htmlFor="district">District:</label>
            <input type="text" name="district" id="district" placeholder="District" />
            <br />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="State" placeholder="State" />
            <br />
            <label htmlFor="Pincode">Pin Code:</label>
            <input
              type="text"
              name="Pincode"
              id="Pincode"
              placeholder="Pincode"
              inputMode="numeric"
              maxLength={6}
            />
            <br />
            <label htmlFor="phone">Phone No.:</label>
            <input type="tel" name="phone" id="phone" placeholder="Phone No." />
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="Email" id="Email" placeholder="Email" />
          </form>
        </div>
        <h3 className="hed3_2">Permanent Address</h3>
        <div className="content3">
          <form action="">
            <label htmlFor="address">Address:</label>
            <br />
            <textarea
              name="address"
              id="address1"
              col={100}
              rows={4}
              placeholder="Address"
              defaultValue={""}
            />
            <br />
            <label htmlFor="district">District:</label>
            <input
              type="text"
              name="district"
              id="district1"
              placeholder="District"
            />
            <br />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="State1" placeholder="State" />
            <br />
            <label htmlFor="Pincode">Pin Code:</label>
            <input
              type="text"
              name="Pincode"
              id="Pincode1"
              placeholder="Pincode"
              inputMode="numeric"
              maxLength={6}
            />
            <br />
            <label htmlFor="phone">Phone No.:</label>
            <input type="tel" name="phone" id="phone1" placeholder="Phone No." />
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="Email" id="Email1" placeholder="Email" />
          </form>
          <button onClick={() => navigate(-1)}>Go Back to Personal Details</button>
        </div>
      </div>

    </>
  )

}
export default Postal;
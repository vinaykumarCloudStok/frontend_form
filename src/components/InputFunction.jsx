import React from 'react'
import '../components/form.css'
import {AiOutlinePlus} from 'react-icons/ai'
const InputFunction = ({formik}) => {
  return (
    <div className="form-container">
  <div className="form-body">
    <form action="#">
      <div className="input-container">
       <div className="input-field">
        <label htmlFor="fname">First Name <span>*</span></label> <br />
        <input type="text" name="fname" id="" placeholder='Enter your first name here...' />
       </div>
       <div className="input-field">
        <label htmlFor="lname">Last Name <span>*</span></label> <br />
        <input type="text" name="lname" id="" placeholder='Enter your last name here...' />
       </div>
      </div>
      <div className="input-container">
       <div className="input-field">
        <label htmlFor="email">Email <span>*</span></label> <br />
        <input type="email" name="email" id="" placeholder='@gmail.com' />
       </div>
       <div className="input-field">
        <label htmlFor="dob">Date of Birth <span>*</span></label> <br />
        <input type="date" name="dob" id="" placeholder='Date of Birth'/>
       </div>
      </div>
      
   <div className="r-address-container">
    <h3>Residential Address</h3>
   <div className="input-container">
       <div className="input-field-a">
        <label htmlFor="fname">Street 1 <span>*</span></label> <br />
        <input type="text" name="fname" id="" />
       </div>
       <div className="input-field-a">
        <label htmlFor="fname">Street 2 <span>*</span></label> <br />
        <input type="text" name="fname" id="" />
       </div>
      </div>
   </div>
   <div className="r-address-container">
    <div className="c-container">
     <input type="checkbox" name="" className='check' id="" />
     <h3>Same as Residential Address </h3>
    </div>
    <h3>Permanent Address</h3>
   <div className="input-container">
       <div className="input-field-a">
        <label htmlFor="fname">Street 1 <span>*</span></label> <br />
        <input type="text" name="fname" id="" />
       </div>
       <div className="input-field-a">
        <label htmlFor="fname">Street 2 <span>*</span></label> <br />
        <input type="text" name="fname" id="" />
       </div>
      </div>
   </div>
   <div className="r-address-container">
    <h3>Residential Address</h3>
   <div className="input-container">
       <div className="input-field-a-b">
        <label htmlFor="fname">File Name <span>*</span></label> <br />
        <input type="text" name="fname" id="" />
       </div>
       <div className="input-field-a-b">
        <label htmlFor="fname">Type of File <span>*</span></label> <br />
        <select name="" id="">
          <option value="">Images</option>
          <option value="">Pdf</option>
        </select>
       </div>
       <div className="input-field-a-b">
        <label htmlFor="fname">Upload Document <span>*</span></label> <br />
        <input type="file" name="fname" id="" />
       </div>
       <div className="add-btn">
        <AiOutlinePlus className='icon'/>
       </div>
      </div>
   </div>
   <div className="btn-container">
    <button type='submit'>Submit</button>
   </div>
    </form>
  </div>
 </div>
  )
}

export default InputFunction
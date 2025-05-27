import React from 'react'
import { useNavigate } from 'react-router';

const Signup = () => {
   const navigate = useNavigate();

    const handleclick = () => {
        navigate("/profile")
    }
  return (
    <div className = "signup">
        <span className = "signuphead">Create your PopX account</span>
         <div class="form-container">
    <form>
      <div class="form-group">
        <label >Full Name<span>*</span></label>
        <input type="text" className="input" placeholder="Marry Doe"/>
      </div>

      <div class="form-group">
        <label >Phone number<span>*</span></label>
        <input type="text" placeholder="Marry Doe"/>
      </div>

      <div class="form-group">
        <label>Email address<span>*</span></label>
        <input type="text" placeholder="Marry Doe"/>
      </div>

      <div class="form-group">
        <label>Password <span>*</span></label>
        <input type="password" placeholder="Marry Doe"/>
      </div>

      <div class="form-group">
        <label>Company name</label>
        <input type="text" placeholder="Marry Doe"/>
      </div>
      <div class="form-group horizontal">
  <label className="radio-label">Are you an Agency?<span>*</span></label>
  <div class="radio-options">
    <label className="radio-option">
      <input type="radio" name="agency" checked />
      <span class="custom-radio"></span>
      Yes
    </label>
    <label className="radio-option">
      <input type="radio" name="agency" />
      <span class="custom-radio"></span>
      No
    </label>
  </div>
</div>
    </form>
  </div>
   <button className = "signup2"  onClick={handleclick} >Create Account</button>
      
    </div>
  )
}

export default Signup

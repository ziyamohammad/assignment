import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate("/profile")
    }
  return (
    <div className = "login">
     <span className="loginhead">Signin to your PopX account</span>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     <div class="form-container">
    <form>
        <div class="form-group">
        <label>Email address<span>*</span></label>
        <input type="text" placeholder="Enter email address"/>
      </div>

      <div class="form-group">
        <label>Password <span>*</span></label>
        <input type="password" placeholder="Enter password"/>
      </div>

    </form>
    </div>
    <button className="disablebut" onClick={handleclick}>Login</button>
      
    </div>
  )
}

export default Login

import React from 'react'
import { Link, useNavigate} from 'react-router'

const Main = () => {
    const navigate = useNavigate();

    const handleclick = (e) => {
        if(e.target.className === "signup1"){
            navigate("/signup1");
        }
        else{
            navigate("/login1");
        }
    }
  return (
    <div className = "main">
        <div className="content">
            <span className = "head">Welcome to PopX</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className = "signup1" onClick ={handleclick}>Create Account</button>
           <button className = "login1"  onClick ={handleclick}>Already Registered? Login</button>
        </div>
      
    </div>
  )
}

export default Main

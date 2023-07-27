import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  
  
  const navigate = useNavigate()

  // console.log(email, password)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const loginData = {email, password} 
  
    

    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await response.json()

    if (!response.ok) {
      console.log(result.error)
      alert(result.message)
      // alert("login unsuccessful, please fill the right credientials")
    }
    if (response.ok) {
      console.log(result)
      alert(result.message)
      // navigate("/home")
    }

  }


  

 

  return (

   
      <form
        onSubmit={handleSubmit}
        style={{
          border: "0.5px solid",
          textAlign:"center",
          width: "40%",
          margin: " 30px auto 0 auto",
          padding: "2rem",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
        }}
      >
        <h3>Login form</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="d-grid gap-2">
          <button class="btn btn-primary" type="Submit">
            Login
          </button>
          <h5>if you don't have account , please register first</h5>
        </div>
      </form>
  );
};

export default Login;

import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function login(){
   
    let item = { email,password };
    console.warn(item)

    let result = await fetch("http://localhost:8000/api/login",{
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item)
    });

    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate("/add");
  }




  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
        <br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
        <br/>

        <button onClick={login} className="btn btn-primary">
          Sign In
        </button>
      </div>
    </div>
  );
}
export default Login;

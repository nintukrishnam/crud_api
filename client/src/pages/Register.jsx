import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

    const [err,setError] = useState(null)

    const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  //register button click
  const handleSubmit = async e =>{
    e.preventDefault() // prevents from loading the page when click the button
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      navigate("/login")
    }
    catch(err){
      setError(err.response.data)
    }
  }

  console.log(inputs)
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange}></input>
        <input required type="text" placeholder='email' name='email' onChange={handleChange}></input>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p> }
        <span>Do you have an account?<Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register 
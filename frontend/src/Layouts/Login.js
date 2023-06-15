import React, { useState } from 'react'
import '../Css/Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const baseURL = process.env.REACT_APP_BASE_URL


const Login = () => {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  console.log(userData)

  const onChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }


  const submitHandler = async(e) => {
    e.preventDefault()
    await axios.post(`${baseURL}/api/v2/login`, {
      email: userData.email,
      password: userData.password
    }).then((response) => {
      console.log(response)
      if(response){
        setUserData({ email: "", password: "" });
        navigate('/admin')
        return toast.success(response.data.Message,{
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
    }).catch((error) => {
      console.log(error.response.data.Message)
      if(error){
        return toast.error(error.response.data.Message,{
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
    })

  }
  return (
    <div className='mt-5'>
      <h2 class="cardAbout ">Admin Login</h2>
        <div className='container d-flex justify-content-center mt-5'>
         <form className='col-sm-12 col-lg-6' onSubmit={submitHandler}>

            <div className="form-floating mt-4">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={userData.email} onChange={onChange}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-4">
              <input type="Password" className="form-control" id="floatingInput" placeholder="Password" name='password' value={userData.password} onChange={onChange}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

      
            <button className="lastBtn w-100 btn btn-lg btn-outline-primary mt-4" type="submit" onSubmit={submitHandler} >Submit</button>
        </form>

        </div>
    </div>
  )
}

export default Login
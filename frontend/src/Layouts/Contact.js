import React, { useState } from 'react'
import '../Css/Contact.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const baseURL = process.env.REACT_APP_BASE_URL



const Contact = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNo: ""
  })
  console.log(userData)

  const onChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }


  const submitHandler = async(e) => {
    e.preventDefault()
    await axios.post(`${baseURL}/api/v2/register`, {
      name: userData.name,
      email: userData.email,
      mobileNo: userData.mobileNo
    }).then((response) => {
      console.log(response)
      if(response){
        setUserData({ name: "", email: "", mobileNo: "" });
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
      <h2 class="cardAbout ">Contact Us</h2>
        <div className='container d-flex justify-content-center mt-5'>
         <form className='col-sm-12 col-lg-6' onSubmit={submitHandler}>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={userData.name} name='name' onChange={onChange}/>
              <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mt-4">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={userData.email} onChange={onChange}/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-4">
              <input type="number" className="form-control" id="floatingInput" placeholder="Mobile Number" name='mobileNo' value={userData.mobileNo} onChange={onChange}/>
              <label htmlFor="floatingPassword">Mobile Number</label>
            </div>

      
            <button className="lastBtn w-100 btn btn-lg btn-outline-primary mt-4" type="submit" onSubmit={submitHandler} >Submit</button>
        </form>

        </div>
    </div>
  )
}

export default Contact  
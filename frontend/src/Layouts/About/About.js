import React, { useEffect } from 'react'
import '../../Css/About.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAboutData } from '../../Actions/AboutActions'
import { toast } from 'react-toastify'


const About = () => {
    const dispatch = useDispatch()
    const { abData, error } = useSelector((state) => state.aboutDataState)
    console.log(abData)

    useEffect(() => {
        if(error){
            return toast.error(error,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getAboutData)
    }, [error, dispatch])
  return (
    
        <div className='container my-5'>
        <h2 class="cardAbout mb-5">About Us</h2>
           <div className='row'>
            {abData && abData.map(abDatas => (
                <div className='row justify-content-between'>
                <div className='sub1 col-lg-5'>
                    <img src={abDatas.images[4].image}/>
                </div>

                <div className='sub2 col-lg-5'>
                    <h2 className="card-title">{abDatas.title}</h2>
                    <p className="card-text mt-3">{abDatas.para}</p>
                    <Link to={`/about/${abDatas._id}`}><button type="button" className="btn btn-outline-secondary">More...</button></Link>

              </div>
            </div>
            ))}
            

            </div>
            </div>
       
  )
}

export default About
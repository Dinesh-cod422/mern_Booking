import React, { useEffect } from 'react'
import '../../Css/Service.css'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceData } from '../../Actions/ServiceActions'
import { Link } from 'react-router-dom'

const Service = () => {
    const dispatch = useDispatch()
    const { ServiceData } = useSelector((state) => state.serviceDataState)

    useEffect(() => {
        dispatch(getServiceData)
    }, [dispatch])

  return (
    <>
        <div className='main'>
           
          <div class="container text-center">
          <div class="card-body">
                <h2 class="card-title">Services</h2>
                <p class="card-text mt-3">With supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content</p>
           </div>
           </div>
                    <div className='container mt-5'>
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                        { ServiceData && ServiceData.map(ServiceDatas => (

                        <div className="col">
                            <div className="card">
                                <img src={ServiceDatas.images[0].image} className="card-img-top" alt={ServiceDatas.title}/>
                                <div className="card-body">
                                <Link to={`/service/${ServiceDatas._id}`}>

                                    <h5 className="card-title">{ServiceDatas.title}</h5>
                                    </Link>
                                    <p className="card-text">{ServiceDatas.para}</p>
                                </div>
                            </div>
                        </div>
                            ))}

                    </div>

                    </div>
            
        </div>
    </>
  )
}

export default Service
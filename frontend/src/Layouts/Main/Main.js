import React, { Fragment, useEffect, useState } from 'react'
import '../../Css/Main.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMaindatas } from '../../Actions/MainActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faLandmark, faLocationDot, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader'
import Pagination from "react-js-pagination";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
// import Mantaba from './Mantaba'


const Main = () => {
    const { MantabaDatas, loading, error, resPerPage, MantabaCount } = useSelector((state) => state.mainDataState)
    console.log(MantabaDatas)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage)
    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo)
    }

    useEffect(() => {
      if(error){
        return toast.error(error,{
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
        dispatch(getMaindatas(null, currentPage))
    }, [error, dispatch, currentPage])
  return (
    <Fragment>
      {loading ? <Loader /> :
        <Fragment>
          <div className='main'>
            <h1 id="products_heading" >Available...</h1>

                <div className="container">
                  <div className="row">
                    {MantabaDatas && MantabaDatas.map(mantabaData => (
                      <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                          <div className="card p-3 rounded">
                          <Link to={`/home/${mantabaData._id}`}>
                              <img
                              className="card-img-top mx-auto"
                              src={mantabaData.images[0].image} alt={mantabaData.name}
                              />
                          </Link>   

                              <div className="cardbody d-flex flex-column">
                                  {/* Hotel Name */}
                                  <div className='htname'>
                                      <h2>{mantabaData.name}</h2>
                                      <div>
                                          <FontAwesomeIcon icon={faStarHalfStroke} className='star' />
                                          <span className='span1'>{mantabaData.ratings}</span>
                                          <span>({mantabaData.numofReviews} Reviews)</span>
                                      </div>
                                  </div>
                                  {/* locations */}
                                  <div className='htLocation'>
                                      <div>
                                          <FontAwesomeIcon icon={faLocationDot} className='locaIcon'/>
                                          <span className='loca1'>{mantabaData.location}</span>
                                      </div>
                                      <div>
                                          <FontAwesomeIcon icon={faLandmark} className='landmark'/>
                                          <span className='loca2'>{mantabaData.description}</span>
                                      </div>
                                  </div>
                                  {/* Food */}
                                  <div className='htfood'>
                                      <div className='htveg'>
                                          <p>veg</p>
                                          <div>
                                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                                          <span className='amt'>{mantabaData.vegPrice}
                                              
                                          </span >
                                          <span>Per Plate</span>
                                      </div>
                                      </div>
                                      <div className='htnonveg'>
                                          <p>Non-veg</p>
                                          <div>
                                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                                          <span className='amt'>{mantabaData.nonVegPrice}
                                          </span>
                                          <span>Per Plate</span>

                                      </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div> 
                    ))}
                      
                  </div>
                  
                </div>
            

          </div>
          {MantabaCount > 0 && MantabaCount > resPerPage ?
          <div className='pageEdit d-flex justify-content-center mt-5'>
            <Pagination
            activePage={currentPage}
            onChange={setCurrentPageNo}
            itemsCountPerPage={resPerPage}
            totalItemsCount={MantabaCount}
            nextPageText={"Next"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass={"page-item"}
            linkClass={"page-link"}
            />
        </div> : null }
        
        </Fragment>
      }
    </Fragment>
  )
}

export default Main
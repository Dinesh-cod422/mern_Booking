import React, { useEffect } from 'react'
import '../../Css/MainDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faCamera, faCommentAlt, faEnvelope, faHeart, faImage, faIndianRupeeSign, faLink, faLocationDot, faPenNib, faPencilAlt, faPhone, faShareNodes, } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleMain } from '../../Actions/MainActions'
import Loader from '../Loader'
import { toast } from 'react-toastify'
import AboutMain from './AboutMain'
import ReviewMain from './ReviewMain'
import SeatsMain from './SeatsMain'
import ProjectsMain from './ProjectsMain'


const MainDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const { loading, error, singleMaindata } = useSelector((state) => state.mainDataState)

  useEffect(()=> {
    if(error){
      return toast.error(error,{
          position: toast.POSITION.BOTTOM_CENTER
      })
  }
    dispatch(getSingleMain(id))
  },[dispatch, id, error])
  return (
    <>
      {loading? <Loader/> : (
           <div className="subs1">
           <div className="container-fluid mx-4 ">
            
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-7">
                  {singleMaindata && singleMaindata.images ? (
                    <div className="cardImg1">
                      <img src={singleMaindata.images[0].image} alt="..." />
                    </div>
                  ) : (
                    <div>No image available</div>
                  )}
                        
                    
                        <div className="card4">
                          <div className="card5">
                            <h3>{singleMaindata && singleMaindata.name}</h3>
                            <h4>
                              <FontAwesomeIcon icon={faLocationDot} className='locaIcon'/>
                              <span className='locati'>{singleMaindata && singleMaindata.location}</span>                                   
                              <span className='locati1'>(map View)</span>

                              <div className='locati2'>{singleMaindata && singleMaindata.location}</div>
                            </h4>
                            <h4>
                              <FontAwesomeIcon icon={faPhone} className='locaIcon1'/>
                              <span className='cont1'>contact</span>
                            </h4>

                          </div>
                          
                          <div className="card6">
                            <p><span><FontAwesomeIcon icon={faImage}/></span>Photos</p>
                            <p><span><FontAwesomeIcon icon={faHeart}/></span>Favorite</p>
                            <p><span><FontAwesomeIcon icon={faPenNib}/></span>Write a Review</p>
                            <p><span><FontAwesomeIcon icon={faShareNodes}/></span>Share</p>
                          </div>
                        </div>

                        <div className="card7">
                        <Link to='/home/seats' className="nav-link active" aria-current="page">
                            <p><span><FontAwesomeIcon icon={faBurger}/></span>Feast</p>
                        </Link>
                        <Link to='/home/projects' className="nav-link active" aria-current="page">
                            <p><span><FontAwesomeIcon icon={faCamera}/></span>Projects</p>
                        </Link>
                        <Link to='/home/about' className="nav-link active" aria-current="page">
                            <p><span><FontAwesomeIcon icon={faCommentAlt}/></span>About us</p>
                        </Link>
                        <Link to='/home/review' className="nav-link active" aria-current="page">
                            <p><span><FontAwesomeIcon icon={faPencilAlt}/></span>Reviews</p>
                        </Link>

                        </div>

                        <div className="card8">
                        <div className="card92 container">
                            <p>Available areas(5)</p>
                            
                        </div>
                        <div className='areas'>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>
                            <p className=' card81 d-flex'><span className='icon8'><FontAwesomeIcon icon={faBurger}/></span><div className='card82 mt-1'>Feastdja jjfdhgkdjhja<p>jhdkjshjks</p></div></p>

                        </div>
                        </div>

                        <div className="card9">
                        <div className="card92 container">
                            <p>Portfolio ({singleMaindata.images.length})</p>
                            <p>Albums(89)</p>
                            <p>Videos(89)</p>
                        </div>
                        <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark slide" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='card91'>
                              <div className="container">
                                <div className="row">
                                  {singleMaindata && singleMaindata.images && singleMaindata.images.slice(0,12).map(image => (
                                    <img className="col-6 col-md-4 col-lg-4 my-1" src={image.image} alt='pic' />
                                  ))}
                               
                                
                              </div>
                              </div>
                              </div>
                              <Link to="."><button type="button" className="btn btn-outline-secondary">More...</button></Link>                           
                               </div>
                            <div className="carousel-item">
                            <div className='card91'>
                              <div className="container">
                                <div className="row">
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                
                              </div>
                              </div>
                              </div>
                              <Link to="."><button type="button" className="btn btn-outline-secondary">More...</button></Link>
                                                          </div>
                            <div className="carousel-item">
                            <div className='card91'>
                              <div className="container">
                                <div className="row">
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                <img className="col-6 col-md-4 col-lg-3 my-3" src="../../Img/company_growth1.jpeg" alt='pic' />
                                
                              </div>
                              </div>
                              </div>
                              <Link to="."><button type="button" className="btn btn-outline-secondary">More...</button></Link>
                                                          </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                        </div>

                        

                  </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                      <div className='card2'>
                        <div className="card21 container-fluid">
                            <h5>Starting Price</h5>
                            <p>Pricing Info</p>
                        </div>
                        <div className="card21 container-fluid">
                            <h5><FontAwesomeIcon icon={faIndianRupeeSign} />{singleMaindata && singleMaindata.vegPrice}<span>per plate</span><span>(taxes extra)</span></h5>
                            <p>Veg Price</p>
                        </div>
                        <div className="card22 container-fluid">
                            <h5><FontAwesomeIcon icon={faIndianRupeeSign} />{singleMaindata && singleMaindata.nonVegPrice}<span>per plate</span><span>(taxes extra)</span></h5>
                            <p>Non-Veg Price</p>
                        </div>
                      </div>
                      <div className='card2_3'>
                        <div className='card2_4'>
                        <Link to="#">
                          <button type="button" className="btn1"><span> <FontAwesomeIcon icon={faEnvelope} className='locaIcon'/></span>Send Message</button>
                        </Link>
                        <Link to="#">
                          <button type="button" className="btn2"><span> <FontAwesomeIcon icon={faPhone} className='locaIcon'/></span>View Contact</button>
                        </Link>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="card10">
                        <div className="card92 container-fluid">
                            <h5>About us</h5>
                            
                        </div>
                        <div className='card101'>
                          <p>example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.</p>
                          
                        </div>
                </div>               
                <div className="card10">
                        <div className="card92 container-fluid">
                            <h5>Reviews</h5>
                            
                        </div>
                        <div className='card101'>
                          <p>example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.example text to build on the card title and make up the bulk of the card's content.</p>
                          
                        </div>
                </div>
              </div>
           </div>
      )}
    
    </>
  )
}

export default MainDetails
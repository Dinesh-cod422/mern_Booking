import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faLandmark, faLocationDot, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

const Mantaba = ({mantabaData}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
        <div className="card p-3 rounded">
            <img
            className="card-img-top mx-auto"
            src={mantabaData.images[0].image} alt={mantabaData.name}
            />
            <div className="cardbody d-flex flex-column">
                {/* Hotel Name */}
                <div className='htname'>
                    <h2>{mantabaData.name}</h2>
                    <>
                        <FontAwesomeIcon icon={faStarHalfStroke} className='star' />
                        <span className='span1'>{mantabaData.ratings}</span>
                        <span>({mantabaData.numofReviews} Reviews)</span>
                    </>
                </div>
                {/* locations */}
                <div className='htLocation'>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} className='locaIcon'/>
                        <span className='loca1'>{mantabaData.location}</span>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLandmark} className='landmark'/>
                        <span className='loca2'>{mantabaData.description}</span>
                    </span>
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
  )
}

export default Mantaba
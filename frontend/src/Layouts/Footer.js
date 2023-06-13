import React from 'react'
import '../Css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer' >
           <div className="container text-center">
                <h2 className="card-title">Something...</h2>
                <p className="card-text mt-3">With supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content.ith supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.ith supporting text below </p>
                <div className='fooImg'>
                  <Link to="https://www.facebook.com/" target="_blank"><img src='../Img/facebook.png' alt='facebook...'/></Link>
                  <Link to="https://twitter.com/i/flow/login" target="_blank"><img src='../Img/twitter.png' alt='twitter...'/></Link>
                  <Link to="https://www.whatsapp.com/" target="_blank"><img src='../Img/whatsapp.png' alt='whatsapp...'/></Link>
                  <Link to="https://www.instagram.com/" target="_blank"><img src='../Img/instagram.png' alt='instagram...'/></Link>
                  <Link to="https://www.youtube.com/" target="_blank"><img src='../Img/youtube.png' alt='youtube...'/></Link>
                  <Link to="https://in.pinterest.com/" target="_blank"><img src='../Img/pinterest.png' alt='pinterest...'/></Link>

                </div>
           </div>
       
        </div>

        <div className='footer1'>
          <span>2023 <span><FontAwesomeIcon icon={faCopyright} /></span></span>
          <span>Terms & Conditions | Privacy Policy</span>
        </div>
      </footer>  
    </>
  )
}

export default Footer
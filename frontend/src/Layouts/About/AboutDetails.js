import React, { useEffect } from 'react';
import '../../Css/About.css';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutDetailsData } from '../../Actions/AboutActions';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { toast } from 'react-toastify';

const AboutDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, abDetailsData, error } = useSelector((state) => state.aboutDataState);
  console.log(abDetailsData);

  useEffect(() => {
    if(error){
      return toast.error(error,{
          position: toast.POSITION.BOTTOM_CENTER
      })
  }
    dispatch(getAboutDetailsData(id));
  }, [error, dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          <div className='wall '>
            {abDetailsData && abDetailsData.images && abDetailsData.images.length > 0 ? (
              <Carousel pause='hover'>
                {abDetailsData.images.map((image) => (
                  <Carousel.Item key={image._id}>
                    <img
                      className='d-block w-100'
                      src={image.image}
                      alt={abDetailsData.title}
                      height='500'
                      width='500'
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className='bodytag'>
            <h1>{abDetailsData && abDetailsData.title}</h1>
            <p>{abDetailsData && abDetailsData.mainpara}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutDetails;

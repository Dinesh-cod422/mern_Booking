import React, { useEffect } from 'react';
import '../../Css/About.css';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import { getserviceDetailsData } from '../../Actions/ServiceActions';

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, serDetailsData, error } = useSelector((state) => state.serviceDataState);
  console.log(serDetailsData);

  useEffect(() => {
    if(error){
      return toast.error(error,{
          position: toast.POSITION.BOTTOM_CENTER
      })
  }
    dispatch(getserviceDetailsData(id));
  }, [error, dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          <div className='wall '>
            {serDetailsData && serDetailsData.images && serDetailsData.images.length > 0 ? (
              <Carousel pause='hover'>
                {serDetailsData.images.map((image) => (
                  <Carousel.Item key={image._id}>
                    <img
                      className='d-block w-100'
                      src={image.image}
                      alt={serDetailsData.title}
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
            <h1>{serDetailsData && serDetailsData.title}</h1>
            <p>{serDetailsData && serDetailsData.mainpara}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;

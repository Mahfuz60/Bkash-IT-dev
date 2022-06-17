import React from 'react';
import './service.css';

const Service = ({ service }) => {
  return (
    <div className='col-lg-4 col-md-6 col-10 pt-5 mx-auto'>
      <div className='card'>
        <img src={service.img} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h4>{service.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Service;

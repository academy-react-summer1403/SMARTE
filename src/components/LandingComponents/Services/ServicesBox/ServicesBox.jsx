/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ServicesBox.css'

const ServiceBox = ({ icon, imageSrc, altText }) => {
  return (
    <div className='service-box'>
      <div className='icon-container'>
        <i className={icon}></i>
      </div>
      <div className='image-containers'>
        <img src={imageSrc} alt={altText} />
      </div>
    </div>
  )
}

export default ServiceBox

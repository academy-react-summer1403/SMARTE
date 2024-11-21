// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChatIcon from '../../../assets/images/icon/Chat.png'
import CertificateIcon from '../../../assets/images/icon/Certificate.png'
import NewJobIcon from '../../../assets/images/icon/New Job(1).png'
import ServiceImage1 from '../../../assets/images/Rectangle 12(4).png'
import ServiceImage2 from '../../../assets/images/Rectangle 12(3).png'
import ServiceImage3 from '../../../assets/images/Rectangle 12(2).png'
import ServiceImage4 from '../../../assets/images/Rectangle 12(1).png'

const Services = () => {
  return (
    <div className='Services-title-section'>
      <div className='Services-container'>
        <div className='Services-title'>خدمات ما</div>
        <div className='Services-circle'></div>
      </div>
      <div className='Services-subtitle'>
        {' '}
        مجموعه ای از تمام آنچه شما نیاز دارید{' '}
      </div>
      <div className='services-container'>
        <div className='service-box service-box-up'>
          <div className='circle-service-box bg-danger'>
            <div className='Services-icon-container'>
              <img src={ChatIcon} alt='مشاوره' />
            </div>
          </div>
          <div className='service-image-container'>
            <img src={ServiceImage1} alt='خدمت ۱' />
            <h3 className='text-danger'> مشاوره</h3>
            <p>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>
          </div>
        </div>
        <div className='service-box'>
          <div className='circle-service-box bg-warning'>
            <div className='Services-icon-container'>
              <img src={CertificateIcon} alt='مدرک معتبر' />
            </div>
          </div>
          <div className='service-image-container'>
            <img src={ServiceImage2} alt='خدمت ۲' />
            <h3 className='text-warning'> مدرک معتبر</h3>
            <p>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>
          </div>
        </div>
        <div className='service-box service-box-up'>
          <div className='circle-service-box bg-primary'>
            <div className='Services-icon-container'>
              <img src={NewJobIcon} alt='فرصت های شغلی' />
            </div>
          </div>
          <div className='service-image-container'>
            <img src={ServiceImage3} alt='خدمت ۳' />
            <h3 className='text-primary'> فرصت های شغلی</h3>
            <p>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>
          </div>
        </div>
        <div className='service-box'>
          <div className='circle-service-box bg-success'>
            <div className='Services-icon-container'>
              <img src={ChatIcon} alt='مشاوره' />
            </div>
          </div>
          <div className='service-image-container'>
            <img src={ServiceImage4} alt='خدمت ۴' />
            <h3 className='text-success'> مشاوره</h3>
            <p>متن ساختگی صنعت طراحی و چاپ برای استفاده طراحان گرافیک است.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

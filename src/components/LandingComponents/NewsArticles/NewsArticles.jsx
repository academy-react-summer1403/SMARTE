// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NewsArticles.css'
import rect37 from '../../../assets/images/Rectangle 37.png'
import rect38 from '../../../assets/images/Rectangle 38.png'
import rect41 from '../../../assets/images/Rectangle 41.png'
import rect40 from '../../../assets/images/Rectangle 40.png'
import rect42 from '../../../assets/images/Rectangle 42.png'
import rect43 from '../../../assets/images/Rectangle 43.png'
import { useNavigate } from 'react-router-dom' 

const NewsArticles = () => {
  const navigate = useNavigate() 

  const handleViewMore = () => {
    navigate('/articles') 
  }

  return (
    <div className='NewsArticles-title-section'>
      <div className='NewsArticles-container'>
        <div className='NewsArticles-title'>اخبار و مقالات</div>
        <div className='NewsArticles-circle'></div>
      </div>
      <div className='NewsArticles-subtitle'> !خودت را با خبر کن</div>

      <div className='gallery'>
        <div className='square'>
          <div className='image-container'>
            <img src={rect37} alt='تصویر 1' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            دنیای آنلاین؛ راهی برای افزایش فروش
          </div>
        </div>

        <div className='square'>
          <div className='image-container'>
            <img src={rect38} alt='تصویر 2' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            بازاریابی حسی راهی ساده و کم هزینه برای افزایش فروش
          </div>
        </div>

        <div className='rectangle'>
          <div className='image-container'>
            <img src={rect41} alt='تصویر 3' className='rectangle-images' />
            <div className='overlay-rectangle'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری
          </div>
        </div>

        <div className='rectangle'>
          <div className='image-container'>
            <img src={rect40} alt='تصویر 4' className='rectangle-images' />
            <div className='overlay-rectangle'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود
          </div>
        </div>

        <div className='square mt-custom'>
          <div className='image-container'>
            <img src={rect42} alt='تصویر 5' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>
            ورود به دنیای آنلاین؛ راهی مطمئن برای افزایش فروش
          </div>
        </div>

        <div className='square mt-custom'>
          <div className='image-container'>
            <img src={rect43} alt='تصویر 6' />
            <div className='overlay'>
              <button className='more-info-btn'>مطالعه مطلب</button>
            </div>
          </div>
          <div className='image-caption'>جذب مشتری با تبلیغات دهان به دهان</div>
        </div>
      </div>

      <div className='button-section mt-custom'>
        <button className='view-more-btn' onClick={handleViewMore}>
          <span className='arrow'> &lt; </span>
          مشاهده بیشتر
        </button>
      </div>
    </div>
  )
}

export default NewsArticles

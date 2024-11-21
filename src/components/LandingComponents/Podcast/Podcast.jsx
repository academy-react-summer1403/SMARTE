// Podcast.tsx
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PodcastCard from './PodcastCard/PodcastCard'
import './Podcast.css'

const Podcast = () => {
  return (
    <div className='podcast-title-section'>
      <div className='podcast-container'>
        <div className='podcast-title'>پادکست ها</div>
        <div className='podcast-circle'>
          <span className='podcast-circle-text'></span>
        </div>
      </div>
      <div className='podcast-subtitle'>
        مجموعه‌ای از تمام آنچه شما نیاز دارید
      </div>

      <PodcastCard
        date='21 مهر 1403'
        title='شروع یادگیری توسعه وب با ری اکت'
        description='ری اکت به عنوان یکی از محبوب‌ترین کتابخانه‌های جاوا اسکریپتی و یکی از مهمترین ابزارهای توسعه وب شناخته می‌شود.'
        time='00:45:30'
        views={250}
        likes={102}
      />
    </div>
  )
}

export default Podcast

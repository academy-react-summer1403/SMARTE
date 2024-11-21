// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { FaHeart, FaEye, FaClock } from 'react-icons/fa'
import './PodcastCard.css'
import PodcastImage from '../../../../assets/images/Rectangle 36.png'

const podcasts = [
  {
    date: '21 مهر 1403',
    title: '  یادگیری توسعه وب با ری اکت',
    description:
      ' ری اکت به عنوان یک از محبوب ترین کتابخانه های جاوا اسکریپتی و یکی از مهمترین ابزارهای توسعه وب شناخته می شود ',
    time: '00:45:30',
    views: 250,
    likes: 102
  },
  {
    date: '22 مهر 1403',
    title: 'پادکست ۲',
    description: 'توضیحات پادکست ۲',
    time: '01:15:45',
    views: 340,
    likes: 205
  },
  {
    date: '23 مهر 1403',
    title: 'پادکست ۳',
    description: 'توضیحات پادکست ۳',
    time: '00:35:20',
    views: 150,
    likes: 78
  },
  {
    date: '24 مهر 1403',
    title: 'پادکست ۴',
    description: 'توضیحات پادکست ۴',
    time: '00:55:10',
    views: 420,
    likes: 315
  }
]

const PodcastCard = () => {
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentPodcastIndex(prevIndex => (prevIndex + 1) % podcasts.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered])
  const podcast = podcasts[currentPodcastIndex]

  const handleDotClick = index => {
    setCurrentPodcastIndex(index)
  }

  return (
    <div
      className='custom-box'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='dots-container'>
        {podcasts.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPodcastIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className='date'>تاریخ: {podcast.date}</div>
      <h2 className='box-title'>{podcast.title}</h2>
      <p className='box-description'>{podcast.description}</p>
      <div className='right-box'>
        <img src={PodcastImage} alt='پادکست تصویر' />
      </div>

      <div className='stats'>
        <span className='stat-item'>
          <span className='timer'>{podcast.time}</span>
          <FaClock className='icon' />
        </span>
        <span className='stat-item'>
          <span className='stat-number'>{podcast.views}</span>
          <FaEye className='icon' />
        </span>
        <span className='stat-item'>
          <span className='stat-number'>{podcast.likes}</span>
          <FaHeart className='icon' />
        </span>
      </div>
    </div>
  )
}

export default PodcastCard

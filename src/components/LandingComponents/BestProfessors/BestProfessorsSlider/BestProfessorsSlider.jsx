// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import styles from './BestProfessorsSlider.module.css'
import Teacher1Image from '../../../../assets/images/Rectangle 28.png'
import Teacher2Image from '../../../../assets/images/Rectangle 31.png'
import Teacher3Image from '../../../../assets/images/Rectangle 32.png'
import Teacher4Image from '../../../../assets/images/Rectangle 33.png'
import FrameIcon from '../../../../assets/images/icon/Frame.png'
import VectorIcon from '../../../../assets/images/icon/Vector(2).png'

const PopularCategoriesSlider = () => {
  const images = [
    {
      src: Teacher1Image,
      teacherName: 'مهدی اصـغری',
      courses: '۲ دوره آموزشی',
      students: '۱۶۸ دانشجو'
    },
    {
      src: Teacher2Image,
      teacherName: 'محمد نوری',
      courses: '۳ دوره آموزشی',
      students: '۲۰۰ دانشجو'
    },
    {
      src: Teacher3Image,
      teacherName: 'اکبر رضایی',
      courses: '۱ دوره آموزشی',
      students: '۵۰ دانشجو'
    },
    {
      src: Teacher4Image,
      teacherName: 'علی محمدی',
      courses: '۴ دوره آموزشی',
      students: '۳۰۰ دانشجو'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const goToSlide = index => {
    setCurrentIndex(index)
  }

  return (
    <div>
      <div
        className={styles['image-container']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={images[currentIndex].src} alt='Popular Category' />
        <div className={styles['image-overlay']}>
          <h2 className={styles['teacher-name']}>
            {images[currentIndex].teacherName}
          </h2>
          <div className={styles['stats']}>
            <div className={styles['stat-item']}>
              <span>{images[currentIndex].courses}</span>
              <img src={FrameIcon} alt='Icon 1' className={styles['icon']} />
            </div>
            <div className={styles['stat-item']}>
              <span>{images[currentIndex].students}</span>
              <img src={VectorIcon} alt='Icon 2' className={styles['icon']} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['dots-container']}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles['dot']} ${
              index === currentIndex ? styles['active-dot'] : ''
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default PopularCategoriesSlider

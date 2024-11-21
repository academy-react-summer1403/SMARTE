// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './TrainingCourse.module.css';
import TrainingCourseCard from '../../common/TrainingCourseCard/TrainingCourseCard';
import CourseImage from '../../../assets/images/course image.png';
import AcademicHatIcon from '../../../assets/images/icon/academic hat.png';
import InstructorImage from '../../../assets/images/icon/Frame(5).png';
import BackButtonImage from '../../../assets/images/back btn.png';
import ForwardButtonImage from '../../../assets/images/forward btn.png';
import AllCoursesButtonImage from '../../../assets/images/icon/Frame(6).png';
import NewSectionImage from '../../../assets/images/Rectangle 23.png';

const TrainingCourse = () => {
  const rating = 4;
  const maxRating = 5;
  const navigate = useNavigate(); 

  const courses = Array.from({ length: 12 }, (_, index) => ({
    title: `دوره ${index + 1}`,
    image: CourseImage,
    details: [
      { icon: AcademicHatIcon, text: '50' },
      { icon: InstructorImage, text: 'حامد نظری' }
    ],
    price: '۱۲۰۰۰'
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 4;

  const getCurrentCourses = () => {
    return courses.slice(currentIndex, currentIndex + cardsPerSlide);
  };

  const handleDotClick = index => {
    setCurrentIndex(index * cardsPerSlide);
  };

  const handleCycle = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex < courses.length ? newIndex : prevIndex;
    });
  };

  const handleBackCycle = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = (prevIndex - 1 + courses.length) % courses.length;
      return newIndex;
    });
  };


  const handleAllCoursesClick = () => {
    navigate('/courses'); 
  };

  return (
    <div className={styles['title-section']}>
      <div className={styles.container}>
        <div className={styles.title}>دوره‌های آموزشی</div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.subtitle}>
        به روز ترین دوره‌هایی که می‌توانید پیدا کنید
      </div>

      <div className={styles.slider}>
        {getCurrentCourses().map((course, index) => (
          <TrainingCourseCard
            key={index}
            title={course.title}
            rating={rating}
            maxRating={maxRating}
            image={course.image}
            details={course.details}
            price={course.price}
          />
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {Array.from({ length: Math.ceil(courses.length / cardsPerSlide) }).map(
          (_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex / cardsPerSlide === index ? styles.active : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          )
        )}
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleCycle}
          disabled={currentIndex + cardsPerSlide >= courses.length}
        >
          <img src={BackButtonImage} alt='چرخش' className={styles.icon} />
        </button>
        <button onClick={handleBackCycle} disabled={currentIndex === 0}>
          <img src={ForwardButtonImage} alt='برگشت' className={styles.icon} />
        </button>
        <button className={styles.btn} onClick={handleAllCoursesClick}>
          همه دوره‌ها
          <img
            src={AllCoursesButtonImage}
            alt='برگشت'
            className={styles.arrow}
          />
        </button>
      </div>
      <img src={NewSectionImage} className={styles.newSection} alt='بخش جدید' />
    </div>
  );
};

export default TrainingCourse;

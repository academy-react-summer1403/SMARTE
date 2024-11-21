/* eslint-disable react/prop-types */
// CourseList.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import TrainingCourseCard from '../../../common/TrainingCourseCard/TrainingCourseCard';
import HorizontalCard from '../../../common/HorizontalCard/HorizontalCard';
import styles from './CourseList.module.css';

const CourseList = ({ courses, isHorizontal }) => {
  return (
    <div className={`${styles.slider} ${isHorizontal ? styles.horizontal : styles.vertical}`}>
      {courses.map((course, index) =>
        isHorizontal ? (
          <HorizontalCard
            key={index}
            title={course.title}
            rating={course.rating}
            maxRating={course.maxRating}
            image={course.image}
            details={course.details}
            price={course.price}
          />
        ) : (
          <TrainingCourseCard
            key={index}
            title={course.title}
            rating={course.rating}
            maxRating={course.maxRating}
            image={course.image}
            details={course.details}
            price={course.price}
          />
        )
      )}
    </div>
  );
};

export default CourseList;

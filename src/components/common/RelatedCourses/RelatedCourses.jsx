

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './RelatedCourses.module.css';

import CourseImage from '../../../assets/images/rel course pic.png';
import ButtonIcon from '../../../assets/images/icon/Frame(19).png';

const RelatedCourses = () => {
  const relatedCourses = [
    {
      title: '1 دوره تخصصی ترفند های طراحی فرانت اند',
      imgSrc: CourseImage
    },
    {
      title: '2 دوره تخصصی ترفند های طراحی فرانت اند',
      imgSrc: CourseImage
    },
    {
      title: '3 دوره تخصصی ترفند های طراحی فرانت اند',
      imgSrc: CourseImage
    },
    {
      title: '4 دوره تخصصی ترفند های طراحی فرانت اند',
      imgSrc: CourseImage
    }
  ];

  const renderCourseItem = (item) => (
    <div className={styles.rowItemSecondary} key={item.title}>
      <span className={styles.itemTitle}>{item.title}</span>
      <img src={item.imgSrc} alt="Course" className={styles.itemImage} />
      <button className={styles.itemButton}>
        <img src={ButtonIcon} alt="Button Icon" className={styles.buttonIcon} />{' '}
        مشاهده دوره
      </button>
    </div>
  );

  return (
    <div className={styles.relatedCourses}>
      <div className={styles.rowItem}>دوره های مرتبط</div>
      {relatedCourses.map(renderCourseItem)}
    </div>
  );
};

export default RelatedCourses;

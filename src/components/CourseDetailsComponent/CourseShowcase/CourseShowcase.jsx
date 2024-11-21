/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './CourseShowcase.module.css';

// Import images
import CourseImage from '../../../assets/images/course detail pic.png';
import Icon from '../../../assets/images/icon/Vector(6).png';
import InstructorIcon from '../../../assets/images/icon/Frame(27).png';
import PriceIcon from '../../../assets/images/icon/Frame(29).png';
import ButtonIcon from '../../../assets/images/icon/Frame(28).png';

const CourseShowcase = ({ title }) => {
  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.imageContainer}>
        <img src={CourseImage} alt={title} className={styles.courseImage} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.courseTitle}>دوره تخصصی و جامع React Js </h2>
          <img src={Icon} alt="Icon" className={styles.icon} />
        </div>
        <p className={styles.courseDescription}>
          حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت ReactJS این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید!
        </p>
        <div className={styles.iconContainer}>
          <span className={styles.iconText}>مهدی اصغری </span>
          <img src={InstructorIcon} alt="Right Icon" className={styles.icon1} />
          
          <span className={styles.iconText1}>تومان : ۳,۴۰۰,۰۰۰ </span>
          <img src={PriceIcon} alt="Right Icon" className={styles.icon2} />
        </div>
        <button className={styles.button}>
          <span className={styles.TextButton}> شرکت در دوره!</span>
          <img src={ButtonIcon} alt="Button Icon" className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default CourseShowcase;

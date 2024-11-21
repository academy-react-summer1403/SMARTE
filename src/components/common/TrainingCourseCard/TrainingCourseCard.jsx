/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './TrainingCourseCard.module.css';
import stars from '../../../assets/images/stars.png';
import frame1 from '../../../assets/images/icon/Frame(1).png';
import frame2 from '../../../assets/images/icon/Frame(2).png';
import frame3 from '../../../assets/images/icon/Frame(3).png';

const TrainingCourseCard = ({
  title,
  rating,
  maxRating,
  image,
  details,
  price,
  id 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles['image-container']}>
        <img src={image} alt='Course' className={styles.image} />
      </div>
      <div className={styles['card-content']}>
        <Link to={`/courses/${id}`} className={styles['card-title']}>
          <h3>{title}</h3>
        </Link>
        <div className={styles.details}>
          {details.map((detail, index) => (
            <div className={styles.detailItem} key={index}>
              <img
                src={detail.icon}
                alt={`Icon ${index + 1}`}
                className={styles.icon}
              />
              <span>{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.leftIcon}>
          {[...Array(maxRating)].map((_, index) => (
            <img
              key={index}
              src={index < rating ? stars : frame2}
              alt={`Star ${index + 1}`}
              className={styles.icon}
            />
          ))}
        </div>
        <div className={styles.rightIcon}>
          <span>7:۴۴</span>
          <img src={frame3} alt='Right Icon' className={styles.icon} />
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>قیمت: {price} تومان</span>
        <img src={frame1} alt='Icon' className={styles.icon} />
      </div>
    </div>
  );
};

export default TrainingCourseCard;

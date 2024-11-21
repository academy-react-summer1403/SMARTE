/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './NewsArticleCard.module.css';


import Frame12Icon from '../../../assets/images/icon/Frame(12).png';
import Frame11Icon from '../../../assets/images/icon/Frame(11).png';
import Frame13Icon from '../../../assets/images/icon/Frame(13).png';

const NewsArticleCard = ({ id, title, imageSrc, description, date, views }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate(`/articles/${id}`); 
  };

  return (
    <div className={styles.boxnews}>
      <img src={imageSrc} alt="توضیح تصویر" className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>
          <img src={Frame12Icon} alt="آیکون سمت چپ" />
          <span className={styles.iconText}>{date}</span>
        </span>
        <span className={styles.icon}>
          <img src={Frame11Icon} alt="آیکون سمت راست" />
          <span className={styles.iconText}>{views} بازدید</span>
        </span>
      </div>
      <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
        <img src={Frame13Icon} alt="مطالعه بیشتر" className={styles.readMoreIcon} />
        مطالعه بیشتر
      </button>
    </div>
  );
};

export default NewsArticleCard;

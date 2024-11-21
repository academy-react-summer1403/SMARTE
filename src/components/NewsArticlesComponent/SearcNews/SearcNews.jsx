// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './SearcNews.module.css';
import SearchButtonImage from '../../../assets/images/searchbox button(1).png';
import coursesherosection3 from '../../../assets/images/courses hero section shape(3).png';

// eslint-disable-next-line react/prop-types
const SearcNews = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
    <div className={styles['title-section']}>
      <div className={styles.circle}></div>
      <h1 className={styles.title}>اخبار و مقالات</h1>
      <p className={styles.subtitle}>. . . با ما خودت رو به روز کن</p>
      <img
        src={coursesherosection3}
        className={styles.img}
        alt="تصویر"
      />
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='. . . چی میخوای یاد بدونی؟'
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={SearchButtonImage} alt='Icon' className={styles.icon} />
      </div>
    </div>
    </>
  );
};

export default SearcNews;

/* eslint-disable react/prop-types */
// SearchTrainingCourses.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './SearchTrainingCourses.module.css';
import SearchButtonImage from '../../../assets/images/searchbox button(1).png';
import input from '../../../assets/images/input.png';
import coursesherosec from '../../../assets/images/courses hero section shape(2).png';

const SearchTrainingCourses = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles['title-section']}>
      <div className={styles.circle}></div>
      <h1 className={styles.title}>دوره های آموزشی</h1>
      <p className={styles.subtitle}>
        به روز ترین دوره هایی که میتونید پیدا کنید
      </p>
      <img
        src={coursesherosec}
        className={styles.img}
      />
      <img src={input} className={styles.schoolImage} />
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='...چی میخوای یاد بگیری؟'
          className={styles.searchInput}
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <img src={SearchButtonImage} alt='Icon' className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchTrainingCourses;

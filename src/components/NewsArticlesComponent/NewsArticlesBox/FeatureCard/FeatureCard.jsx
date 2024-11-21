/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../NewsArticlesBox.module.css';
import Frame14 from '../../../../assets/images/icon/Frame(14).png'
const FeatureCard = ({ title, imageSrc, buttonText }) => {
  return (
    <div className={styles.circle}>
      <img src={imageSrc} alt={title} className={styles.circleImage} />
      <h3 className={styles.circleTitle}>{title}</h3>
      <button className={styles.circleButton}>
        <img
          src={Frame14}
          alt='آیکون'
          className={styles.circleButtonIcon}
        />
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;

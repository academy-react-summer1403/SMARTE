/* eslint-disable react/prop-types */
// ButtonContainer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './FilterColumnChangeButton.module.css';
import Frame7 from '../../../../assets/images/icon/Frame(7).png';
import Frame8 from '../../../../assets/images/icon/Frame(8).png';
const FilterColumnChangeButton = ({ setIsHorizontal }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonperpendicular} onClick={() => setIsHorizontal(false)}>
        <img src={Frame7} alt='icon1' />
      </button>
      <button className={styles.buttonlateral} onClick={() => setIsHorizontal(true)}>
        <img src={Frame8} alt='icon2' />
      </button>
    </div>
  );
};

export default FilterColumnChangeButton;

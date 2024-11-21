// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './SecuritySettingsComponent.module.css';  


import IconHeader from '../../../assets/images/Group 90.png';
import SubmitIcon from '../../../assets/images/icon/Frame(54).png';
import CheckboxIcon from '../../../assets/images/icon/Frame(53).png';

const SecuritySettingsComponent = () => {
  return (
    <div className={styles.container}>

      <div className={styles.lineWithIcon}>
        <div className={styles.line}></div>
        <div className={styles.headerText1}>
          <img src={IconHeader} alt="icon" className={styles.iconheaderText} />
        </div>
        <div className={styles.iconContainer}>
          <img src={CheckboxIcon} alt="icon" className={styles.icon} />
        </div>
      </div>

      <div className={styles.lineWithIcon}>
        <div className={styles.headerText}> تغییر رمز عبور</div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputsContainer}>
          <div className={styles.inputWrapper}>
            <label className={styles.label}> رمز عبور فعلی</label>
            <input type="text" className={styles.input1} />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label}> رمز عبور جدید</label>
            <input type="text" className={styles.input1} />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label}> تکرار رمز عبور </label>
            <input type="text" className={styles.input1} />
          </div>
        </div>

        <button className={styles.submitButton}>
          ذخیره تغییرات
          <img src={SubmitIcon} alt="submit icon" className={styles.submitIcon} />
        </button>
      </div>

      <div className={styles.lineWithIcon}>
        <div className={styles.headerText}> تایید ورود دو مرحله ای  </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.checkboxSection}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <h3 className={styles.checkboxText}>فعال کردن تایید ورود دو مرحله ای</h3>
        </label>
      </div>

      <div className={styles.lineWithIcon}>
        <div className={styles.headerText}> ایمیل بازیابی </div>
        <div className={styles.line}></div>  
      </div>

      <div className={styles.inputSection}>
        <h3 className={styles.inputText}>ایمیل جدید</h3>
        <input 
          type="email" 
          className={styles.input2} 
          placeholder="example@gmail.com" 
        />
      </div>
    </div>
  );
};

export default SecuritySettingsComponent;

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './EditUserInfo.module.css';


import ProfilePic from '../../../../assets/images/user profile pic.png';
import AdditionalImage from '../../../../assets/images/Ellipse 51(1).png';
import CancelIcon from '../../../../assets/images/icon/Frame(60).png';
import SaveIcon from '../../../../assets/images/icon/Frame(54).png';

const EditUserInfo = ({ userInfo, onChange, onCancel, onSave }) => {
  return (
    <div className={styles.container}>
      <form onSubmit={onSave}>
        <div className={styles.formContainer}>
          <div className={styles.rightColumn}>
            <div className={styles.inputRow}>
              <label>
                نام و نام خانوادگی:
                <input
                  type="text"
                  name="Name"
                  value={userInfo.Name}
                  onChange={onChange}
                />
              </label>
              <label>
                ایمیل:
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className={styles.inputRow}>
              <label>
                تاریخ تولد:
                <input
                  type="text"
                  name="birthDate"
                  value={userInfo.birthDate}
                  onChange={onChange}
                />
              </label>
              <label>
                شماره همراه:
                <input
                  type="text"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className={styles.inputRow}>
              <label>
                کد ملی:
                <input
                  type="text"
                  name="nationalCode"
                  value={userInfo.nationalCode}
                  onChange={onChange}
                />
              </label>
              <label>
                جنسیت:
                <input
                  type="text"
                  name="gender"
                  value={userInfo.gender}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className={styles.inputRow}>
              <label>
                تلگرام:
                <input
                  type="text"
                  name="telegram"
                  value={userInfo.telegram}
                  onChange={onChange}
                />
              </label>
              <label>
                لینکدین:
                <input
                  type="text"
                  name="linkedin"
                  value={userInfo.linkedin}
                  onChange={onChange}
                />
              </label>
            </div>
          </div>

          <div className={styles.leftColumn}>
            <div className={styles.profilePictureContainer}>
              <img
                src={ProfilePic} 
                alt="Profile"
                className={styles.profilePicture}
              />
            </div>

            <label>
              درباره من:
              <textarea
                name="about"
                value={userInfo.about}
                onChange={onChange}
                className={styles.aboutInput}
              />
            </label>

            <label>
              آدرس:
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={onChange}
              />
            </label>
            <div className={styles.profilePictureContainer}>
              <img
                src={AdditionalImage} 
                alt="Profile"
                className={styles.profilePicture}
              />
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" onClick={onCancel} className={styles.cancelButton}>
            <img src={CancelIcon} alt="Cancel" className={styles.icon} /> لغو
          </button>
          <button type="submit" className={styles.saveButton}>
            <img src={SaveIcon} alt="Save" className={styles.icon} /> ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserInfo;

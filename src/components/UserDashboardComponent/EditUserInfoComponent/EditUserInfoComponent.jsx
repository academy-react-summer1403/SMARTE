
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import EditUserInfo from './EditUserInfo/EditUserInfo'; 
import styles from './EditUserInfoComponent.module.css';

// Import images
import ProfileIcon from '../../../assets/images/icon/Frame(55).png';
import AdditionalImage from '../../../assets/images/Ellipse 51(1).png';
import EditIcon from '../../../assets/images/icon/Frame(57).png';

const EditUserInfoComponent = () => {
  const [isEditing, setIsEditing] = useState(false); 
  const [userInfo, setUserInfo] = useState({
    Name: 'فلان فلانی زاده',
    nationalCode: '--',
    email: 'folani@gmail.com',
    birthDate: '1370/01/15',
    gender: '--',
    about: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    phoneNumber: '۰۹۳۹۲۲۲۹۹۹۹',
    telegram: '--',
    linkedin: '--',
    address: 'مازندران - ساری - میدان خزر - جاده فرح آباد خیابان دیمطوران  - ساختمان هوتن ۱۲ -واحد ۱۵',
    latitude: '--',
    longitude: '--',
  });

  const handleEditClick = () => {
    setIsEditing(true); 
  };

  const handleCancelEdit = () => {
    setIsEditing(false); 
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsEditing(false); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {isEditing ? (
          <EditUserInfo
            userInfo={userInfo}
            onChange={handleChange}
            onCancel={handleCancelEdit}
            onSave={handleSaveChanges}
          />
        ) : (
          <div>
            <div className={styles.colImage}>
              <img
                src={ProfileIcon} // استفاده از تصویر وارد شده
                alt="Profile Icon"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.colInfo}>
                <p className={styles.infoText}><strong>نام و نام خانوادگی:</strong> {userInfo.Name}</p>
                <p className={styles.infoText}><strong>کد ملی:</strong> {userInfo.nationalCode}</p>
                <p className={styles.infoText}><strong>ایمیل:</strong> {userInfo.email}</p>
                <p className={styles.infoText}><strong>تاریخ تولد:</strong> {userInfo.birthDate}</p>
                <p className={styles.infoText}><strong>جنسیت:</strong> {userInfo.gender}</p>
                <p className={styles.infoText}><strong>درباره من:</strong> {userInfo.about}</p>
              </div>

              <div className={styles.colInfo}>
                <p className={styles.infoText}><strong>شماره همراه:</strong> {userInfo.phoneNumber}</p>
                <p className={styles.infoText}><strong>تلگرام:</strong> {userInfo.telegram}</p>
                <p className={styles.infoText}><strong>لینکدین:</strong> <a href={`https://${userInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{userInfo.linkedin}</a></p>
                <p className={styles.infoText}><strong>آدرس:</strong> {userInfo.address}</p>
                <p className={styles.infoText}><strong>طول جغرافیایی:</strong> {userInfo.latitude}</p>
                <p className={styles.infoText}><strong>عرض جغرافیایی:</strong> {userInfo.longitude}</p>

                <div className={styles.additionalImageContainer}>
                  <img
                    src={AdditionalImage} // استفاده از تصویر وارد شده
                    alt="Additional Image"
                    className={styles.additionalImage}
                  />
                 
                </div>
              </div>
            </div>
            <div className={styles.editButtonContainer}>
              <button className={styles.editButton} onClick={handleEditClick}>
                ویرایش
                <img src={EditIcon} alt="Edit Icon" className={styles.editIcon} /> {/* استفاده از آیکون ویرایش وارد شده */}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUserInfoComponent;

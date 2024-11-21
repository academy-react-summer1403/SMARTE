// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './SchoolsTitle.module.css'
import HeroSectionImage from '../../../assets/images/hero section main shape(1).png'
import StudentImage from '../../../assets/images/Group 1(1).png'
import TeacherImage from '../../../assets/images/Group 2(1).png'
import SearchButtonImage from '../../../assets/images/searchbox button(1).png'

const SchoolsTitle = () => {
  return (
    <div className={styles['title-section']}>
      <h1 className={styles.title}>عنوان آموزشگاه</h1>

      <p className={styles.subtitle}>
        مرجع آموزش زنده و تعاملی برنامه نویسی حوزه وب با دسترسی به بیش از هفت
        هزار ویدیوی آموزشی به زبان فارسی
      </p>

      <img
        src={HeroSectionImage}
        className={styles.img}
        alt='شکل اصلی بخش قهرمان'
      />
      <div className={styles.student}>
        ۱۰۰۰+ دانشجو
        <img
          src={StudentImage}
          className={styles.schoolImage}
          alt='تصویر دانشجویان'
        />
      </div>
      <div className={styles.teacher}>
        ۵۰+ مدرس
        <img
          src={TeacherImage}
          className={styles.schoolImage}
          alt='تصویر مدرسان'
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='...دنبال چی میگردی؟'
          className={styles.searchInput}
        />
        <img src={SearchButtonImage} alt='Icon' className={styles.icon} />
      </div>
    </div>
  )
}

export default SchoolsTitle

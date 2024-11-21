// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './PopularCategories.module.css'
import SecurityIcon from '../../../assets/images/icon/Security Shield.png'
import GameIcon from '../../../assets/images/icon/Game Controller.png'
import DataIcon from '../../../assets/images/icon/Pie Chart.png'
import WebDesignIcon from '../../../assets/images/icon/Windows 10 Personalization.png'

const PopularCategories = () => {
  return (
    <div className={styles['title-section']}>
      <div className={styles.container}>
        <div className={styles.title}>محبوب ترین دسته بندی ها</div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.subtitle}>گستره وسیعی از محبوب ترین دوره ها</div>
      <div className={styles['diamond-section']}>
        <div className={styles['diamond']}>
          <div className={styles['diamond-title']}>امنیت شبکه</div>
          <div className={styles['icon-container']}>
            <img
              src={SecurityIcon}
              alt='Security Icon'
              className={styles['icon']}
            />
          </div>
        </div>
        <div className={styles['diamond']}>
          <div className={styles['diamond-title']}>بازی سازی</div>
          <div className={styles['icon-container']}>
            <img src={GameIcon} alt='Game Icon' className={styles['icon']} />
          </div>
        </div>
        <div className={styles['diamond']}>
          <div className={styles['diamond-title']}>تحلیل داده</div>
          <div className={styles['icon-container']}>
            <img src={DataIcon} alt='Data Icon' className={styles['icon']} />
          </div>
        </div>
        <div className={styles['diamond']}>
          <div className={styles['diamond-title']}>طراحی صفحات وب</div>
          <div className={styles['icon-container']}>
            <img
              src={WebDesignIcon}
              alt='Web Design Icon'
              className={styles['icon']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories

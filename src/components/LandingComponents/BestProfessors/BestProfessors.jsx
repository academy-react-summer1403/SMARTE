// PopularCategories.tsx یا PopularCategories.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react'
import BestProfessorsSlider from '../BestProfessors/BestProfessorsSlider/BestProfessorsSlider'
import styles from './BestProfessors.module.css'

const BestProfessors = () => {
  return (
    <div className={styles['Best-Professors']}>
      <div className={styles['background-image']}></div>
      <div className={styles['image-wrapper']}>
        <BestProfessorsSlider />
      </div>
      <div className={styles['content']}>
        <h1>برترین اساتید رو همینجا پیدا می کنید</h1>
        <p>
          برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو بهتر
          بشناسیم
        </p>
      </div>
    </div>
  )
}

export default BestProfessors

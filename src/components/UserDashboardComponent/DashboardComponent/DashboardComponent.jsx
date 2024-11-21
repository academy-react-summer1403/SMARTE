// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './DashboardComponent.module.css'

// Importing images
import Icon1 from '../../../assets/images/Group 86.png';
import Icon2 from '../../../assets/images/Group 87.png';
import NewsIcon from '../../../assets/images/icon/Frame(48).png';
import LeftArrowIcon from '../../../assets/images/icon/Frame(19).png';
import RightArrowIcon from '../../../assets/images/icon/Frame(19).png';
import LeftIcon from '../../../assets/images/Rectangle 111.png';
import RightIcon from '../../../assets/images/icon/Frame(49).png';
import FigmaIcon from '../../../assets/images/Rectangle 115.png';
import ApiIcon from '../../../assets/images/Rectangle 113.png';
import JsLibraryIcon from '../../../assets/images/Rectangle 117.png';

const TeachersComponent = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.topRow}>
        <div className={styles.box}>
          <div className={styles.textContainer}>
            <h3 className={styles.boxTitle}>۴ دوره</h3>
            <p className={styles.boxDescription}>شرکت کرده اید</p>
          </div>
          <img src={Icon1} alt='Icon 1' className={styles.icon} />
        </div>

        <div className={styles.box}>
          <div className={styles.textContainer}>
            <h3 className={`${styles.boxTitle} text-warning`}>۲ دوره</h3>
            <p className={styles.boxDescription}>رزرو کرده اید</p>
          </div>
          <img src={Icon2} alt='Icon 2' className={styles.icon} />
        </div>

        <div className={styles.box}>
          <div className={styles.textContainer}>
            <p className={styles.boxDescription}>
              برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.
            </p>
          </div>
        </div>

        <div className={styles.roundedBox}>
          <h3 className={styles.boxTitle}>۶۰ ٪</h3>
          <div className={styles.roundedBox1}></div>
        </div>
      </div>

      <div className={styles.largeBox}>
        <div className={styles.largeBoxRow}>
          <div className={styles.largeBoxCenter}>
            <h3 className={styles.largeBoxTitle}>جدید ترین اخبار و مقالات</h3>
          </div>
          <div className={styles.largeBoxLeft}>
            <img
              src={NewsIcon}
              alt='Icon'
              className={styles.largeBoxIcon}
            />
          </div>
        </div>

        <div className={styles.largeBoxRow}>
          <div className={styles.largeBoxLeft}>
            <p className={styles.largeBoxDescription}> دوره آموزش جامع از پایه تا پیشرفته  Next.js منتشر شد. </p>
          </div>
          <div className={styles.largeBoxRight}>
            <p className={styles.largeBoxDescription}> ۱۴۰۲ / ۱۱ / ۳۰</p>
          </div>
        </div>

        <div className={styles.largeBoxRow}>
          <div className={styles.largeBoxLeft}>
            <p className={styles.largeBoxDescription}> تخفیف ویژه دوره ری اکت را از دست ندهید .</p>
          </div>
          <div className={styles.largeBoxRight}>
            <p className={styles.largeBoxDescription}> ۱۴۰۲ / ۱۱ / ۲۵</p>
          </div>
        </div>

        <div className={styles.largeBoxRow}>
          <div className={styles.largeBoxLeft}>
            <p className={styles.largeBoxDescription}> دوره آموزش  tailwind  به روز شد.</p>
          </div>
          <div className={styles.largeBoxRight}>
            <p className={styles.largeBoxDescription}> راست</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.leftBox}>
          <h3 className={styles.boxTitle}> دوره های در حال برگزاری:</h3>
          <div className={styles.buttonContainer}>
            <button className={styles.moreButton}>
              مشاهده بیشتر
              <img
                src={LeftArrowIcon}
                alt='Left Arrow'
                className={styles.buttonIcon}
              />
            </button>
          </div>
        </div>

        <div className={styles.rightBox}>
          <h3 className={styles.boxTitle}> دوره های پیشنهادی:</h3>
          <div className={styles.buttonContainer}>
            <button className={styles.moreButton}>
              مشاهده بیشتر
              <img
                src={RightArrowIcon}
                alt='Right Arrow'
                className={styles.buttonIcon}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.smallBox}>
          <h3 className={styles.boxTitle1}> آموزش جامع ری اکت جی اس</h3>
          <div className={styles.buttonContainer}>
            <img
              src={LeftIcon}
              alt='Left Icon'
              className={styles.boxIcon1}
            />
            <button className={styles.moreButton1}>
              مهدی اصغری
              <img
                src={RightIcon}
                alt='Right Icon'
                className={styles.buttonIcon2}
              />
            </button>
          </div>
        </div>

        <div className={styles.smallBox}>
          <h3 className={styles.boxTitle1}> آموزش کامل کار با figma</h3>
          <div className={styles.buttonContainer}>
            <img
              src={FigmaIcon}
              alt='Left Icon'
              className={styles.boxIcon1}
            />
            <button className={styles.moreButton1}>
              مشاهده دوره
              <img
                src={LeftArrowIcon}
                alt='Right Icon'
                className={styles.buttonIcon1}
              />
            </button>
          </div>
        </div>

        <div className={styles.smallBox}>
          <h3 className={styles.boxTitle1}> پکیج آموزش کار با API های </h3>
          <div className={styles.buttonContainer}>
            <img
              src={ApiIcon}
              alt='Left Icon'
              className={styles.boxIcon1}
            />
            <button className={styles.moreButton1}>
              محسن اسفندیاری
              <img
                src={RightIcon}
                alt='Right Icon'
                className={styles.buttonIcon2}
              />
            </button>
          </div>
        </div>

        <div className={styles.smallBox}>
          <h3 className={styles.boxTitle1}> آموزش کتابخانه های کاربردی js</h3>
          <div className={styles.buttonContainer}>
            <img
              src={JsLibraryIcon}
              alt='Left Icon'
              className={styles.boxIcon1}
            />
            <button className={styles.moreButton1}>
              مشاهده دوره
              <img
                src={LeftArrowIcon}
                alt='Right Icon'
                className={styles.buttonIcon1}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersComponent;

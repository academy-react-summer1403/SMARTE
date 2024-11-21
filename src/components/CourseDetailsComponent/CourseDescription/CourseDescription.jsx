// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './CourseDescription.module.css';
import RelatedCourses from '../../common/RelatedCourses/RelatedCourses';
import Comments from '../../common/Comments/Comments';
import Headlines from '../Headlines/Headlines';


import CategoryIcon from '../../../assets/images/icon/Frame(32).png';
import PrerequisitesIcon from '../../../assets/images/icon/Frame(33).png';
import ModeIcon from '../../../assets/images/icon/Frame(34).png';
import StatusIcon from '../../../assets/images/icon/Frame(35).png';
import StartDateIcon from '../../../assets/images/icon/Frame(36).png';
import CompletionIcon from '../../../assets/images/icon/Frame(36).png';
import SatisfactionIcon from '../../../assets/images/icon/Frame(30).png';
import StudentIcon from '../../../assets/images/icon/Frame(31).png';
import ProfileImage from '../../../assets/images/Ellipse 35.png';

const CourseDescription = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(!showFullText);
  };

  const courseDetails = [
    { title: 'دسته بندی فــرانت اند', imgSrc: CategoryIcon },
    { title: 'پیش نیاز ها: HTML , CSS , JS', imgSrc: PrerequisitesIcon },
    { title: 'نوع آموزش: حضوری و غیرحضوری', imgSrc: ModeIcon },
    { title: 'وضعیت دوره: درحال برگزاری', imgSrc: StatusIcon },
    { title: 'تاریخ شروع دوره: ۱۴۰۳/۰۲/۱۱', imgSrc: StartDateIcon },
    { title: 'تاریخ پایان دوره: ۱۴۰۳/۰۲/۱۱', imgSrc: CompletionIcon },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.leftcard}>
          <div className={styles.row}>
            {[{ rating: '4.7', label: 'رضایت', imgSrc: SatisfactionIcon },
              { rating: '216', label: 'دانشجو', imgSrc: StudentIcon }]
              .map((item, index) => (
                <div className={styles.column} key={index}>
                  <div className={styles.spanContainer}>
                    <span className={styles.spanItem}>{item.rating}</span>
                    <span className={styles.spanItem}>{item.label}</span>
                  </div>
                  <img src={item.imgSrc} alt='آیکون' className={styles.icon} />
                </div>
            ))}
          </div>
          <div className={styles.newSpanContainer}>
            <span className={styles.leftSpanItem}>۸۷٪</span>
            <span className={styles.rightSpanItem}>درصد تکمیل دوره</span>
          </div>
          <div className={styles.CompletionPercentage}>
            <div className={styles.Completion}></div>
          </div>
          <div className={styles.body}>
            {courseDetails.map((detail, index) => (
              <div className={styles.singleItem} key={index}>
                <h4 className={styles.itemTitle}>{detail.title}</h4>
                <img src={detail.imgSrc} alt='آیکون' className={styles.iconRight} />
              </div>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={ProfileImage} alt='عکس پروفایل' className={styles.profileImage} />
            <button className={styles.profileButton}>پروفایل مدرس دوره</button>
          </div>
        </div>
        <div className={styles.Related}>
          <RelatedCourses />
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.title}>توضیحات</h2>
        <div
          className={`${styles.rightcard} ${
            showFullText ? styles.fullText : styles.partialText
          }`}
        >
          <p>
            قبل ازآموزش ری اکت ReactJSابتدای کار به شما بگیم که تکنولوژی ری اکت
            برگ برنده برنامه نویسان در دنیای امروز هست اصلا اغراق نکردیم. یه غول
            به تمام معنا و دنیایی بی انتها از پروژه هایی که میشه با اون نوشت،
            اون هم خیلی سریع و راحت! تکنولوژی که دنیای وب رو دگرگون کرد و دستپخت
            شرکت فیسبوک هست که اینستاگرام رو هم با اون طراحی کرده! کامپوننت محور
            بودن ری اکت باعث میشه شما با کدنویسی یک بخش بتونید بی نهایت بار در
            بخش های مختلف پروژه از اون استفاده کنید و از طرفی میتونید پروژه هایی
            بسازید که بدون نیاز به رفرش، هر دیتا و بخشی از صفحه رو تغییر بدید
            اون هم با سرعت نور! برای همین ری اکت، زمان کدنویسی و به اتمام پروژه
            رو خیلی کوتاهتر از قبل کرده! خلاصه به شما تبریک میگیم که خیلی دقیق
            مطالعه کردید و به این نتیجه رسیدید که الان بهترین زمان برای یادگیری
            ری اکت هست. پس از الان با تمام اطمینان خیالتون رو راحت می کنیم : شما
            با دوره آموزش ری اکت سبزلرن، نه تنها به این تکنولوژی به تسلط 100
            درصد می رسید، بلکه طوری آموزش عملی می بینید و راهنمایی می گیرید که
            یک راست وارد بازار کار بشید. بی حرف و حدیث. بی ترس و تردید! اگه به
            حوزه برنامه نویسی سمت کاربر، طراحی رابط کاربری (UI) و به طور کلی
            پروژه های تعامل محور و سریع علاقه دارید، ری اکت یکی از بهترین
            دستیاران شما برای شما
          </p>
        </div>
        <button className={styles.showMoreButton} onClick={handleShowMore}>
          {showFullText ? 'نمایش کمتر' : 'نمایش کامل'}
        </button>
        <Headlines />
        <div className={styles.Comments}>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;

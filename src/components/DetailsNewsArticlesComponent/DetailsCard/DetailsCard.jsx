// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from './DetailsCard.module.css'
import Comments from '../../common/Comments/Comments'
import RelatedCourses from '../../common/RelatedCourses/RelatedCourses'


import ProfileImage from '../../../assets/images/Rectangle 100.png';
import CourseImage1 from '../../../assets/images/rel course pic(1).png';
import CourseImage2 from '../../../assets/images/rel course pic(2).png';
import CourseImage3 from '../../../assets/images/rel course pic(3).png';
import ReactImage from '../../../assets/images/reactjs-1 1.png';
import ButtonIcon from '../../../assets/images/icon/Frame(19).png';
import ThumbIcon from '../../../assets/images/icon/Frame(22).png';
import ExtraIcon from '../../../assets/images/icon/Frame(21).png';
import UserIcon from '../../../assets/images/icon/Frame(20).png';
import StarIcon from '../../../assets/images/Group 43.png';

const DetailsCard = () => {
  const recommendedTopics = [
    { title: 'همه چیز در مورد انگولار', imgSrc: CourseImage1 },
    { title: 'چگونه برای سایتمان پشتیبان بهتری باشیم ؟', imgSrc: CourseImage2 },
    { title: 'چرا فیگما را انتخاب کنیم؟', imgSrc: CourseImage3 }
  ];

  const renderItem = (item) => (
    <div className={styles.rowItemSecondary} key={item.title}>
      <span className={styles.itemTitle}>{item.title}</span>
      <img src={item.imgSrc} alt="Icon" className={styles.itemImage} />
      <button className={styles.itemButton}>
        <img
          src={ButtonIcon}
          alt="Button Icon"
          className={styles.buttonIcon}
        />{' '}
        مشاهده دوره
      </button>
    </div>
  );

  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftBox}>
          <div className={styles.imageContainer}>
            <img
              src={ProfileImage}
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
        </div>

        <div className={styles.middleBox}>
          <RelatedCourses />
        </div>

        <div className={styles.middleBox}>
          <div className={styles.rowItem}>مطالب پیشنهادی</div>
          {recommendedTopics.map(renderItem)}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightBox}>
          <div className={styles.circle}></div>
          <h1 className={styles.title}>
            ری اکت چیست و چه کاربرد هایی دارد؟ + ۵ دلیل استفاده از ری اکت
          </h1>
          <div className={styles.iconsRow}>
           
            <span className={styles.iconText}>
              <img
                src={ThumbIcon}
                alt="Icon 1"
                className={styles.icon}
              />{' '}
              مهدی اصغری
            </span>
            <span className={styles.iconText}>
              <img
                src={ExtraIcon}
                alt="Icon 2"
                className={styles.icon}
              />{' '}
              ۱۴۰۳/۰۱/۱۸
            </span>
            <span className={styles.iconText}>
              <img
                src={UserIcon}
                alt="Icon 3"
                className={styles.icon}
              />{' '}
              ۵۶ بازدید
            </span>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div>
            <p className={styles.textTop}>
              ری اکت چیست؟ تصور کنید یک مهندس طراحی خودرو نخبه ، قصد داره یک
              ماشین جدید و جذاب بسازه. این مهندس ما دو راه برای رسیدن به هدفش
              داره! ما در این مقاله قراره خیلی خودمونی بگیم ری اکت چی هستش؟ که
              در کنارش بتونید از آموزش react لذت ببرید. خب پس بزن بریم! 1– مثلا
              به دولت مراجعه کنه و بگه لطفا ابزار و مواد اولیه لازم رو در اختیار
              من قرار بدید تا این ماشین رو بسازم. فردا می بینه یک کامیون پر از
              آهن و پلاستیک و … به صورت خام در کارگاهش تخلیه شده و اون باید تمام
              چندهزار قطعه ماشین رو از صفر طراحی و تولید کنه. 2 – یا اینکه طرح
              قطعات و قالب های طراحی شده خودش رو به یک شرکت دانش بنیان و قطعه
              ساز ارائه بده که خودش متخصص این کار هست و قبلا هزاران نوع قطعه
              آماده تولید کرده. در این صورت مهندس ما هم خیلی راحت تمام قطعات
              موردنیاز خودش رو تحویل می‌گیره تا ماشین جدید خودش رو بسازه. چیزی
              شبیه به تولید ماشینی مثل لامبورگینی! این ساده ترین جواب مقدماتی
              برای درک جواب سوال ری اکت چیست؟ می‌تونه باشه!
            </p>
          </div>
          <img
            src={ReactImage}
            alt="Middle Image"
            className={styles.middleImage}
          />
          <div className={showFullText ? styles.textFull : styles.textPartial}>
            <p className={styles.textBottom}>
              ری اکت (React) مثل همون شرکت دانش بنیانی هست که دستیار شما میشه تا
              راحت تر چیزی که در ذهنتون هست رو در رابط کاربری سایت (UI) پیاده
              سازی کنید بدون اینکه بخواید از صفر کدنویسی انجام بدید. بعد هم با
              ایجاد بخش های مختلف و متصل کردن اونها به همدیگه، صفحات وب جذاب و
              کامل بسازید. حالا اگه دوست دارید پاسخ سوال React چیست؟ رو به زبان
              ساده و خودمونی بگیرید و همینطور کاربرد ری اکت و مزایای اون و اینکه
              چطور باید یاد گرفت، ما در ادامه مقاله، قدم به قدم با شما جلو میریم
              تا خیلی خوب و عمیق با تمام ابعاد اون آشنا بشید و از این تخصص
              پولساز و پرطرفدار لذت ببرید. طبق روال همیشگی قبل از هر چیز یک نکته
              رو یادآوری کنیم که در سبزلرن، نوشتن بعضی از محتواهای محتوای آموزشی
              با فرض بر مبتدی بودن کاربر انجام میشه تا مطمئن بشیم همه شما می
              تونید از اونها استفاده کنید اما اگر کاربر حرفه ای هستید و با اصول
              و تعاریف هر موضوع آشنایی کامل دارید، می تونید از بخش‌های اولیه
              محتوا بگذرید و یه راست وارد بخش های بعدی بشید. حالا ببینیم در
              ادامه این مقاله قراره از کجا به کجا برسیم؟ یا ری اکت چیست؟ و چگونه
              کار می کند؟ ویژگی ها و مزایای ری اکت چیست؟ پیش نیازها و ابزارهای
              مورد نیاز برای یادگیری ری اکت مسیر حرفه ای تر شدن در طراحی رابط
              کاربری با ری اکت بازار کار برنامه نویسی فرانت اند با ری اکت. پس
              طبق معمول با تمرکز بالا همراه سبزلرن باشید تا خیلی خوب و عمیق، ری
              اکت رو بشناسید و یاد بگیرید. ری اکت یا React چیست؟ و چگونه کار می
              کند؟ اول ببینیم که حرف حساب کتاب ها و داکیومنت ها برای تعریف اون
              چیه؟! ری اکت یا React یک کتابخانه جاوا اسکریپتی متن باز (Open
              Source) برای ساخت و توسعه رابط کاربری (UI) است که در سال 2011 توسط
              Facebook تولید و طی دو سال بعد توسعه و در اختیار عموم قرار گرفت.
              این تکنولوژی با استفاده از مفهوم کامپیوننت (component) به عنوان
              جزء و شیء با قابلیت استفاده مجدد، امکان طراحی صفحات پویا با واکنش
              سریع را فراهم کرده است. طبیعتا اگر از قبل با مفاهیم برنامه نویسی و
              به طور ویژه جاوا اسکریپت آشنا بودید که احتمالا خیلی راحت و واضح
              این تعریف رو متوجه شدید اما اگر تازه کار هستید و هنوز شناخت کاملی
              از اصطلاحات برنامه نویسی ندارید ممکنه خود جواب این سوال هم چندتا
              سوال دیگه در ذهن شما به وجود بیاره. برای همین چندتا تعریف کوتاه
              دیگه رو در تکمیل اون به شما می‌گیم تا اگر مبتدی و تازه کار هم
              باشید خیلی راحت و مفهومی درکش کنید. یکبار برای همیشه!
            </p>
          </div>
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            {showFullText ? 'نمایش کمتر' : 'نمایش کامل'}
          </button>
        </div>
        <div className={styles.ratingBox}>
          <img
            src={ThumbIcon}
            alt="Thumb Icon"
            className={styles.icon}
          />
          <span className={styles.ratingCount}>120</span>
          <img
            src={ExtraIcon}
            alt="Extra Icon"
            className={styles.icon}
          />
          <span className={styles.additionalText}>1</span>
          <span className={styles.ratingNumber}>اشتراک گزاری</span>
          <img
            src={UserIcon}
            alt="User Icon"
            className={styles.icon}
          />
          <img
            src={StarIcon}
            alt="Star Icon"
            className={styles.icon1}
          />
          <span className={styles.ratingText}>امتیاز ۳۵ نفر</span>
        </div>
        <Comments />
      </div>
    </div>
  );
};

export default DetailsCard;

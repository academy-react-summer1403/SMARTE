
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Headlines.module.css';

// Import images
import HeadlineIcon from '../../../assets/images/icon/Frame(37).png';
import ContentIcon from '../../../assets/images/icon/Frame(38).png';

const Headlines = () => {

  const headlines = [
    { 
      title: 'پیش نیاز های ری اکت', 
      content: ['محتوای مربوط به سرفصل اول.', 'بخش دوم محتوای سرفصل اول.', 'بخش سوم محتوای سرفصل اول.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'Main Concept های ری اکت', 
      content: ['محتوای مربوط به سرفصل دوم.', 'بخش دوم محتوای سرفصل دوم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'معرفی و نحوه استفاده از متد LifeCycle', 
      content: ['محتوای مربوط به سرفصل سوم.', 'بخش دوم محتوای سرفصل سوم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'مباحث مربوط به کار با Ajax و Api در ری اکت', 
      content: ['محتوای مربوط به سرفصل چهارم.','محتوای مربوط به سرفصل چهارم.','محتوای مربوط به سرفصل چهارم.','محتوای مربوط به سرفصل چهارم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'پیش نیاز های ری اکت', 
      content: ['محتوای مربوط به سرفصل پنجم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'پیش نیاز های ری اکت', 
      content: ['محتوای مربوط به سرفصل ششم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'پیش نیاز های ری اکت', 
      content: ['محتوای مربوط به سرفصل هفتم.',], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
    { 
      title: 'پیش نیاز های ری اکت', 
      content: ['محتوای مربوط به سرفصل هشتم.','محتوای مربوط به سرفصل هشتم.'], 
      time: '۴۰: جلسه :۲۰  ساعت'
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleHeadlineClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.headlinesContainer}>
      <h1 className={styles.header}>سرفصل‌ها</h1>
      <div className={styles.headlineList}>
        {headlines.map((headline, index) => (
          <div 
            key={index} 
            className={`${styles.headlineItem} ${openIndex === index ? styles.activeHeadline : ''}`} 
            onClick={() => handleHeadlineClick(index)}
          >
            <div className={styles.headlineTitleContainer}>
              <img 
                src={HeadlineIcon} 
                alt="Icon"
                className={styles.headlineIcon}
              />
              <span className={styles.headlineTitle}>
                {headline.title}
              </span>
            </div>
            <div className={styles.timeContainer}>
              <span className={styles.time}>
                {headline.time}
              </span>
            </div>

            {openIndex === index && (
              <div className={styles.headlineContent}>
                {headline.content.map((section, i) => (
                  <p key={i}>
                    {section}
                    <img src={ContentIcon} alt="Content Icon" />
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headlines;

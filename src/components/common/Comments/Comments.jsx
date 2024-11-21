/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Comments.module.css';


import ProfileIcon from '../../../assets/images/Vector(7).png';
import ReplyIcon from '../../../assets/images/Ellipse 35.png';
import LikeIcon from '../../../assets/images/icon/Frame(25).png';
import DislikeIcon from '../../../assets/images/icon/Frame(24).png';
import ShareIcon from '../../../assets/images/icon/Vector(6).png';
import AddIcon from '../../../assets/images/icon/Frame(26).png';

const Comment = ({ profileImg, userName, userEmail, date, commentText, replies }) => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentContent}>
        <div className={styles.profile}>
          <img src={profileImg} alt='Profile' className={styles.profileIcon} />
        </div>

        <div className={styles.userTextContainer}>
          <span className={styles.userTitle}>{`${userName} | ${userEmail}`}</span>
          <span className={styles.userSubtitle}>{date}</span>
        </div>

        <div className={styles.leftIcons}>
          <span>۲</span>
          <span>
            <img src={LikeIcon} alt='Like Icon' className={styles.smallIcon} />
          </span>
          <span>۱۲۰</span>
          <span>
            <img src={DislikeIcon} alt='Dislike Icon' className={styles.smallIcon} />
          </span>
          <span>
            <img src={ShareIcon} alt='Share Icon' className={styles.smallIcon} />
          </span>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{commentText}</p>
        {replies && replies.map((reply, index) => (
          <Comment key={index} {...reply} />
        ))}
      </div>
    </div>
  );
};

const Comments = () => {
  const commentsData = [
    {
      profileImg: ProfileIcon,
      userName: 'کاربر',
      userEmail: 'ali@gmail.com',
      date: '۱۴۰۳/۰۱/۲۵',
      commentText: 'سلام. من خیلی دوست دارم این دوره رو بخرم ولی قیمتش خیلی بالاست، چه زمانی دوباره این دوره تخفیف می‌خوره؟',
      replies: [
        {
          profileImg: ReplyIcon,
          userName: 'کاربر',
          userEmail: 'ali@gmail.com',
          date: '۱۴۰۳/۰۱/۲۵',
          commentText: 'سلام عزیز.حدودا 9 روز دیگه (1 اردیبهشت) برای این دوره تخفیف خواهیم داشت.برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال های سبزلرن رو دنبال کنین 👌❤️',
          replies: [],
        },
      ],
    },
    
    {
      profileImg: ProfileIcon,
      userName: 'دانشجو',
      userEmail: 'reza@gmail.com',
      date: '۱۴۰۳/۰۲/۲۵',
      commentText: 'سلام. من خیلی دوست دارم این دوره رو بخرم زمانش کی شروع میشه ؟',
      replies: [
        {
          profileImg: ReplyIcon,
          userName: 'کاربر',
          userEmail: 'ali@gmail.com',
          date: '۱۴۰۳/۰۱/۲۵',
          commentText: 'سلام عزیز.حدودا 9 روز دیگه (1 اردیبهشت)',
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className={styles.commentsContainer}>
      <h1 className={styles.header}>نظرات کاربران</h1>

      <div className={styles.box}>
        <button className={styles.button}>
          ارسال دیدگاه جدید
          <img src={AddIcon} alt='Add' className={styles.icon} />
        </button>
        
        {commentsData.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

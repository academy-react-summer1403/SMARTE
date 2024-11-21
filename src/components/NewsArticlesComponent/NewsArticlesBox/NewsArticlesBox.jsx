/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './NewsArticlesBox.module.css';
import NewsArticleCard from '../../common/NewsArticleCard/NewsArticleCard';
import FeatureCard from '../NewsArticlesBox/FeatureCard/FeatureCard';
import SearcNews from '../SearcNews/SearcNews';

// Importing images
import Rectangle95 from '../../../assets/images/Rectangle 95.png';
import Ellipse39 from '../../../assets/images/Ellipse 39.png';
import Ellipse391 from '../../../assets/images/Ellipse 39(1).png';
import Ellipse392 from '../../../assets/images/Ellipse 39(2).png';
import Ellipse394 from '../../../assets/images/Ellipse 39(4).png';
import Ellipse395 from '../../../assets/images/Ellipse 39(5).png';
import Ellipse396 from '../../../assets/images/Ellipse 39(6).png';
import Ellipse397 from '../../../assets/images/Ellipse 39(7).png';

const NewsArticlesBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const articleCount = 9;

  const articles = Array.from({ length: articleCount }, (_, index) => ({
    title: `مقاله شماره ${index + 1}`,
    imageSrc: Rectangle95,
    description: 'توضیحات مربوط به مقاله.',
    date: '۱۴۰۳/۰۱/۱۸',
    views: 56,
  }));

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sections = [
    {
      heading: 'مطالب پیشنهادی',
      paragraph: 'این مطالب هم میتونه براتون جالب باشه',
      contents: [
        { title: 'چرا فیگما؟', imageSrc: Ellipse39, buttonText: 'مشاهده مطلب' },
        { title: 'چگونه یک مدیر پروژه باشیم؟', imageSrc: Ellipse391, buttonText: 'مشاهده مطلب' },
        { title: 'سرعت تکنولوژی در قرن ۲۱', imageSrc: Ellipse392, buttonText: 'مشاهده مطلب' },
      ],
    },
    {
      heading: 'پادکست ها',
      paragraph: 'با ما از بهترین ها بشنوید',
      contents: [
        { title: 'شروع یادگیری توسعه وب با ری اکت', imageSrc: Ellipse394, buttonText: 'مشاهده مطلب' },
        { title: 'شروع یادگیری توسعه وب با ری اکت', imageSrc: Ellipse394, buttonText: 'مشاهده مطلب' },
        { title: 'شروع یادگیری توسعه وب با ری اکت', imageSrc: Ellipse394, buttonText: 'مشاهده مطلب' },
      ],
    },
    {
      heading: 'محبوب ترین دوره ها',
      paragraph: 'بهترین چیزهایی که میتونید یاد بگیرید',
      contents: [
        { title: 'دوره جامع انگولار', imageSrc: Ellipse397, buttonText: 'مشاهده مطلب' },
        { title: 'دوره جامع فیگما', imageSrc: Ellipse395, buttonText: 'مشاهده مطلب' },
        { title: 'دوره جامع ری اکت', imageSrc: Ellipse396, buttonText: 'مشاهده مطلب' },
      ],
    },
  ];

  const ContentSection = ({ heading, paragraph, contents }) => (
    <div className={styles.box}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
      <div className={styles.circleContainer}>
        {contents.map((content, index) => (
          <FeatureCard key={index} title={content.title} imageSrc={content.imageSrc} buttonText={content.buttonText} />
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.box1}></div>
        
        {sections.map((section, index) => (
          <ContentSection 
            key={index}
            heading={section.heading}
            paragraph={section.paragraph}
            contents={section.contents}
          />
        ))}
      </div>

      <div className={styles.rightPanel}>
        <SearcNews searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <h2 className={styles.sectionTitle}>جدیدترین اخبار و مقالات </h2>
        
        <div className={styles.row}>
          {filteredArticles.map((article, index) => (
            <div className={styles.cardContainer} key={index}>
              <NewsArticleCard 
                title={article.title} 
                imageSrc={article.imageSrc}
                description={article.description}
                date={article.date}
                views={article.views}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticlesBox;

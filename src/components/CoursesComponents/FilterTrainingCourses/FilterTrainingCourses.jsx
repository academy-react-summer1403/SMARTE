// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './FilterTrainingCourses.module.css';
import ButtonContainer from './FilterColumnChangeButton/FilterColumnChangeButton';
import CourseList from './CourseList/CourseList';
import SearchTrainingCourses from '../SearchTrainingCourses/SearchTrainingCourses';
import FilterDashboard from './FilterDashboard/FilterDashboard';


import CourseImage from '../../../assets/images/course image.png';
import AcademicHatIcon from '../../../assets/images/icon/academic hat.png';
import InstructorIcon from '../../../assets/images/icon/Frame(5).png';

const FilterTrainingCourses = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    technology: [],
    status: [],
    rating: [],
    level: [],
    price: [],
  });
  
  const course = {
    title: 'دوره React برای مبتدیان',
    rating: 4,
    maxRating: 5,
    level: 'beginner', 
    category: 'react', 
    price: 150000,
    image: CourseImage,
    details: [
      { icon: AcademicHatIcon, text: '50' },
      { icon: InstructorIcon, text: 'حامد نظری ' }
    ],
  };

  const courses = Array(9).fill(course);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTechnology = filters.technology.length === 0 || filters.technology.includes(course.category);
    const matchesStatus = filters.status.length === 0 || filters.status.includes(course.status);
    const matchesLevel = filters.level.length === 0 || filters.level.includes(course.level);
    const matchesRating = filters.rating.length === 0 || filters.rating.includes(String(course.rating));
    
    const matchesPrice = filters.price.length === 0 || filters.price.some(priceRange => {
      const [min, max] = priceRange.split('-').map(Number);
      return course.price >= min && course.price <= max;
    });

    return matchesSearch && matchesTechnology && matchesStatus && matchesLevel && matchesRating && matchesPrice;
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <SearchTrainingCourses searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ButtonContainer setIsHorizontal={setIsHorizontal} />
        
        <div className={styles.filterContainer}>
          <CourseList courses={filteredCourses} isHorizontal={isHorizontal} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <FilterDashboard filters={filters} setFilters={setFilters} /> 
      </div>
    </div>
  );
};

export default FilterTrainingCourses;

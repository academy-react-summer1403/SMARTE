/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import styles from './FilterDashboard.module.css';
import  icons8 from '../../../../assets/images/icon/icons8.png'

const FilterDashboard = ({ filters, setFilters }) => {
  const [filtersOpen, setFiltersOpen] = useState({
    technology: false,
    status: false,
    rating: false,
    level: false,
    price: false,
  });

  const handleCheckboxChange = (name, value) => {
    setFilters((prevFilters) => {
      const prevValues = prevFilters[name] || [];
      const isChecked = prevValues.includes(value);

      return {
        ...prevFilters,
        [name]: isChecked
          ? prevValues.filter((item) => item !== value) 
          : [...prevValues, value],
      };
    });
  };

 
  const clearFilters = () => {
    setFilters({
      technology: [],
      status: [],
      rating: [],
      level: [],
      price: [],
    });
    window.location.reload(); 
  };


  const toggleFilter = (filterName) => {
    setFiltersOpen((prevFiltersOpen) => ({
      ...prevFiltersOpen,
      [filterName]: !prevFiltersOpen[filterName],
    }));
  };

  return (
    <div className={styles.filterDashboard}>
      <div className={styles.filterHeader}>
        <h3>فیلتر </h3>
        <button onClick={clearFilters} className={styles.clearButton}>
          <img src={icons8}></img>
        </button>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleFilter('technology')}>
          <span>تکنولوژی</span>
        </div>
        {filtersOpen.technology && (
          <div className={styles.dropdownContent}>
            {[ 'react', 'nodejs', 'python', 'java', 'bootstrap'].map((tech) => (
              <label key={tech}>
                <input
                  type="checkbox"
                  checked={filters.technology?.includes(tech) || false}
                  onChange={() => handleCheckboxChange('technology', tech)}
                />
                {tech === 'all' ? 'همه' : tech}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleFilter('status')}>
          <span>وضعیت</span>
        </div>
        {filtersOpen.status && (
          <div className={styles.dropdownContent}>
            {[ 'active', 'inactive', 'ongoing'].map((status) => (
              <label key={status}>
                <input
                  type="checkbox"
                  checked={filters.status?.includes(status) || false}
                  onChange={() => handleCheckboxChange('status', status)}
                />
                {status === 'all' ? 'همه' : status}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleFilter('rating')}>
          <span>امتیاز</span>
        </div>
        {filtersOpen.rating && (
          <div className={styles.dropdownContent}>
            {[ '5', '4', '3', '2', '1'].map((rating) => (
              <label key={rating}>
                <input
                  type="checkbox"
                  checked={filters.rating?.includes(rating) || false}
                  onChange={() => handleCheckboxChange('rating', rating)}
                />
                {rating === 'all' ? 'همه' : `${rating} ستاره`}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleFilter('level')}>
          <span>سطح دوره</span>
        </div>
        {filtersOpen.level && (
          <div className={styles.dropdownContent}>
            {[ 'beginner', 'intermediate', 'advanced'].map((level) => (
              <label key={level}>
                <input
                  type="checkbox"
                  checked={filters.level?.includes(level) || false}
                  onChange={() => handleCheckboxChange('level', level)}
                />
                {level === 'all' ? 'همه' : level}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={() => toggleFilter('price')}>
          <span>بازه قیمت</span>
        </div>
        {filtersOpen.price && (
          <div className={styles.dropdownContent}>
            {[ '0-500000', '500000-1000000', '1000000-1500000'].map((priceRange) => (
              <label key={priceRange}>
                <input
                  type="checkbox"
                  checked={filters.price?.includes(priceRange) || false}
                  onChange={() => handleCheckboxChange('price', priceRange)}
                />
                {priceRange === 'all' ? 'همه' : priceRange.replace('-', ' تا ')}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDashboard;

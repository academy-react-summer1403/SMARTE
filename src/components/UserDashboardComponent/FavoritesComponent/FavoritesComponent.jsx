/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Table, Button, Row, Col } from 'react-bootstrap';
import styles from './FavoritesComponent.module.css';

// وارد کردن تصاویر
import CourseImage1 from '../../../assets/images/Ellipse 48.png';
import CourseImage2 from '../../../assets/images/Ellipse 48.png';
import CourseImage3 from '../../../assets/images/Ellipse 48(1).png';
import SeenIcon from '../../../assets/images/icon/Frame(51).png';
import UnseenIcon from '../../../assets/images/icon/Frame(52).png';
import SearchIcon from '../../../assets/images/icon/Frame(50).png';

const courseData = [
  { id: 1, name: "دوره آموزش جامع Js  ", instructor: "دوره آموزشی", startDate: "۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷", price: 'ادمین', image: CourseImage1, seen: "seen", },
  { id: 2, name: "دوره آموزش جامع Js  ", instructor: "دوره آموزشی", startDate: "۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷", price: 'ادمین', image: CourseImage2, seen: "seen", },
  { id: 3, name: "چگونه مدیر پروژه بهتری باشیم ", instructor: "اخبار و مقالات", startDate: "۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷", price: 'مهدی اصغری', image: CourseImage3, seen: "seen", },
];

const FavoritesComponent = () => {
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  const handleFilter = (values) => {
    const { courseName, startDate } = values;

    const filtered = courseData.filter(course => 
      (courseName ? course.name.toLowerCase().includes(courseName.toLowerCase()) : true) &&
      (startDate ? course.startDate === startDate : true)
    );

    setFilteredCourses(filtered);
  };

  return (
    <div className={styles.container}>
      
      <Formik
        initialValues={{ courseName: '', startDate: '' }}
        onSubmit={handleFilter}
      >
        {() => (
          <Form>
            <Row className="align-items-center mb-4">
              <Col xs={8}>
                <div className={styles.inputGroup}>
                  <Field
                    name="courseName"
                    type="text"
                    placeholder="دنبال چی میگردی؟ ..."
                    className="form-control"
                  />
                  <div className={styles.inputGroup1}>
                    <img 
                      src={SearchIcon}  // استفاده از تصویر وارد شده
                      alt="search icon"
                      className={styles.searchIcon} 
                    />
                  </div>
                </div>
              </Col>
              <Col xs="auto" className="d-flex align-items-end">
                <Button variant="primary" type="submit" className={styles.filterButton}>
                  فیلتر
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>عنوان </th>
            <th>دسته بندی </th>
            <th> زمان انتشار</th>
            <th>  نویسنده</th>
            <th>  </th> 
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>
                  <img src={course.image} alt={course.name} className={styles.courseImage} />
                </td>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>{course.startDate}</td>
                <td>{course.price}</td>
                <td>
                  <img 
                    src={course.seen === 'seen' ? SeenIcon : UnseenIcon} 
                    alt={course.seen === 'seen' ? "Seen" : "Unseen"} 
                    className={styles.statusIcon}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className={styles.noCourses}>
                هیچ دوره‌ای یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FavoritesComponent;

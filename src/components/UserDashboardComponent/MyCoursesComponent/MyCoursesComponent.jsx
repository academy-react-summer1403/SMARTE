/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Table, Button, Row, Col } from 'react-bootstrap';
import styles from './MyCoursesComponent.module.css';


import SeenIcon from '../../../assets/images/icon/Frame(51).png';
import UnseenIcon from '../../../assets/images/icon/Frame(52).png';
import SearchIcon from '../../../assets/images/icon/Frame(50).png';

const courseData = [
  { id: 1, name: "React Basics", instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2023-10-01", price: '1,000,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
  { id: 2, name: "Advanced JavaScript",  instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2023-11-15", price: '1,200,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
  { id: 3, name: "TypeScript Essentials",  instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2023-12-01", price: '1,800,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
  { id: 4, name: "Node.js Fundamentals",  instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2024-01-10", price: '1,800,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "approved" },
  { id: 5, name: "CSS Mastery",  instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2024-02-05", price: '2,000,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
  { id: 6, name: "Python for Beginners", instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2024-03-15", price: '100,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
  { id: 7, name: "Data Structures in C++",  instructor: "دکتر محمدحسین بحر العلومی ", startDate: "2024-04-01", price: '1,500,000', image: "/img/Ellipse 48.png", seen: "unseen", status: "pending" },
];

const MyCoursesComponent = () => {
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
            <th>نام دوره</th>
            <th>نام مدرس</th>
            <th>تاریخ شروع</th>
            <th>قیمت (تومان)</th>
            <th></th> 
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
                    src={course.seen === 'seen' ? SeenIcon : UnseenIcon}  // استفاده از تصاویر وارد شده
                    alt={course.seen === 'seen' ? "Seen" : "Unseen"} 
                    className={styles.statusIcon}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className={styles.noCourses}>
                هیچ دوره‌ای یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyCoursesComponent;

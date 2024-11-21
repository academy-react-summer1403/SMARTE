/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Table, Button, Row, Col } from 'react-bootstrap';
import styles from './MyCommentsComponent.module.css';

// وارد کردن تصاویر
import SeenIcon from '../../../assets/images/icon/Frame(51).png';
import UnseenIcon from '../../../assets/images/icon/Frame(52).png';
import SearchIcon from '../../../assets/images/icon/Frame(50).png';

const commentData = [
  { id: 1, comment: "دوره آموزش جامع Js ", category: "دوره آموزشی", time: "۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷", seen: "seen", status: "pending" },
  { id: 2, comment: "چگونه مدیر پروژه بهتری باشیم", category: "اخبار و مقالات", time: "۱۴۰۳/۰۲/۰۸ , ۱۵:۲۸", seen: "seen", status: "approved" },
  { id: 3, comment: "دوره آموزش جامع Js ", category: "دوره آموزشی", time: "۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷", seen: "seen", status: "pending" },
];

const MyCommentsComponent = () => {
  const [filteredComments, setFilteredComments] = useState(commentData);

  const handleFilter = (values) => {
    const { comment, time } = values;

    const filtered = commentData.filter(item => 
      (comment ? item.comment.toLowerCase().includes(comment.toLowerCase()) : true) &&
      (time ? item.time === time : true)
    );

    setFilteredComments(filtered);
  };

  return (
    <div className={styles.container}>
      
      <Formik
        initialValues={{ comment: '', time: '' }}
        onSubmit={handleFilter}
      >
        {() => (
          <Form>
            <Row className="align-items-center mb-4">
              <Col xs={8}>
                <div className={styles.inputGroup}>
                  <Field
                    name="comment"
                    type="text"
                    placeholder="دنبال دیدگاه میگردید؟ ..."
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
            <th>دیدگاه</th>
            <th>دسته بندی</th>
            <th>زمان</th>
            <th>وضعیت</th>
            <th>مشاهده</th>
          </tr>
        </thead>
        <tbody>
          {filteredComments.length > 0 ? (
            filteredComments.map((commentItem) => (
              <tr key={commentItem.id}>
                <td>{commentItem.comment}</td>
                <td>{commentItem.category}</td>
                <td>{commentItem.time}</td>
                <td>
                  {commentItem.status === 'approved' ? "تایید شده" : "در انتظار تایید"}
                </td>
                <td>
                  <img 
                    src={commentItem.seen === 'seen' ? SeenIcon : UnseenIcon} 
                    alt={commentItem.seen === 'seen' ? "Seen" : "Unseen"} 
                    className={styles.statusIcon}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.noComments}>
                هیچ دیدگاهی یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyCommentsComponent;

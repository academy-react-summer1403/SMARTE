// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from './UserDashboard.module.css'

import Logo from '../../../assets/images/Logo/logo.png'
import ShoppingBagIcon from '../../../assets/images/Shopping Bag.png'
import HomeIcon from '../../../assets/images/icon/Frame(42).png'
import UserProfilePic from '../../../assets/images/user profile pic.png'
import DashboardIcon from '../../../assets/images/icon/Frame(43).png'
import EditUserInfoIcon from '../../../assets/images/icon/Frame(44).png'
import MyCoursesIcon from '../../../assets/images/icon/book-02-solid-rounded 1.png'
import ReservedCoursesIcon from '../../../assets/images/icon/Group.png'
import MyCommentsIcon from '../../../assets/images/icon/Frame(45).png'
import FavoritesIcon from '../../../assets/images/icon/add to favorite.png'
import SecuritySettingsIcon from '../../../assets/images/icon/security-lock-solid-rounded 1.png'
import LogoutIcon from '../../../assets/images/icon/Frame(47).png'

export const UserDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = () => {
    navigate('/')
  }

  const isActiveLink = path => location.pathname === path

  return (
    <div className={styles.fullHeight}>
      <header className={styles.header}>
        <div className={styles['header-left']}>
          <button
            onClick={handleHomeClick}
            className={`${styles['nav-button']} ${styles['account-button']}`}
          >
            <img src={HomeIcon} alt='Home' className={styles['account-icon']} />
          </button>
          <button
            className={`${styles['nav-button']} ${styles['cart-button']}`}
          >
            <img
              src={ShoppingBagIcon}
              alt='Shopping Bag'
              className={styles['account-icon']}
            />
          </button>
        </div>

        <div className={styles['header-right']}>
          <img src={Logo} alt='Logo' className={styles.logo} />
        </div>
      </header>

      <div className={styles.dashboardContainer}></div>
      <div className={styles.contentContainer}>
        <Outlet />
      </div>

      <div className={styles.sidebar}>
        <img src={UserProfilePic} alt='User' className={styles.profileImage} />
        <h2 className={styles.title}>فلان فلانی خوش آمدید</h2>

        <Link
          to='dashboard'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/dashboard') ? styles.active : ''
          }`}
        >
          <img
            src={DashboardIcon}
            alt='Dashboard Icon'
            className={styles.icon}
          />
          داشبورد
        </Link>

        <Link
          to='editUserInfo'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/editUserInfo') ? styles.active : ''
          }`}
        >
          <img
            src={EditUserInfoIcon}
            alt='Edit User Info Icon'
            className={styles.icon}
          />
          اطلاعات کاربری
        </Link>

        <Link
          to='myCourses'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/myCourses') ? styles.active : ''
          }`}
        >
          <img
            src={MyCoursesIcon}
            alt='My Courses Icon'
            className={styles.icon}
          />
          دوره‌های من
        </Link>

        <Link
          to='reservedCourses'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/reservedCourses') ? styles.active : ''
          }`}
        >
          <img
            src={ReservedCoursesIcon}
            alt='Reserved Courses Icon'
            className={styles.icon}
          />
          دوره‌های رزرو شده
        </Link>

        <Link
          to='myComments'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/myComments') ? styles.active : ''
          }`}
        >
          <img
            src={MyCommentsIcon}
            alt='My Comments Icon'
            className={styles.icon}
          />
          دیدگاه‌های من
        </Link>

        <Link
          to='favorites'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/favorites') ? styles.active : ''
          }`}
        >
          <img
            src={FavoritesIcon}
            alt='Favorites Icon'
            className={styles.icon}
          />
          علاقه‌مندی‌ها
        </Link>

        <Link
          to='securitySettings'
          className={`${styles.sidebarLink} ${
            isActiveLink('/userDashboard/securitySettings') ? styles.active : ''
          }`}
        >
          <img
            src={SecuritySettingsIcon}
            alt='Security Settings Icon'
            className={styles.icon}
          />
          تنظیمات امنیتی
        </Link>

        <button className={styles.logoutButton}>
          خروج از حساب
          <img
            src={LogoutIcon}
            alt='Logout Icon'
            className={styles.iconButton}
          />
        </button>
      </div>
    </div>
  )
}

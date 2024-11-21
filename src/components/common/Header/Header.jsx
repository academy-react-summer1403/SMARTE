
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './Header.css';
import Logo from '../../../assets/images/Logo/logo.png';
import ShoppingBagIcon from '../../../assets/images/Shopping Bag.png';
import Favorite from '../../../assets/images/icon/Favorite.png';
import User from '../../../assets/images/icon/User.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const [activeTitle, setActiveTitle] = useState('');

  useEffect(() => {
    if (location.pathname === '/courses') {
      setActiveTitle('دوره ها');
    } else if (location.pathname === '/') {
      setActiveTitle('صفحه نخست');
    } else if (location.pathname === '/articles') { 
      setActiveTitle('اخبار مقالات');
    } else if (location.pathname === '/userDashboard') {
      setActiveTitle('داشبورد');
    }
  }, [location]);

  const titles = [
    'تماس با ما',
    'اخبار مقالات',
    'اساتید',
    'دوره ها',
    'صفحه نخست',
  ];

  const handleTitleClick = (title) => {
    setActiveTitle(title);
    if (title === 'دوره ها') {
      navigate('/courses');
    } else if (title === 'صفحه نخست') {
      navigate('/');
    } else if (title === 'اخبار مقالات') { 
      navigate('/articles'); 
    } else if (title === 'حساب کاربری') { 
      navigate('/userDashboard'); 
    }
  };

  return (
    <header className='header'>
      <div className='header-left'>
        <button className='nav-button account-button' onClick={() => handleTitleClick('حساب کاربری')}>
          <img src={User} alt='User' className='account-icon' />
          حساب کاربری
        </button>
        <button className='nav-button cart-button'>
          <img
            src={ShoppingBagIcon}
            alt='Shopping Bag'
            className='account-icon'
          />
        </button>
        <button className='nav-button heart-button'>
          <img src={Favorite} alt='Shopping Bag' className='account-icon' />
        </button>
      </div>

      <div className='header-center'>
        {titles.map((title) => (
          <div
            key={title}
            onClick={() => handleTitleClick(title)}
            className='header-title-container'
          >
            <h1 className='header-title'>{title}</h1>
            {activeTitle === title && <div className='orange-line'></div>}
          </div>
        ))}
      </div>

      <div className='header-right'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
    </header>
  );
};

export default Header;

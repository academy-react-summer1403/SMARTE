// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTelegram,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import logo from '../../../assets/images/Logo/logo.png'
import samandehi from '../../../assets/images/samandehi-ezgif 1.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <p className='footer-text'>
        مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و امروز به
        بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است
      </p>
      <h3 className='footer-heading'>
        ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب مجتمع دنیای آرزو 011 -
        43332000
      </h3>
      <ul className='footer-list'>
        <li> اساتید برتر</li>
        <li> دوره ها</li>
        <li> دسته بندی ها </li>
        <li> اخبار مقالات </li>
        <li> خدمات مه </li>
        <li> پادکست ها </li>
        <li> ورود به حساب </li>
        <li> تماس با ما</li>
      </ul>
      <div className='image-box'>
        <img src={samandehi} alt='Samandehi' />
      </div>
      <div className='footer-content'>
        <div className='footer-buttons'>
          <button className='footer-button'>
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button className='footer-button'>
            <FontAwesomeIcon icon={faTelegram} />
          </button>
          <button className='footer-button'>
            <FontAwesomeIcon icon={faYoutube} />
          </button>
          <button className='footer-button'>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
      <div className='footer-rights-box'>
        <p className='footer-rights'>
          کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می‌باشد
        </p>
      </div>
    </footer>
  )
}

export default Footer

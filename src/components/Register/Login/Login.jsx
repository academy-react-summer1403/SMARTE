import { useState } from 'react'
import img from '../../../../public/imgLand/logo.png'
import FirstStep from './FirstStep/FirstStep'
import SecondStep from './SecondStep/SecondStep'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../../assets/images/icon/User.png'

const Login = () => {
  const [StepCounter, setStepCounter] = useState(1)
  const navigate = useNavigate()

  const handleTitleClick = title => {
    navigate('/userDashboard')
  }

  return (
    <div style={{ direction: 'rtl', fontFamily: 'yek' }}>
      <div className='px-[100px] py-[10px] mb-10 flex justify-between'>
        <img src={img} />

        <button
          className='nav-button account-button'
          onClick={handleTitleClick}
        >
          <img src={User} alt='User' className='account-icon' />
          حساب کاربری
        </button>
      </div>
      <div className='flex justify-center gap-4'>
        <div className=' pt-[80px]'>
          <h2 className='text-2xl font-extrabold text-violet-600 text-end'>
            <Link to='/signUp'>ثبت نام</Link>
          </h2>
          <h2 className='text-2xl font-extrabold text-violet-600 text-left mt-[60px]'>
            <Link to='/signIn'>ورود</Link>
          </h2>
        </div>
        <div className='bgLogin w-[650px] h-[550px] relative'>
          {StepCounter === 1 && <FirstStep setStepCounter={setStepCounter} />}
          {StepCounter === 2 && <SecondStep setStepCounter={setStepCounter} />}
        </div>
      </div>
    </div>
  )
}

export default Login

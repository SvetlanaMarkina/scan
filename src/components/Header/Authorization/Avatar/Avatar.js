import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Avatar.css';
import avatar from './avatar.svg'
import { signOut } from '../../../../store/slices/profile';
function ExitButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handleClick() {
    navigate("/login");
    dispatch(signOut());
  }
  return (
    <button className='avatarBtn' type="button" onClick={handleClick}>
      Выйти
    </button>
  );
}
const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='avatar__name'>
        <span>Алексей А.</span>
        <ExitButton />
      </div>
      <div className='avatar__img'>
        <img src={avatar} alt='avatar'/>
      </div>
    </div>
  )
}

export default Avatar
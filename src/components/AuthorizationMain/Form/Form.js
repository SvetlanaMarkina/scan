import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { dropStatus, signIn } from '../../../store/slices/profile';
import Inputs from '../Inputs';
import FormFooter from '../FormFooter';
import './Form.css';

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signInStatus = useSelector(state => state.profile.status)
  useEffect(()=>{
    if(signInStatus === 'done'){
      navigate("/");
      dispatch(dropStatus())
    }
    if(signInStatus === 'error'){
      setError(true);
    }
  },[error , signInStatus, navigate, dispatch])
  const  handleSubmit = async () => {
    dispatch(signIn({
      login,
      password
    }))
       
  }
  const submitDisable = !( login && password )
  return (
      <div className='form__container'>
        <div className='form__linkBox'>
          <a className='form__link' href='n' >Войти</a>
          <a className='form__link form__link_inactive' href='n'>Зарегистрироваться</a>
        </div>
        <Inputs 
        login={login} 
        password={password} 
        setLogin={setLogin} 
        setPassword={setPassword}
        error={error}
        />
        <button 
        className='form__button' 
        onClick={handleSubmit} 
        disabled={submitDisable}
        style={submitDisable ? {opacity:`${'50%'}`} : {opacity:`${'100%'}`}}>Войти</button>
        <a className='form__ResumeLink' href='n' >Восстановить пароль</a>
        <FormFooter />
      </div>
  )
}

export default Form
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Avatar from './Avatar/Avatar';
import './Authorization.css';

const Authorization = () => {

const companyInfo = useSelector(state => state.profile.companyInfo)
return (
    <div className='accountBtn'>      
      {companyInfo ? <CompanyInfo /> : <Loader />}
      <Avatar />
    </div>
  )
}

export default Authorization
import React from 'react';
import { useSelector } from 'react-redux';
import './CompanyInfo.css';
const CompanyInfo = () => {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  return (
    <div className='companyBox'>
      <div >
        <span className='companyBox__companyInfo'>Использовано компаний </span>
        <span className='companyBox__numberBlack'>{companyQuantityInfo.eventFiltersInfo.usedCompanyCount}</span>
      </div>
      <div>
        <span className='companyBox__companyInfo'>Лимит по компаниям </span>
        <span className='companyBox__numberGreen'>{companyQuantityInfo.eventFiltersInfo.companyLimit}</span>
      </div>
    </div>
  )
}

export default CompanyInfo
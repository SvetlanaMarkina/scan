import React from "react";
import { useSelector } from "react-redux";
import {Navigate, Route,Routes} from "react-router-dom";
import CommonAccessMain from "../components/CommonAccessMain";
import SearchPageMain from "../components/SearchPageMain/SearchPageMain";
import ResultPageMain from "../components/ResultPageMain/ResultPageMain";
import AuthorizationMain from "../components/AuthorizationMain/AuthorizationMain";

const AppRoutes = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<CommonAccessMain />}/>
          <Route path="/search" element={<SearchPageMain/>}/>
          <Route path="/result" element={<ResultPageMain/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<CommonAccessMain />}/>
        <Route path="/login" element={<AuthorizationMain/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}


export default AppRoutes
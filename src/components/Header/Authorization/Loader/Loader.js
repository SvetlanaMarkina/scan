import React from 'react';
import { RotatingLines } from  'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loaderBox'>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
        />
    </div>
  )
}

export default Loader
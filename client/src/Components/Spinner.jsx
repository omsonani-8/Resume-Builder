import React from 'react';
import "../App.css"; 

const Spinner = () => {
 return (
    <div className='mt-20 flex w-full h-[600px] justify-center items-center'>
    <div className="w-14 h-14 grid place-items-center rounded-full" style={{
        background: 'linear-gradient(0deg, rgba(71,75,255,0.5) 50%, rgba(71,75,255,1) 0) center/4.5px 100%, linear-gradient(90deg, rgba(71,75,255,0.25) 50%, rgba(71,75,255,0.75) 0) center/100% 4.5px',
        backgroundRepeat: 'no-repeat',
        animation: 'spinner-d3o0rx 1s infinite steps(12)',
        WebkitMask: 'radial-gradient(farthest-side, #0000 40%, #474bff 41%)',
    }}>
      <div className="absolute inset-0 rounded-full" style={{
          background: 'inherit',
          opacity: 0.915,
          transform: 'rotate(30deg)',
        }}></div>
      <div className="absolute inset-0 rounded-full" style={{
          background: 'inherit',
          opacity: 0.83,
          transform: 'rotate(60deg)',
        }}></div>
    </div>
        </div>
 );
};

export default Spinner;

import React, { useState, useEffect } from "react";

const Loading = ({ onLoadingComplete }) => {
  const [animationState, setAnimationState] = useState('entering');

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setAnimationState('idle');
    }, 1000);

    const exitTimer = setTimeout(() => {
      setAnimationState('exiting');
      setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen fixed inset-0 z-50 transition-opacity duration-1000 ${
        animationState === 'exiting' ? 'opacity-100' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={'/feviicon.png'}
          alt="ADNA logo"
          className={`w-48 h-auto transition-all duration-1000 ease-in-out ${
            animationState === 'entering' 
              ? 'opacity-0 scale-90' 
              : animationState === 'exiting'
              ? 'opacity-0 scale-110'
              : 'opacity-100 scale-100'
          }`}
        />
      </div>
    </div>
  );
};

export default Loading;
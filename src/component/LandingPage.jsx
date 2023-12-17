import React, { useState, useEffect } from 'react';
import Home from './Home'; 
import mojs from '@mojs/core';


const LoadingPage = () => {
  useEffect(() => {
    const spinner = new mojs.Shape({
      parent: '#spinner-container',
      shape: 'circle',
      stroke: 'blue',
      strokeDasharray: '125, 125',
      strokeDashoffset: { '0': '-125' },
      strokeWidth: 4,
      fill: 'none',
      left: '50%',
      top: '50%',
      rotate: { '-90': '270' },
      radius: 20,
      isShowStart: true,
      duration: 2000,
      easing: 'back.in',
    }).then({
      rotate: { '-90': '270' },
      strokeDashoffset: { '-125': '-250' },
      duration: 3000,
      easing: 'cubic.out',
    });

    spinner.play();

    return () => {
      spinner.stop();
    };
  }, []);

  return (
    <div className="loading-page">
      <div id="spinner-container"></div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;

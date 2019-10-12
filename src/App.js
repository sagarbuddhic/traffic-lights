import React, { useState, useEffect, useCallback } from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import * as styles from './style/App';

const App = () => {
  const [activeLight, setActiveLight] = useState('');

  const runTrafficLights = useCallback(() => {
    setTimeout(() => {
      setActiveLight('red');
    }, 1000);
    setTimeout(() => {
      setActiveLight('yellow');
    }, 6000);
    setTimeout(() => {
      setActiveLight('green');
    }, 9000);
  }, []);

  useEffect(() => {
    runTrafficLights();
    setInterval(() => {
      runTrafficLights();
    }, 14000);

    return () => {
      clearTimeout();
      clearInterval();
    };
  }, [runTrafficLights]);

  return (
    <div css={styles.container}>
      <h1 css={styles.heading}>TRAFFIC LIGHTS</h1>
      <div css={styles.lightsContainer}>
        <span
          css={styles.lights}
          className={activeLight === 'red' ? 'red' : ''}
        ></span>
        <span
          css={styles.lights}
          className={activeLight === 'yellow' ? 'yellow' : ''}
        ></span>
        <span
          css={styles.lights}
          className={activeLight === 'green' ? 'green' : ''}
        ></span>
      </div>
    </div>
  );
};

export default App;

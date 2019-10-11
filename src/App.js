import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import * as styles from './style/App';

const App = () => {
  const [activeLight, setActiveLight] = useState('');

  useEffect(() => {
    console.log('inside use effect');
    setInterval(() => {
      console.log('inside set interval');
      setTimeout(() => {
        console.log('inside set timeout');
        setActiveLight('red');
      }, 1000);
      setTimeout(() => {
        setActiveLight('yellow');
      }, 6000);
      setTimeout(() => {
        setActiveLight('green');
      }, 9000);
    }, 14000);

    return () => {
      clearTimeout();
      clearInterval();
    };
  }, []);

  console.log(activeLight);
  // console.log(heading);
  return (
    <>
      <h1 css={styles.heading}>Traffic lights</h1>
      <div style={{ display: 'flex' }}>
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
    </>
  );
};

export default App;

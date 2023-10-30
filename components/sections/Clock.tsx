"use client";

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className='text-neutral-600 dark:text-neutral-400 flex items-center flex-none'>{currentTime.toLocaleTimeString()}</p>;
};

export default Clock;

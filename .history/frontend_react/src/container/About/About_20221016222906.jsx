import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {
    title: 'Web Development',
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Excellent Design</span>
        <br />
        means
        <span> Excellent Business</span>
      </h2>

      <div className="app__profiles"></div>
    </>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const about = [
  {
    title: 'Web Development',
    description: 'I am an excellent web developer.',
    imgUrl: '',
  },
  {
    title: 'Web Design',
    description: 'I am an excellent web developer.',
    imgUrl: '',
  },
  {
    title: 'UI/UX',
    description: 'I am an excellent web developer.',
    imgUrl: '',
  },
  {
    title: 'Web Animations',
    description: 'I am an excellent web developer.',
    imgUrl: '',
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

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app-profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.title}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

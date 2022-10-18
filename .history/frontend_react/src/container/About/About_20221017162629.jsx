import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

const about = [
  {
    title: 'Web Development',
    description: 'I am an excellent web developer.',
    imgUrl: images.about01,
  },
  {
    title: 'Frontend Development',
    description: 'I am an excellent web developer.',
    imgUrl: images.about02,
  },
  {
    title: 'Backend Development',
    description: 'I am an excellent web developer.',
    imgUrl: images.about03,
  },
  {
    title: 'MERN Stack',
    description: 'I am an excellent web developer.',
    imgUrl: images.about04,
  },
];

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then(() => {});
  }, []);

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
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

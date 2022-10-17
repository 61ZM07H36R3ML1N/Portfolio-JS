import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then(data => {
      setAbouts(data);
    });
  });
};

export default About;

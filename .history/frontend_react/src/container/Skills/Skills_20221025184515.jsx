import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  useEffect(() => {
    const query = '*[_type == "Experience"]';
    const skillsQuery = '*[_type == "Skills"]';

    client.fetch(query).then(data => {
      setExperience(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/*Skills.map */}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap('skills', 'app__whitebg');

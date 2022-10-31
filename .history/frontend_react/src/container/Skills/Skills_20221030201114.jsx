import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [Experience, setExperience] = useState([]);
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "Experience"]';
    const skillsQuery = '*[_type == "Skills"]';

    client.fetch(query).then(data => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {Skills.map(skill => (
            <motion.div>
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex" 
              key={Skills.name}
              >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}
                <img src={urlFor(skill.icon)} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap('skills', 'app__whitebg');

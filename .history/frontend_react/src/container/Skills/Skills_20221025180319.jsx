import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then(data => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  });
};


export default Skills;

import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map(item => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </div>
  );
};

export default NavigationDots;

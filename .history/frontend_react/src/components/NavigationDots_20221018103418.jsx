import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        item => (
          <a href={`#${item}`}>{item}</a>
        ),
      )}
    </div>
  );
};

export default NavigationDots;

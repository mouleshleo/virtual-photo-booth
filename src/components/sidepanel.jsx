/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; 
import '../style/sidepanel.css';

const SidePanel = ({ side }) => {
  return (
    <div className={`side-panel ${side}`}>
      <div>
        {side === "left" && (
          <>
            <p>
            <h2>About NSS</h2>
              The National Service Scheme (NSS) is an Indian government-sponsored
              public service program conducted by the Ministry of Youth Affairs and
              Sports. NSS aims to develop the personality of students through
              community service.
            </p>
            
            <p>
              <h2>NSS Day</h2>
              NSS Day is celebrated every year on 24th September to honor the selfless
              efforts and dedication of NSS volunteers in serving the community. The NSS Day 2024 is
              celebrated with the theme ************************
            </p>
          </>
        )}
        {side === "right" && (
          <>
            
            <p>
            <h2>About TCE NSS</h2>
              National Service Scheme (NSS) was introduced in the year 1969 with the primary 
              objective of developing the personality and character of the student through voluntary 
              community service.
            </p>
            <p>
              <h2>NSS Day</h2>
              NSS Day is celebrated every year on 24th September to honor the selfless
              efforts and dedication of NSS volunteers in serving the community. The NSS Day 2024 is
              celebrated with the theme ************************
            </p>
          </>
        )}
      </div>
    </div>
  );
};

SidePanel.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default SidePanel;

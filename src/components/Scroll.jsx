import React from 'react';

const Scroll = ({children}) => {
  return (
    <div style={{overflowY: 'scroll', height: '85vh', overflowX: 'hidden'}}>
      {children}
    </div>
  );
}

export default Scroll;
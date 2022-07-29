import React from 'react';

import '../styles/SongsContainer.css';

export default function SongsContainer({ children }) {
  return (
    <div className='songs-container'>
      {children}
    </div>
  );
}
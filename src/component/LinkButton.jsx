import React from 'react';
import { Link } from 'react-router-dom';

function LinkButton({ to, title }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to={to} className='pill-button' style={{textDecoration: 'none' }}>
        {title}
      </Link>
    </div>
  );
}

export default LinkButton;

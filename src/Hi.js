import React from 'react';
import { useLocation } from 'react-router-dom';
//import axios from 'axios';

function Hi() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name') || 'Anonymous';

  return (
    <div>
      <h3>hi, {name}</h3>
    </div>
  );
}

export default Hi;

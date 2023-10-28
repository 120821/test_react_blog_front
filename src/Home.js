import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name') || 'Anonymous(匿名)';

  return (
    <div>
      <h3>hi, {name}</h3>
    </div>
  );
}

export default Home;

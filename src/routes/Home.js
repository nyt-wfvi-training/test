import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <p>This is the home page.</p>
      <nav>
        <Link to="/post">Go to Post</Link>
      </nav>
    </section>
  );
}

export default Home;

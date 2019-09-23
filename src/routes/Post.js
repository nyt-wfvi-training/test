import React from 'react';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <section>
      <p>This is the post page.</p>
      <nav>
        <Link to="/">Go back to Home</Link>
      </nav>
    </section>
  );
}

export default Post;

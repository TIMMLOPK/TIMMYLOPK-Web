import React from 'react';
import Layout from '../components/layouts/article';

const Info = () => {

  return (
    <>
      <Layout>
        <div className="tree">

          <svg viewBox="0 0 120 140">
            <text x="20" y="130" className="text" fontweight="normal" fontsize="5">HappyChristmas!</text>
            <polygon className="p" fill="none" strokeWidth="1" points="60,10 10,110 110,110 " />
            <circle className="c c1" cx="30" cy="100" r="4" fill="none" strokeWidth="1" />
            <circle className="c c2" cx="65" cy="40" r="4" fill="none" strokeWidth="1" />
            <circle className="c c3" cx="90" cy="90" r="4" fill="none" strokeWidth="1" />
            <circle className="c c4" cx="50" cy="60" r="4" fill="none" strokeWidth="1" />
            <circle className="c c5" cx="69" cy="102" r="4" fill="none" strokeWidth="1" />
            <circle className="c c6" cx="45" cy="80" r="4" fill="none" strokeWidth="1" />
            <circle className="c c7" cx="75" cy="70" r="4" fill="none" strokeWidth="1" />
          </svg>

        </div>
      </Layout>
    </>
  );
};

export default Info
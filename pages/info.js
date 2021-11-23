import React from 'react';
import Layout from '../components/layouts/article'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "您好",
  "Hey",
  "Helo",
  "Hello"
];

const Info = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Layout title="Info">
    <h1>

      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
    
    </Layout>
  );
};

export default Info
import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import { Container, Heading } from '@chakra-ui/layout';

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
  <>
    <Container>
      <Heading>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </Heading>

        <h1>As you know ,I am a Javascript devloper.I have devloped 3 website.</h1>
        <h1>Typical employers of software developers</h1>
        <p>A programmer need a good debug skill as you face various error of your project.</p>
        <h1>How learn a program language ?</h1>
        <p> My suggestion is starting with project.A project can make you know the language logical.</p>
        <h1>What is the tips?</h1>
        <p>Using the different platform to get or solve your problem .</p>

    </Container>      
    </>
  );
};

export default Info
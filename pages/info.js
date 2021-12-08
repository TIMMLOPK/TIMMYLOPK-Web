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

    </Container>      
    </>
  );
};

export default Info
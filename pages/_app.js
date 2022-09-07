import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;

import { useEffect, useState, useCallback } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  const [scrolling, setScrolling] = useState(0);
  const [show, setShow] = useState(true);

  const handleScroll = useCallback(() => {
    setScrolling(scrolling++);
  }, [scrolling]);

  useEffect(() => {
    if (scrolling > 0) {
      setShow(false);
    }
    setTimeout(() => {
      setShow(true);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll, scrolling]);


  return (
    <main className="container mx-auto px-4">
      <Navbar show={show} />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;



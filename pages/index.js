import Image from "next/image";
import Card from "../components/card.js";
import Layout from "../components/Layout/main.js";
import {
  SiRust,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import ProjectCard from "../components/project.js";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import Sparkles from "../components/AnimatedText.js";

const Home = () => {
  const [inview, setinview] = useState("about");
  return (
    <Layout inView={inview}>
      <InView
        className="flex items-center min-h-screen m-6 p-0 relative"
        id="about"
        as="section"
        onChange={(inView) => setinview(inView && "about")}
        threshold={0.5}
      >
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl md:text-left">
          <span className="text-yellow-500">Hello</span>
          <br />I am <Sparkles>Timmy</Sparkles>
        </h1>
        <div className="absolute md:right-1/4 md:inset-y-1/3 invisible md:visible">
          <Image
            className="inline-block rounded-full"
            src="/icon.webp"
            alt="Vercel Logo"
            width={200}
            height={200}
          />
        </div>
      </InView>
      <InView
        className="md:flex md:items-center min-h-screen m-2 relative"
        as="section"
        onChange={(inView) => setinview(inView && "about")}
        threshold={0.5}
      >
        <div className="md:flex md:w-full md:justify-center md:items-center md:flex-col md:p-6">
          <h1 className="font-bold text-3xl">About me</h1>
          <br />
          <p>Your life is not undefined.</p>
        </div>
        <div className="md:flex md:w-full md:justify-center md:items-center mt-2">
          <p className="font-normal text-gray-600">
            Hello, I am a student come from Hong Kong.I am learning web
            development.
            <br />
            <br />
            You may visit GitHub if you are interested in my ongoing and
            upcoming projects. I have developed some works like Discord bot,
            profile website and meme generator. I am glad if you appreciate
            them. Please feel free to tell me if you have advice or questions.
            My contact information is in the SOCIAL MEDIA section.
          </p>
        </div>
      </InView>
      <InView
        className="min-h-screen p-6"
        id="lang"
        as="section"
        onChange={(inView) => setinview(inView && "lang")}
        threshold={0.5}
      >
        <h1 className="font-bold text-2xl">Languages & Skills</h1>
        <br />
        <div className="grid gap-5 md:grid-flow-col md:grid-rows-2 md:grid-cols-3 md:gap-8">
          <div>
            <Card
              icons={<SiRust />}
              name="Rust"
              description="Rust is a systems programming language that is statically typed and compiled to machine code."
            />
          </div>
          <div>
            <Card
              icons={<SiJavascript />}
              name="Javascript"
              description="Javascript is a programming language that is used to create webpages and web applications."
            />
          </div>
          <div>
            <Card
              icons={<SiPython />}
              name="Python"
              description="Python is a programming language that is used to create webpages and web applications."
            />
          </div>
          <div>
            <Card
              icons={<SiReact />}
              name="React"
              description="React is a library that is used to create webpages and web applications."
            />
          </div>
          <div>
            <Card
              icons={<SiNextdotjs />}
              name="Next.js"
              description="Next.js is a library that is used to create webpages and web applications."
            />
          </div>
        </div>
      </InView>
      <InView
        className="min-h-screen p-6"
        id="projects"
        as="section"
        onChange={(inView) => setinview(inView && "projects")}
        threshold={0.5}
      >
        <h1 className="font-bold text-2xl">Projects</h1>
        <br />
        <div>
          <ProjectCard
            title="ONCE"
            description="#Discord bot"
            link="https://discord.lionceu.live/"
          />
        </div>
      </InView>
    </Layout>
  );
};

export default Home;

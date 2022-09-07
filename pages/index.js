import Image from "next/image";
import Card from "../components/langCard.js";
import Layout from "../components/Layout/main.js";
import {
  SiRust,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { MdOutlineTouchApp } from "react-icons/md";
import ProjectCard from "../components/project.js";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import Sparkles from "../components/AnimatedText.js";
import Social from "../components/social.js";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";

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
            alt="Picture of the author"
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
          <strong>Your life is not undefined.</strong>
        </div>
        <div className="md:flex md:w-full md:justify-center md:items-center mt-2">
          <p className="font-normal text-gray-600 dark:text-gray-300">
            Hello, I am a student come from Hong Kong.I am learning web
            development.
            <br />
            <br />
            You may visit GitHub if you are interested in my ongoing and
            upcoming projects. I have developed some works like Discord bot,
            profile website and meme generator. I am glad if you appreciate
            them. Please feel free to tell me if you have advice or questions.
            My contact information is in the <a href="#social">social media</a>
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
        <h1 className="font-bold text-2xl">📦 Languages & Skills</h1>
        <Social icon={<MdOutlineTouchApp />} isLink={false}>
          Click them
        </Social>
        <br />
        <div className="grid gap-5 md:grid-flow-col md:grid-rows-3 md:gap-8">
          <div>
            <Card
              icons={<SiRust />}
              name="Rust"
              description="🪄I use it to build npm outdated checker."
            />
          </div>
          <div>
            <Card
              icons={<SiJavascript />}
              name="Javascript"
              description="My favorite language."
            />
          </div>
          <div>
            <Card
              icons={<SiPython />}
              name="Python"
              description="📦 Coming soon."
            />
          </div>
          <div>
            <Card
              icons={<SiReact />}
              name="React"
              description="📦 Coming soon."
            />
          </div>
          <div>
            <Card
              icons={<SiNextdotjs />}
              name="Next.js"
              description="This page is built with Next.js 💙🤍"
            />
          </div>
        </div>
      </InView>
      <InView
        className="min-h-screen p-6 overflow-hidden"
        id="projects"
        as="section"
        onChange={(inView) => setinview(inView && "projects")}
        threshold={0.5}
      >
        <h1 className="font-bold text-2xl">📁 Projects</h1>
        <br />
        <ProjectCard title="ONCE" link="https://discord.lionceu.live/">
          #Discord bot
        </ProjectCard>
        <ProjectCard title="Meme Generator" link="https://meme.lionceu.live/">
          #Meme generator
        </ProjectCard>
      </InView>
      <InView
        className="min-h-screen p-6"
        id="social"
        as="section"
        threshold={0.5}
        onChange={(inView) => setinview(inView && "social")}
      >
        <h1 className="font-bold text-2xl">📱 Social Media</h1>
        <br />
        <div className="grid gap-8 md:grid-flow-col md:grid-rows-3 md:gap-20">
          <Social
            icon={<GitHubLogoIcon />}
            url="https://github.com/TIMMLOPK"
            isLink
          >
            TIMMLOPK
          </Social>
          <Social icon={<DiscordLogoIcon />} url="https://discord.com" isLink>
            Timmy#2600
          </Social>
          <Social
            icon={<InstagramLogoIcon />}
            url="https://www.instagram.com/tw_wu_as_tim/"
            isLink
          >
            tw_wu_as_tim
          </Social>
        </div>
      </InView>
    </Layout>
  );
};

export default Home;

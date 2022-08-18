import Image from "next/image";
import Card from "../components/card.js";
import Layout from '../components/Layout/main.js';
import { SiRust, SiJavascript, SiPython, SiReact, SiNextdotjs } from "react-icons/si";
import ProjectCard from "../components/project.js";


const Home = () => {
  return (
    <Layout>
      <section className="flex items-center min-h-screen m-6 p-0 relative" id="about">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl md:text-left"><span className='text-yellow-500'>Hello</span>
          <br />I am <span className='text-orange-600'>Timmy</span>
        </h1>
        <div className="absolute sm:right-0 sm:w-1/2 sm:inset-y-1/3 invisible sm:visible">
          <Image
            className="inline-block rounded-full"
            src="/vercel.svg"
            alt="Vercel Logo"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="min-h-screen p-6" id="lang">
        <h1 className="font-bold text-2xl">
          Languages & Skills
        </h1>
        <br />
        <div className="grid gap-5 sm:grid-flow-col sm:grid-rows-2 sm:grid-cols-3 sm:gap-8">
          <div>
            <Card icons={<SiRust />} name="Rust" description="Rust is a systems programming language that is statically typed and compiled to machine code." />
          </div>
          <div>
            <Card icons={<SiJavascript />} name="Javascript" description="Javascript is a programming language that is used to create webpages and web applications." />
          </div>
          <div>
            <Card icons={<SiPython />} name="Python" description="Python is a programming language that is used to create webpages and web applications." />
          </div>
          <div>
            <Card icons={<SiReact />} name="React" description="React is a library that is used to create webpages and web applications." />
          </div>
          <div>
            <Card icons={<SiNextdotjs />} name="Next.js" description="Next.js is a library that is used to create webpages and web applications." />
          </div>
        </div>
      </section>
      <section className="min-h-screen p-6" id="projects">
        <h1 className="font-bold text-2xl">
          Projects
        </h1>
        <br />
        <div>
          <ProjectCard title="Rust" description="Rust is a systems programming language that is statically typed and compiled to machine code." link="https://rust-rust.org/" />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
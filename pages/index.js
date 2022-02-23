/* eslint-disable react/display-name */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

import Layout from "../Components/Layout.js";
import GithubIcon from "../Components/icons/Github.js";
import TwitterIcon from "../Components/icons/Twitter.js";
import LinkedinIcon from "../Components/icons/Linkedin.js";
import { useTheme } from "next-themes";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={["React Developer", 2000, "Student", 2000, "Chairman", 2000]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <Layout title={"Portfolio"} description={"My Protfolio"}>
      <main className="font-sans min-h-[100vh] bg-gradient-to-tr from-[#65dfc9] to-[#6cdbeb] flex items-center justify-center dark:bg-gradient-to-tr dark:from-blue-400 dark:to-primary-dark">
        <motion.img
          src="/images/ball-1.svg"
          alt="ball-1"
          className="hidden md:block h-auto absolute top-48 right-11 z-[1]"
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <motion.img
          src="/images/ball-2.svg"
          alt="ball-2"
          className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <section className="glass min-h-[80vh] w-[60%] bg-gradient-to-br from-Baslangic-rgba to-Bitis-rgba rounded-[2rem] z-[2]  flex">
          <div className="dashboard w-[80px] flex-[1] flex flex-col items-center justify-evenly bg-gradient-to-br from-Baslangic-rgba to-Bitis-rgba rounded-[2rem]">
            <div className="user text-center ">
              <br />
              <Image
                className="h-[100px] w-[120px] rounded-[2rem]"
                src="./images/img.jpeg"
                alt=""
              />
              <h3>Doğukan ESEN</h3>
              <TypingAnimation />
              {/* Social Accounts */}
              <div className="flex items-center mt-8 space-x-6 md:mt-4">
                <motion.a
                  href="https://github.com/DogukanEsen"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <GithubIcon className={"w-8 h-8 fill-current"} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/dogukan-esen/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <TwitterIcon className={"w-8 h-8 fill-current"} />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/dogukanesen.js/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <LinkedinIcon className={"w-8 h-8 fill-current"} />
                </motion.a>
              </div>
            </div>
            <div className="links">
              <div className="link">
                <h2>
                  <Link href="/">
                    <a className="text-[30px] text-center">About_Me</a>
                  </Link>
                </h2>
              </div>
              <div className="link">
                <h2>
                  <Link href="/Abilities">
                    <a className="text-[30px] text-center">Abilities</a>
                  </Link>
                </h2>
              </div>
              <div className="link">
                <h2>
                  <Link href="/MyProjects">
                    <a className="text-[30px] text-center">My_Projects</a>
                  </Link>
                </h2>
              </div>
            </div>
            <a href="mailto:esendogukan@hotmail.com">
              <div className="pro bg-gradient-to-tr from-[#65dfc9] to-[#6cdbeb] rounded-[2rem] bg-white p-[1rem] relative">
                <h2>Hiring !</h2>
                <Image src="./images/hiring.png" alt="" />
              </div>
            </a>
          </div>
          <div className="flex-[2]">
            <div className="status">
              <header className="flex items-center justify-between text-white px-6 py-4 h-16  max-w-5xl mx-auto mt-12 bg-transparent">
                <span></span>
                <button
                  className="px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </header>
              <br />
              <h1>About Me</h1>
              <br />
              <h3 className="text-black">
                <b>
                  Hi, My name is Doğukan. Im a full-stack devoloper. I am a
                  computer engineering student at Izmir Bakırçay University.
                </b>
              </h3>
              <br />
              <br />
              <br />
              <a href="./images/cvYeni.pdf" download>
                <h3>Download My Cv</h3>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

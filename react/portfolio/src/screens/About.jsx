import React from "react";
import Layout from "../components/layout/Layout";
import { Github, Facebook, Twitter, Linkedin } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div>
        <p className=" font-semibold text-8xl">
          Clarence <span className=" text-[#bd5d38]">Taylor</span>
        </p>
        <p className="mt-6">
          3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
          name@email.com
        </p>

        <p className="text-lg mt-4 text-slate-400">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>

        <div className=" flex mt-10 gap-5">
          <Github />
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </Layout>
  );
};

export default About;

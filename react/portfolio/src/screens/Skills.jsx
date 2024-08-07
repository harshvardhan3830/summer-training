import React from "react";
import Layout from "../components/layout/Layout";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  NodejsOriginal,
  NpmOriginalWordmark,
  TailwindcssOriginal,
} from "devicons-react";
const Skills = () => {
  return (
    <Layout>
      <div className=" w-full h-min-[30vh]">
        <p className=" text-3xl font-bold">Skills</p>
        <p className=" text-2xl font-semibold text-slate-500">
          Programming Languages & Tools
        </p>
        <ul className=" flex gap-6 mt-5">
          <li className="">
            <Html5Original size={70} className=" hover:scale-125 hover:duration-300 ease-in-out"/>
          </li>
          <li className="">
            <Css3Original size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
          <li className="">
            <JavascriptOriginal size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
          <li className="">
            <ReactOriginal size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
          <li className="">
            <NodejsOriginal size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
          <li className="">
            <NpmOriginalWordmark size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
          <li className="">
            <TailwindcssOriginal size={70} className=" hover:scale-125 hover:duration-300"/>
          </li>
        </ul>
        <p className="text-xl text-slate-500 mt-5">Workflow</p>
        <p>Mobile-First, Responsive Design</p>
        <p>Cross Browser Testing & Debugging</p>
        <p>Cross Functional Teams</p>
        <p>Agile Development & Scrum</p>
      </div>
    </Layout>
  );
};

export default Skills;

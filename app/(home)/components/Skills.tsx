"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Express JS",
      Icon: SiExpress,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Mongo DB",
      Icon: SiMongodb,
    },
    {
      text: "Laravel",
      Icon: SiLaravel,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col justifiy-center items-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Project Portfolio",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      Link: "https://localhost:5000",
      cover: "/image-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "E-Commerce Platform",
      tech: [SiNextdotjs, SiReact, SiExpress, SiMongodb],
      Link: "https://localhost:6000",
      cover: "/image-2.png",
      background: "bg-green-500",
    },
    {
      title: "E-Commerce Platform",
      tech: [SiNextdotjs, SiReact, SiExpress, SiMongodb],
      Link: "https://localhost:6000",
      cover: "/image-2.png",
      background: "bg-green-500",
    },
    {
      title: "E-Commerce Platform",
      tech: [SiNextdotjs, SiReact, SiExpress, SiMongodb],
      Link: "https://localhost:6000",
      cover: "/image-2.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🍪"
        className="flex flex-col justifiy-center items-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "www.linkedin.com/in/rizqinoorfauzan/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Rizqi-noor-fauzan",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://github.com/Rizqi-noor-fauzan",
      Label: "X",
      Icon: SiX,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex items-center justify-between animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Rizqi Noor Fauzan👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all duration-300" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

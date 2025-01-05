"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group relative">
      <div className="relative w-64 h-64 mx-auto mb-8">
        <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-primary/10">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              "object-cover",
              "transition-all duration-300",
              "group-hover:scale-110"
            )}
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
        <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
        <div className="flex justify-center gap-4">
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
            <Button 
              size="icon" 
              variant="ghost"
              className={cn(
                "transition-all duration-200",
                "hover:bg-[#1DA1F2] hover:text-white",
                "focus-visible:ring-2 focus-visible:ring-[#1DA1F2]"
              )}
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Button 
              size="icon" 
              variant="ghost"
              className={cn(
                "transition-all duration-200",
                "hover:bg-[#0A66C2] hover:text-white",
                "focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
              )}
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
            <Button 
              size="icon" 
              variant="ghost"
              className={cn(
                "transition-all duration-200",
                "hover:bg-[#24292F] hover:text-white",
                "focus-visible:ring-2 focus-visible:ring-[#24292F]"
              )}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
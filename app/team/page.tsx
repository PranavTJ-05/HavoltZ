"use client";

import { TeamMemberCard } from "@/components/team-member-card";
import { teamMembers } from "@/lib/data/team";
import { ScrollAnimation } from "@/components/animations/scroll-animation";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get to know the passionate individuals who make Havoltz Club an amazing community.
            </p>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member) => (
            <ScrollAnimation key={member.name}>
              <TeamMemberCard member={member} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
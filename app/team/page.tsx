"use client";

import { ScrollAnimation } from "@/components/animations/scroll-animation";
import teamMembers from "@/constants/team";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              Meet our creative team members behind our success!
            </p>
          </div>
        </ScrollAnimation>

        {/* Team Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 ">
          {teamMembers.leads.map((member) => (
            <ScrollAnimation key={member.name}>
              <div className="group text-center border border-gray-300 p-4 rounded-2xl">
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  {member.role}
                </div>
                <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                <div className="flex justify-center gap-4 mt-4">
                  {/* <a
                    href="#"
                    className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a> */}
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Faculty Section */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols- lg:grid-cols-1 justify-items-center">
          {teamMembers.facultyCoordinators.map((member) => (
            <ScrollAnimation key={member.name}>
              <h3 className="text-2xl font-bold justify-center items-center text-center mb-4">Faculty Coordinators</h3>
              <div className="group text-center mt-24 sm:w-80 lg:w-96 border border-gray-300 p-4 rounded-2xl lg:grid-cols-1">
                <div className="relative mx-auto w-48 h-48 mb-4 justify-center items-center ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="rounded-full object-cover shadow-transparent "
                  />
                </div>
                <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  {member.role}
                </div>
                <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                <div className="flex justify-center gap-4 mt-4">
                  {/* <a
                    href="#"
                    className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-[#1DA1F2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a> */}
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
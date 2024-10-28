import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sarah Johnson",
    role: "Club President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Leading innovation and fostering collaboration within our community.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Passionate about emerging technologies and mentoring future leaders.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Creating memorable experiences and building strong community connections.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get to know the passionate individuals who make Havoltz Club an amazing community.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="group relative">
              <div className="relative h-96 overflow-hidden rounded-2xl bg-primary/5">
                <Image
                  className="object-cover"
                  src={person.image}
                  alt={person.name}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0 group-hover:from-background/95 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-semibold leading-7">{person.name}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {person.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {person.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
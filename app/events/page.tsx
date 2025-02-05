"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Valley Convention Center",
    description: "Join us for a day of inspiring talks, workshops, and networking opportunities with industry leaders.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=904&h=1280&q=80",
    imageWidth: 904,
    imageHeight: 1280,
    capacity: "250 attendees",
  },
];

const pastEvents = [
  {
    id: 2,
    title: "Web3 Workshop Series",
    date: "January 5-7, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Havoltz Innovation Lab",
    description: "A three-day intensive workshop on blockchain technology, smart contracts, and decentralized applications.",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=904&h=1280&q=80",
    imageWidth: 904,
    imageHeight: 1280,
    capacity: "50 attendees",
  },
  {
    id: 3,
    title: "AI/ML Hackathon",
    date: "December 20-21, 2023",
    time: "9:00 AM - 9:00 PM",
    location: "Digital Innovation Hub",
    description: "48-hour hackathon focused on artificial intelligence and machine learning solutions.",
    image: "https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-1.2.1&auto=format&fit=crop&w=904&h=1280&q=80",
    imageWidth: 904,
    imageHeight: 1280,
    capacity: "100 teams",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Events</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join us at our upcoming events and explore our past achievements.
            </p>
          </div>
        </ScrollAnimation>

        {/* Upcoming Events Section */}
        <ScrollAnimation>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Upcoming Events</h3>
            <div className="grid grid-cols-1 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-lg border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="relative lg:col-span-5 aspect-[9/16] lg:aspect-auto lg:h-[700px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={event.imageWidth}
                      height={event.imageHeight}
                      className="absolute inset-0 h-full w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent lg:hidden" />
                  </div>
                  <div className="lg:col-span-7 flex flex-col justify-between p-6 lg:p-8">
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time className="text-muted-foreground">{event.date}</time>
                        <div className="text-muted-foreground">{event.time}</div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-2xl font-semibold leading-6">
                          {event.title}
                        </h3>
                        <div className="mt-4 flex items-center gap-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="mt-2 flex items-center gap-x-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {event.capacity}
                        </div>
                        <p className="mt-4 text-base leading-6 text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="w-full lg:w-auto">
                        Register Now
                        <Calendar className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Past Events Section */}
        <ScrollAnimation>
          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-8">Past Events</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col overflow-hidden rounded-lg border bg-card"
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={event.imageWidth}
                      height={event.imageHeight}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-x-4 text-xs text-white/80">
                        <time>{event.date}</time>
                        <div>{event.time}</div>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-x-2 text-sm text-white/80">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="mt-2 flex items-center gap-x-2 text-sm text-white/80">
                        <Users className="h-4 w-4" />
                        {event.capacity}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/80 line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import Image from "next/image";
import { pastEvents, upcomingEvents } from "@/constants/events";

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Events</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Come join our new event and explore our past achievements.
            </p>
          </div>
        </ScrollAnimation>

        {/* Upcoming Events Section */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8">Upcoming Events</h3>
            <div className="grid grid-cols-1 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-lg border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="relative lg:col-span-5 aspect-[9/16] lg:aspect-auto lg:h-[600px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={event.imageWidth}
                      height={event.imageHeight}
                      className="absolute inset-0 w-full h-full object-cover"
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
                        <div className="mt-2 flex flex-col text-sm text-muted-foreground">
                          <div className="flex items-center gap-x-2">
                            <Users className="h-4 w-4" />
                            <span>Team Size</span>
                          </div>
                          <div className="mt-1 pl-6">
                            {event.capacity.split("\n").map((line, index) => (
                              <p key={index}>{line}</p>
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-base leading-6 text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full lg:w-auto">
                          Register Now
                          <Calendar className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
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
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pastEvents.map((events) => (
                <div
                  key={events.id}
                  className="flex flex-col overflow-hidden rounded-lg border bg-card"
                >
                  <div className="relative aspect-[9/16] lg:aspect-auto lg:h-[452px] lg:w-[640px] overflow-hidden">
                    <Image
                      src={events.image}
                      alt={events.title}
                      width={events.imageWidth}
                      height={events.imageHeight}
                      className="absolute inset-0 w-full h-fullobject-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-x-4 text-xs text-white/80">
                        <time>{events.date}</time>
                        <div>{events.time}</div>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {events.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-x-2 text-sm text-white/80">
                        <MapPin className="h-4 w-4" />
                        {events.location}
                      </div>
                      <div className="mt-2 flex items-center gap-x-2 text-sm text-white/80">
                        <Users className="h-4 w-4" />
                        {events.capacity}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/80 line-clamp-2">
                        {events.description}
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
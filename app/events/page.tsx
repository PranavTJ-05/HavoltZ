"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Calendar, MapPin, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/animations/scroll-animation";

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Valley Convention Center",
    description: "Join us for a day of inspiring talks, workshops, and networking opportunities with industry leaders.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    capacity: "250 attendees",
  },
  {
    id: 2,
    title: "Web3 Workshop Series",
    date: "April 5-7, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Havoltz Innovation Lab",
    description: "A three-day intensive workshop on blockchain technology, smart contracts, and decentralized applications.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    capacity: "50 attendees",
  },
  {
    id: 3,
    title: "AI/ML Hackathon",
    date: "May 20-21, 2024",
    time: "9:00 AM - 9:00 PM",
    location: "Digital Innovation Hub",
    description: "48-hour hackathon focused on artificial intelligence and machine learning solutions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    capacity: "100 teams",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join us at our upcoming events and be part of the innovation journey.
            </p>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {events.map((event) => (
            <ScrollAnimation key={event.id}>
              <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={event.image}
                    alt={event.title}
                  />
                  {/* <Image
                      className="h-48 w-full object-cover"
                      src={event.image}
                      alt={event.title}
                      width={2070}
                      height={1380}
                    /> */}
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time className="text-muted-foreground">{event.date}</time>
                      <div className="text-muted-foreground">{event.time}</div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold leading-6">
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
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-x-4">
                    <Button className="w-full">
                      Register Now
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";

const gallery = [
  {
    title: "Tech Innovation Summit",
    description: "Our annual flagship event bringing together tech enthusiasts.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Hackathon 2024",
    description: "48 hours of non-stop innovation and coding.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "AI Workshop Series",
    description: "Learning and implementing cutting-edge AI technologies.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Community Meetup",
    description: "Monthly gatherings to share knowledge and network.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Web3 Conference",
    description: "Exploring the future of decentralized web.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Design Workshop",
    description: "Mastering UI/UX principles and tools.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Photo Gallery</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our club&#39;s memorable moments and achievements through these snapshots.
            </p>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gallery.map((item) => (
            <ScrollAnimation key={item.title}>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
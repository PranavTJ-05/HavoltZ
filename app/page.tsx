import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Calendar, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-8">
              <Image src="/logo.svg" alt=" " width={250} height={250}  className="animate-pulse"/>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to Havoltz Club
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Where innovation meets excellence. Join our community of passionate individuals dedicated to pushing the boundaries of technology and creativity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/events">
                <Button size="lg">
                  Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/quiz">
                <Button variant="outline" size="lg">
                  Take the Quiz
                  <Trophy className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Join Havoltz?</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover the opportunities that await you in our vibrant community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Users className="h-5 w-5 flex-none text-primary" />
                  Community
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Connect with like-minded individuals and build lasting relationships.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Calendar className="h-5 w-5 flex-none text-primary" />
                  Events
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Participate in workshops, competitions, and networking events.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Trophy className="h-5 w-5 flex-none text-primary" />
                  Growth
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">Develop your skills and advance your career through our programs.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Events</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Check out our most recent and upcoming events. Join us to learn, grow, and connect.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Tech event"
                width={2070}
                height={1380}
                className="aspect-[3/2] rounded-2xl object-cover"
              />
            </div>
            <div className="max-w-xl text-base leading-7 lg:col-span-7">
              <h3 className="text-2xl font-bold tracking-tight">Tech Innovation Summit 2024</h3>
              <div className="mt-6 text-muted-foreground">
                <p>Join us for our flagship event where industry leaders share insights on emerging technologies.</p>
                <ul role="list" className="mt-8 space-y-4">
                  <li className="flex gap-x-3">
                    <span className="font-semibold">Keynote Speakers</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="font-semibold">Interactive Workshops</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="font-semibold">Networking Sessions</span>
                  </li>
                </ul>
                <Link href="/events">
                  <Button className="mt-8">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
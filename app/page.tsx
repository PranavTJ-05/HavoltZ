import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Calendar, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";

export default function Home() {
  return (
    <>
      {/* Background GIF Container */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328035647/Circuit%20-%2019528.mp4?width=1280&hash=f0c5f408d4c6d9bd4e59cd1af8e563f7f4f6d82c"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
      </div>

      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center mb-8">
                <Zap className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Welcome to Havoltz Club
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Where innovation meets excellence. Join our community of passionate individuals dedicated to pushing the boundaries of technology and creativity.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Link href="/events" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Upcoming Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/quiz" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Take the Quiz
                    <Trophy className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Join Havoltz?</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Discover the opportunities that await you in our vibrant community.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: <Users className="h-5 w-5 flex-none text-primary" />,
                  title: "Community",
                  description: "Connect with like-minded individuals and build lasting relationships."
                },
                {
                  icon: <Calendar className="h-5 w-5 flex-none text-primary" />,
                  title: "Events",
                  description: "Participate in workshops, competitions, and networking events."
                },
                {
                  icon: <Trophy className="h-5 w-5 flex-none text-primary" />,
                  title: "Growth",
                  description: "Develop your skills and advance your career through our programs."
                }
              ].map((item, index) => (
                <ScrollAnimation key={item.title}>
                  <div className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                      {item.icon}
                      {item.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                      <p className="flex-auto">{item.description}</p>
                    </dd>
                  </div>
                </ScrollAnimation>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Events</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Check out our most recent and upcoming events. Join us to learn, grow, and connect.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <ScrollAnimation className="relative lg:order-last lg:col-span-5">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Tech event"
                width={2070}
                height={1380}
                className="aspect-[3/2] rounded-2xl object-cover"
              />
            </ScrollAnimation>
            <ScrollAnimation className="max-w-xl text-base leading-7 lg:col-span-7">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
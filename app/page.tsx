import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Trophy, Lightbulb, BookOpen, Network, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import slideData from "@/constants/slidedata";

export default function Home() {
  return (
    <>
      <section className="relative pt-24 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero page*/}
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl text-center justify-center">
              <div className="flex justify-center -mb-5">
                <Image
                  src="../image_bank/logo2.png"
                  alt="Havoltz Club Logo"
                  width={175}
                  height={150}
                  className="flex h-34 w-34 text-primary animate-bounce-pulse" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Welcome to VIT Chennai&apos;s Havoltz Club
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Where innovation meets excellence. Join our community of passionate individuals dedicated to pushing the boundaries of technology and creativity.
                We aim to elevate practical skills in both software and hardware, aligning with the significant market demand for expertise in these areas.
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

          {/* Motto Section */}
          <ScrollAnimation>
            <div className="mt-28 mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Our Motto</h2>
              <div className="bg-primary/5 border rounded-2xl p-8">
                <p className="text-lg leading-8 text-muted-foreground">
                  Our club offers something for everyone. Our club hosts a variety of activities that cater to diverse interests. Our major focus is to bring like-minded people in the field of Electrical and Electronics to pool in their ideas and innovations together to achieve greater heights. One of our main motto is to predominantly share our knowledge in the field of electrical and electronics engineering.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Projects Section */}
          <ScrollAnimation>
            <div className="mt-28 w-full">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Featured Projects</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore our innovative projects that showcase the technical expertise and creativity of our club members.
                </p>
              </div>
              <div>
                <ProjectCarousel slides={slideData} />
              </div>
            </div>
          </ScrollAnimation>

          {/* Why Join Section */}
          <ScrollAnimation>
            <div className="mt-28 mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Why Join Havoltz?</h2>
              <div className="bg-card border rounded-2xl p-8 shadow-lg mb-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Joining our club is not just about having fun; it&apos;s also an opportunity for personal growth and development. Through our workshops, guest speakers, and mentorship programs, you&apos;ll have the chance to learn new skills, gain valuable insights, and discover your full potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* || */}
              <div className="bg-card border rounded-2xl p-8 shadow-lg mb-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hands-on Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Get practical experience with cutting-edge technologies through our hands-on projects and workshops. Work with microcontrollers, IoT devices, renewable energy systems, and more. Build a portfolio of real-world projects that will set you apart in your career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border rounded-2xl p-8 shadow-lg mb-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Connect with industry professionals, alumni, and like-minded peers. Our events and meetups provide excellent networking opportunities that can lead to internships, job opportunities, and lasting professional relationships in the field of electrical and electronics engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
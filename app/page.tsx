'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Mail, Lightbulb, Network, MapPin } from "lucide-react";
import { Download, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import projects from "@/constants/projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import tiers from "@/constants/sponsors";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <section className="relative pt-24 pb-24 overflow-hidden">
        <TracingBeam className="px-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Hero page*/}
            <ScrollAnimation>
              <div className="mx-auto max-w-3xl text-center justify-center">
                <div className="flex justify-center -mb-5">
                  <Image
                    src="../image_bank/logo.png"
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
            {/* Our team member */}

            <div className="w-full mt-32 mb-32 px-0 py-10 flex flex-col lg:flex-row items-center justify-center lg:items-start">

              {/* Left Side: Image Section */}
              <div className="relative w-full sm:right-0 lg:right-4 lg:w-1/2">
                {/* Blue Blur Effect */}
                <div className="absolute -z-40 inset-0 bg-blue-500 opacity-30 blur-3xl rounded-3xl"></div>

                {/* Main Image */}
                <Image
                  src="/image_bank/Team.jpg"
                  alt="Team"
                  className="w-full h-auto max-h-[450px] object-cover rounded-lg"
                  width={800}
                  height={500}
                />
              </div>

              {/* Right Side: Text Section */}
              <div className="relative top-10 sm:left-0 lg:left-4 w-full lg:w-1/2 mt-8 lg:mt-0 text-white text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Our Club Gems
                </h2>
                <p className="text-md md:text-md mt-3">
                  Our primary focus is to actively share our wealth of knowledge in electrical and electronics engineering and to bring together those who are passionate about Electrical and Electronics and developement.
                </p>
              </div>
            </div>

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
                  <ProjectCarousel slides={projects} />
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
                {/* || */}
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

            {/* Sponsor Page */}
            <div className="py-20 px-6 text-center bg-[0_0%_3.9%] text-white">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Become a Sponsor</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Support innovation and help shape the future of technology. Explore our sponsorship tiers and be a part of something amazing!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-4">
                {tiers.map((tier, index) => (
                  <div
                    key={index}
                    className={classNames(
                      "p-6 rounded-lg shadow-lg",
                      tier.bgColor // Ensuring Tailwind picks up dynamic class
                    )}
                  >
                    <h3 className={classNames("text-2xl font-bold mb-4", tier.textColor)}>
                      {tier.title}
                    </h3>
                    <p className="text-lg font-semibold mb-4 text-gray-300">{tier.amount}</p>
                    <ul className="text-left space-y-2">
                      {tier.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-5 flex-shrink-0 text-green-400" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <Link href="../files/HaVoltz_sponsorship_brochure.pdf" download target="_blank"> {/* give the brochure pdf here */}
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-black">
                    Sponsor Brochure <Download className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact and Location Section */}
            <ScrollAnimation>
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="bg-card border rounded-2xl p-8 pt-14">
                  <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4 pt-10 sm:pt-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:havoltz.vitchennai@gmail.com" className="text-muted-foreground  hover:text-primary transition-colors">
                          havoltz.vitchennai@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-10 sm:pt-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          VIT Chennai Campus<br />
                          Vandalur-Kelambakkam Road<br />
                          Chennai - 600127
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card border rounded-2xl overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704989772!2d80.15085337454468!3d12.840646217736882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1739272517454!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, minHeight: "400px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </TracingBeam>
      </section>
    </>
  );
}
"use client";
//finalised right
import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import { AnimatedTestimonialsLeft } from "@/components/ui/animated-testimonials-left";
import { AnimatedTestimonialsRight } from "@/components/ui/animated-testimonials-right";
import testimonials from "@/constants/gallery";

export default function GalleryPage() {
  const gallery = [
    {
      title: "Havoltz Club Group Photo",
      description: "Our stars and the members of the club",
      image: "../image_bank/gallery/group.jpg",
      imageWidth: 2070,
      imageHeight: 1080,
      featured: true
    }
  ];
  const featuredImage = gallery.find(item => item.featured);
  const regularImages = gallery.filter(item => !item.featured);
  

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Photo Gallery</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our club&apos;s memorable moments and achievements through these snapshots.
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Image Section */}
        {featuredImage && (
          <ScrollAnimation>
            <div className="mt-16">
              {/* Mobile Layout */}
              <div className="sm:hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={featuredImage.image}
                    alt={featuredImage.title}
                    width={featuredImage.imageWidth}
                    height={featuredImage.imageHeight}
                    className="absolute inset-0 h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 p-4 bg-background rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {featuredImage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {featuredImage.description}
                  </p>
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden sm:block relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={featuredImage.image}
                  alt={featuredImage.title}
                  width={featuredImage.imageWidth}
                  height={featuredImage.imageHeight}
                  className="absolute inset-0 h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {featuredImage.title}
                  </h3>
                  <p className="text-lg text-white/80">
                    {featuredImage.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}
        <div className="mt-14"></div>
        <AnimatedTestimonialsRight testimonials={testimonials} selectedId={1} autoplay={true} />
        <AnimatedTestimonialsLeft testimonials={testimonials} selectedId={2} autoplay={true} />
      </div>
    </div>
  );
}
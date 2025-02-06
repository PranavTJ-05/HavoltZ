"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import gallery from "@/constants/gallery";

export default function GalleryPage() {
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
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
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

        {/* Regular Images Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularImages.map((item, index) => (
            <ScrollAnimation key={item.title}>
              <div className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900">
                <div className="relative aspect-[9/16]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {item.description}
                    </p>
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
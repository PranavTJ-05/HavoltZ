"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import navigation from "@/constants/navbar_constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-black backdrop-blur-lg border-b shadow-sm",
        scrolled && "shadow-md"
      )}
    >

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Logo className="h-6 w-6 text-primary" ariana-hidden="true" />
            <span className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Havoltz
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 lg:hidden",
          mobileMenuOpen
            ? "bg-black bg-opacity-100 opacity-100"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex min-h-screen items-center justify-center bg-black bg-opacity-100 transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-2xl font-medium text-white transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

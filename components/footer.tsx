import { Logo } from "@/components/logo";
import { Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <a
            href="mailto:havoltz.vitchennai@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-5 w-5" />
            <span>Gmail</span>
          </a>
          <a
            href="https://www.instagram.com/havoltz.vitcc?igsh=aHN6dHZrazd5ODFz"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://in.linkedin.com/company/havoltz-vitcc"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-2">
            <Logo className="h-5 w-5 text-primary" />
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Havoltz Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/contact" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/events" className="text-muted-foreground hover:text-primary">
            Events
          </Link>
          <Link href="/team" className="text-muted-foreground hover:text-primary">
            Team
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Havoltz Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
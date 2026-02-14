import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@assets/mac_meadow_logo_horns.webp";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      <Link href="/">
        <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
          Home
        </a>
      </Link>
      <Link href="/products">
        <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
          Products
        </a>
      </Link>
      <Link href="/about">
        <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
          About
        </a>
      </Link>
      <Link href="/blog">
        <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
          Blog
        </a>
      </Link>
      <Link href="/contact">
        <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
          Contact
        </a>
      </Link>
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-border/40 shadow-sm py-2" : "bg-background/95 backdrop-blur-sm border-border/20 py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#F7F6F2]">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks />
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  asChild
                >
                  <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link href="/">
            <a className="block w-24 md:w-32 hover:opacity-90 transition-opacity">
              <img src={logo} alt="Mac & Meadow" width={128} height={128} className="w-full h-auto" />
            </a>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            asChild
          >
            <a href="https://macandmeadowco.square.site/" target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </Button>
        </div>

        {/* Placeholder for layout balance on mobile */}
        <div className="w-10 md:hidden"></div>
      </div>
    </nav>
  );
}

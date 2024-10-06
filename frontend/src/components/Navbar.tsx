import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Scholarlytics" className="h-8 w-8 mr-2" />
          <Link href="/">
            <a className="text-xl font-bold">Scholarlytics</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/scholarships">Browse</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/test">Apply</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/results">My Scholarships</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

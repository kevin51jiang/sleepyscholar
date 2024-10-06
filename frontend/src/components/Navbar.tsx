import React from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Scholarship Search</a>
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/results?q=all">Scholarships</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/test">Apply</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
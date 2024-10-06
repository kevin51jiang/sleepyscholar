import React from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button"

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Scholarship Search</h1>
      <p className="mb-4">Find the perfect scholarship opportunities for your academic journey.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/scholarships">
            View All Scholarships
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/test">
            Apply for Scholarship
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button"

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Unlock Your Academic Destiny
      </h1>
      <p className="text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
        Embark on a transformative journey through the cosmos of scholarships. Your dreams are the stars, and we're your celestial navigation system.
      </p>
      <div className="space-y-6 md:space-y-0 md:space-x-6 mb-12">
        <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/scholarships">
            Explore the Scholarship Universe
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg" className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/test">
            Launch Your Application Odyssey
          </Link>
        </Button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-3 text-purple-600">Tailored Matches</h3>
          <p className="text-gray-600">Our AI-powered system aligns your unique starlight with the perfect scholarship constellations.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-3 text-pink-600">Cosmic Opportunities</h3>
          <p className="text-gray-600">Discover a galaxy of scholarships from prestigious institutions across the universe.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-3 text-indigo-600">Stellar Support</h3>
          <p className="text-gray-600">Our team of academic astronauts is here to guide you through every meteor shower.</p>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-6">Your Academic Odyssey Begins Here</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don't let financial gravity hold you down. With Scholarlytics, you'll soar through the academic atmosphere and reach the stratosphere of success!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

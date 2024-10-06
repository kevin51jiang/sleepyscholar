import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { NiceScholarship } from "@/lib/scholarship";

export const ResultsPage: React.FC = () => {
  const [scholarships, setScholarships] = useState<NiceScholarship[]>([]);
  const [_, setLocation] = useLocation();

  useEffect(() => {
    const savedResults = localStorage.getItem("scholarshipSearchResults");
    if (savedResults) {
      setScholarships(JSON.parse(savedResults));
    }
  }, []);

  const handleBackToForm = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Scholarship Results
        </h1>
        <Button onClick={handleBackToForm} className="mb-6">
          Back to Form
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              scholarship={scholarship}
              id={index.toString()}
            />
          ))}
        </div>
        {scholarships.length === 0 && (
          <p className="text-white text-center text-xl mt-8">
            No scholarships found. Please try adjusting your search criteria.
          </p>
        )}
      </div>
    </div>
  );
};

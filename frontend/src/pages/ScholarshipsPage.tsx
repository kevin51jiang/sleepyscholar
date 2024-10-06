import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  RawScholarship,
  rawScholarshipToScholarship,
  Scholarship,
} from "@/lib/scholarship";
import { Config } from "@/lib/api";
import { ScholarshipCard } from "@/components/ScholarshipCard";

export const ScholarshipsPage: React.FC = () => {
  const [location] = useLocation();
  const query = new URLSearchParams(location.split("?")[1]).get("q") || "";

  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  useEffect(() => {
    const fetchScholarships = async () => {
      const response = await fetch(`${Config.API_URL}/scholarships`);
      const data = await response.json();
      const parsedScholarships = data.map((rawScholarship: RawScholarship) =>
        rawScholarshipToScholarship(rawScholarship)
      );
      setScholarships(parsedScholarships);
    };
    fetchScholarships();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">View all Scholarships</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={index}
            scholarship={scholarship}
            id={index.toString()}
          />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

import React from 'react';
import { Link, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const scholarships = [
  {
    id: "1",
    name: "STEM Excellence Scholarship",
    description: "For outstanding students in Science, Technology, Engineering, or Mathematics.",
    deadline: "December 31, 2024",
    amount: "$5000",
  },
  {
    id: "2",
    name: "Arts and Humanities Grant",
    description: "Supporting creative minds in various artistic and humanistic disciplines.",
    deadline: "November 15, 2024",
    amount: "$3500",
  },
  // Add more scholarships as needed
];


const ResultsPage: React.FC = () => {
  const [location] = useLocation();
  const query = new URLSearchParams(location.split('?')[1]).get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Scholarship Results</h1>
      <p className="mb-4">Showing results for: {query}</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {scholarships.map((scholarship, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{scholarship.name}</CardTitle>
              <CardDescription>{scholarship.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{scholarship.requirements}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-400">Deadline: {scholarship.deadline}</p>
              <Button variant="outline" asChild>
                  <Link href={`/scholarships/${scholarship.id}`}>
                    View Details
                  </Link>
                </Button>
            </CardFooter>
          </Card>
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

export default ResultsPage;

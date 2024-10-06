import React, { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NiceScholarship } from "@/lib/scholarship";

export const ScholarshipPage: React.FC = () => {
  const { scholarship_id } = useParams();
  const [scholarship, setScholarship] = useState<NiceScholarship | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem("scholarshipSearchResults");
    if (savedResults) {
      const scholarships: NiceScholarship[] = JSON.parse(savedResults);
      const index = parseInt(scholarship_id || "0", 10);
      if (scholarships[index]) {
        setScholarship(scholarships[index]);
      }
    }
  }, [scholarship_id]);

  if (!scholarship) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{scholarship.name}</CardTitle>
          <CardDescription className="text-lg">
            {scholarship.scholarshipDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <ul className="list-disc pl-5">
                <li>GPA: {scholarship.gpa}</li>
                <li>Major: {scholarship.major}</li>
                <li>First Generation Student: {scholarship.firstGen}</li>
                <li>Gender: {scholarship.gender}</li>
                <li>FAFSA Eligibility: {scholarship.fafsa}</li>
                <li>Citizenship Required: {scholarship.citizenship}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Year of Study</h3>
              <p>{scholarship.year_of_study}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Award Amount</h3>
              <p>{scholarship.awardAmount}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Application Questions
              </h3>
              <p>{scholarship.scholarshipQuestions}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Application Deadline: {scholarship.deadline || "Not Stated"}
          </p>
          <Button asChild>
            <a href={scholarship.scholarshipURL}>Apply Now</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

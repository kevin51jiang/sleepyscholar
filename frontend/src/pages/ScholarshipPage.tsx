import React from 'react';
import { useParams } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'wouter';

export const ScholarshipPage: React.FC = () => {
  const { scholarship_id } = useParams();

  // This is a placeholder. You'd typically fetch the scholarship data based on the scholarship_id
  const scholarship = {
    id: scholarship_id,
    name: "Excellence in STEM Scholarship",
    description: "This scholarship is designed to support outstanding students pursuing degrees in Science, Technology, Engineering, or Mathematics.",
    requirements: [
      "Minimum GPA of 3.5",
      "Major in a STEM field",
      "Full-time enrollment",
      "Demonstrated leadership in extracurricular activities",
      "Two letters of recommendation"
    ],
    deadline: "May 15, 2024",
    amount: "$10,000",
    eligibility: "Open to undergraduate students in their sophomore or junior year",
    applicationProcess: "Submit online application, including personal statement and academic transcripts."
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{scholarship.name}</CardTitle>
          <CardDescription className="text-lg">{scholarship.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1">
                {scholarship.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
              <p>{scholarship.eligibility}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Award Amount</h3>
              <p>{scholarship.amount}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Application Process</h3>
              <p>{scholarship.applicationProcess}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Application Deadline: {scholarship.deadline}</p>
          <Button asChild>
            <Link href={`/apply/${scholarship.id}`}>
              Apply Now
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};



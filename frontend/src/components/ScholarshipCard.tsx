import { Link } from "wouter";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { NiceScholarship, Scholarship } from "../lib/scholarship";

interface ScholarshipCardProps {
  scholarship: NiceScholarship;
  id: string;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  scholarship,
  id,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{scholarship.name}</CardTitle>
        <CardDescription>{scholarship.scholarshipDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{scholarship.year_of_study}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-400">
          Deadline: {scholarship.deadline}
        </p>
        <Button variant="outline" asChild>
          <Link href={`/scholarships/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

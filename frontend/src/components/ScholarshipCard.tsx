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
import { Scholarship } from "../lib/scholarship";

interface ScholarshipCardProps {
  scholarship: Scholarship;
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
        <CardDescription>{scholarship.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{scholarship.classLevel}</p>
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

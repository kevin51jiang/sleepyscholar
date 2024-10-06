


interface ScholarshipCardProps {
    scholarship: Scholarship;
  }
  
export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">{scholarship.name}</h2>
        <p className="text-gray-600">{scholarship.description}</p>
        <p className="mt-2 text-gray-500">{scholarship.requirements}</p>
        <p className="mt-4 border-t pt-2 text-gray-400 text-sm">
          Deadline: {scholarship.deadline}
        </p>
        <button className="mt-4 text-blue-500 hover:underline">
          View More
        </button>
      </div>
    );
  };
  
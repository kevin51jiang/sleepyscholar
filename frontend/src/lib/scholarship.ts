export interface RawScholarship {
    "What is the name of this scholarship?": string;
    "What is the GPA needed for this scholarship?": string;
    "What is the major needed for this scholarship?": string;
    "Is this scholarship for first gen students?": string;
    "What gender is needed for this scholarship?": string;
    "Does this scholarship require you to be eligible for fafsa?": string;
    "What is the class level for this scholarship?": string;
    "Are you required to be a citizen?": string;
    "What are application questions for the scholarship?": string;
    "Attach the url containing this scholarships info and application information?":
        string;
    "What is the deadline of the scholarship?": string;
    "What is the award amount of the scholarship?": string;
    "What is the description of the scholarship?": string;
}

export const rawScholarshipToScholarship = (
    rawScholarship: RawScholarship,
): Scholarship => {
    return {
        name: rawScholarship["What is the name of this scholarship?"],
        gpa: rawScholarship["What is the GPA needed for this scholarship?"],
        major: rawScholarship["What is the major needed for this scholarship?"],
        firstGen: rawScholarship["Is this scholarship for first gen students?"],
        gender: rawScholarship["What gender is needed for this scholarship?"],
        fafsa: rawScholarship[
            "Does this scholarship require you to be eligible for fafsa?"
        ],
        classLevel:
            rawScholarship["What is the class level for this scholarship?"],
        citizen: rawScholarship["Are you required to be a citizen?"],
        applicationQuestions: rawScholarship[
            "What are application questions for the scholarship?"
        ],
        url: rawScholarship[
            "Attach the url containing this scholarships info and application information?"
        ],
        deadline: rawScholarship["What is the deadline of the scholarship?"],
        awardAmount:
            rawScholarship["What is the award amount of the scholarship?"],
        description:
            rawScholarship["What is the description of the scholarship?"],
    };
};

export interface Scholarship {
    name: string;
    gpa: string;
    major: string;
    firstGen: string;
    gender: string;
    fafsa: string;
    classLevel: string;
    citizen: string;
    applicationQuestions: string;
    url: string;
    deadline: string;
    awardAmount: string;
    description: string;
}

export interface NiceScholarship {
    name: string;
    major: string;
    gpa: string;
    firstGen: string;
    gender: string;
    fafsa: string;
    year_of_study: string;
    citizenship: string;
    scholarshipQuestions: string;
    scholarshipURL: string;
    deadline: string;
    awardAmount: string;
    scholarshipDescription: string;
}

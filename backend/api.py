from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import json
from groq import Groq
import re
import os
from fastapi.middleware.cors import CORSMiddleware

client = Groq(
        api_key=""
        )

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "CORS enabled for all origins!"}

app = FastAPI()

def load_jsonl_file(file_path):
    data = []
    with open(file_path, 'r') as file:
        for line in file:
            line = line.strip()  # Strip leading/trailing whitespace
            if line:  # If line is not empty, process it
                try:
                    data.append(json.loads(line))  # json.loads() handles each line separately
                except json.JSONDecodeError as e:
                    print(f"Error parsing line: {line}\nError: {e}")
    return data

user_data = {}
scholarships = []
scholarships = load_jsonl_file('/home/ubuntu/URLsmallBatch scrape.jsonl')  

# Data model for the search request
class ScholarshipSearch(BaseModel):
    GPA_needed: Optional[str] = None  #gpa
    major_needed: Optional[str] = None  #major
    class_level: Optional[str] = None  #year of study
    citizenship_required: Optional[str] = None  #citizenship
    #added fields for all required inputs:
    first_gen: Optional[str] = None
    name_of_student: Optional[str] = None
    fafsa_bool: Optional[str] = None
    gender_student: Optional[str] = None


@app.get("/scholarships/{scholarship_id}", response_model=dict)
async def get_scholarship(scholarship_id: int):
    # Check if the scholarship_id is within the range of the scholarships list
    if 0 <= scholarship_id < len(scholarships):
        return scholarships[scholarship_id]
    # Raise an HTTP 404 exception if the scholarship is not found
    raise HTTPException(status_code=404, detail="Scholarship not found")


@app.get("/scholarships", response_model=List[dict])
async def get_top_20_scholarships():
    # Get the top 20 scholarships or as many as available if less than 20
    allScholarship = []
    for scholarship in scholarships:
        scholarship_data = {
            'name': scholarship.get('What is the name of this scholarship?', '').lower(),
            'major': scholarship.get('What is the major needed for this scholarship?', '').lower(),
            'gpa': scholarship.get('What is the GPA needed for this scholarship?', '0'),
            'first_gen': scholarship.get('Is this scholarship for first gen students?', '').lower(),
            'gender': scholarship.get('What gender is needed for this scholarship?', '').lower(),
            'fafsa': scholarship.get('Does this scholarship require you to be eligible for fafsa?', '').lower(),
            'year_of_study': scholarship.get('What is the class level for this scholarship?', '').lower(),
            'citizenship': scholarship.get('Are you required to be a citizen?', '').lower(),
            'scholarshipQuestions': scholarship.get('What are application questions for the scholarship?', '').lower(),
            'scholarshipURL': scholarship.get('Attach the url containing this scholarships info and application information?', '').lower(),
            'deadline': scholarship.get('What is the deadline of the scholarship?', '').lower(),
            'awardAmount': scholarship.get('What is the award amount of the scholarship?', '').lower(),
            'scholarshipDescription': scholarship.get('What is the description of the scholarship?', '').lower(),}
        allScholarship.append(scholarship_data)

    if not allScholarship:
        raise HTTPException(status_code=404, detail="No scholarships available.")
    return allScholarship

@app.post("/generate", scholarship=str)
async def generate_content(request: GenerateRequest):

    scholarshipQuestionCurrent = GenerateRequest['scholarshipQuestions']

    chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": f"""
                                    You are tasked with generating an essay response for the user, considering the following:

                                    ### User Data:
                                    {user_data}

                                    ### Essay Question:
                                    {scholarshipQuestionCurrent}

                                    Please generate an essay that incorporates the user's professional background and is relevant to the essay question provided. Ensure the response is coherent and tailored to the user's experience and is around 300 words.
                                """,
                }
            ],
            model="llama-3.2-90b-text-preview",
    )

    if not chat_completion.choices[0].message.content:
        raise HTTPException(status_code=404, detail="No esay response.")

    return chat_completion.choices[0].message.content

def getUserPrompt(search: ScholarshipSearch) -> dict:
    user_data['name'] = search.name_of_student  # Correct field name
    user_data['major'] = search.major_needed
    user_data['gpa'] = search.GPA_needed
    user_data['firstGen'] = search.first_gen  # Correct field name
    user_data['gender'] = search.gender_student  # Correct field name
    user_data['FAFSA'] = search.fafsa_bool  # Correct field name
    user_data['year of study'] = search.class_level  # Correct field name
    user_data['citizenship'] = search.citizenship_required
    return user_data


# POST request to search for scholarships
@app.post("/search", response_model=List[dict])
async def search_scholarships(search: ScholarshipSearch):
    matching_scholarships = []
    results = {}
    user_data = getUserPrompt(search)
    #scholarships = load_jsonl_file('/home/ubuntu/smallBatchScrape.jsonl')
    for scholarship in scholarships:
        scholarship_data = {
            'name': scholarship.get('What is the name of this scholarship?', '').lower(),
            'major': scholarship.get('What is the major needed for this scholarship?', '').lower(),
            'gpa': scholarship.get('What is the GPA needed for this scholarship?', '0'),
            'first_gen': scholarship.get('Is this scholarship for first gen students?', '').lower(),
            'gender': scholarship.get('What gender is needed for this scholarship?', '').lower(),
            'fafsa': scholarship.get('Does this scholarship require you to be eligible for fafsa?', '').lower(),
            'year_of_study': scholarship.get('What is the class level for this scholarship?', '').lower(),
            'citizenship': scholarship.get('Are you required to be a citizen?', '').lower(),
            'scholarshipQuestions': scholarship.get('What are application questions for the scholarship?', '').lower(),
            'scholarshipURL': scholarship.get('Attach the url containing this scholarships info and application information?', '').lower(),
            'deadline': scholarship.get('What is the deadline of the scholarship?', '').lower(),
            'awardAmount': scholarship.get('What is the award amount of the scholarship?', '').lower(),
            'scholarshipDescription': scholarship.get('What is the description of the scholarship?', '').lower(),
        }

        # Extract the same data individually for further processing
        name = scholarship.get('What is the name of this scholarship?', '').lower()
        major = scholarship.get('What is the major needed for this scholarship?', '').lower()
        gpa = scholarship.get('What is the GPA needed for this scholarship?', '0')
        first_gen = scholarship.get('Is this scholarship for first gen students?', '').lower()
        gender = scholarship.get('What gender is needed for this scholarship?', '').lower()
        fafsa = scholarship.get('Does this scholarship require you to be eligible for fafsa?', '').lower()
        year_of_study = scholarship.get('What is the class level for this scholarship?', '').lower()
        citizenship = scholarship.get('Are you required to be a citizen?', '').lower()
    
        #print(f'name: {name}')

        # Create a formatted string for the scholarship
        scholarShipParsed =  f"""
            Scholarship requirements:    
        
            Scholarship name: {name}
            major: {major}
            gpa: {gpa}
            first gen: {first_gen}
            gender: {gender}
            fafsa?: {fafsa}
            year of study(grade): {year_of_study}
            US citizen: {citizenship}
        """

        # Groq query mockup to match user data with the scholarship data
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": f"""
                        Based on the user's data and the scholarship data provided, return only '1' if the user's data is a match for the scholarship requirements (at least 90% match). Return '0' if the user's data does not meet the scholarship requirements (less than 90% match). 
                        Do not include any other output or explanation. Only return '1' or '0' based on the comparison. Ignore fields that have the value 'any' or '(not found)'.
                    
                        user data:{user_data}

                        scholarship data:{scholarShipParsed}
                    """,
                }
            ],
            model="llama-3.2-90b-text-preview",
        )

        if chat_completion.choices[0].message.content == "1":
            matching_scholarships.append(scholarship_data)

    if not matching_scholarships:
        raise HTTPException(status_code=404, detail="No scholarships found matching the criteria.")

    return matching_scholarships

    #return the matching dict 

@app.post("/generate", scholarship=dict)
async def generate_content(request: GenerateRequest):
    # Using Groq or any other model to generate content
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"Generate content based on the following text and context: {request.text} \n Context: {request.context}"
            }
        ],
        model="llama-3.2-90b-text-preview",
    )
    
    generated_content = response.choices[0].message.content
    
    return {"generated_content": generated_content}

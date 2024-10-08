# SleepyScholar: AI-Powered Scholarship Matching Platform

SleepyScholar is an AI-powered scholarship matching platform designed to help students find scholarships tailored to their specific qualifications. The platform leverages Groq's LLaMA models to match users with relevant scholarships and also assists in generating personalized scholarship essays based on the user's profile.

## Features

- **AI-Powered Scholarship Matching**: Automatically matches scholarships to users based on input data such as GPA, major, class level, and more.
- **Custom Essay Generation**: Uses the user’s profile to generate custom essays for scholarship applications.
- **Frontend/Backend Separation**: A clean separation between the React-based frontend and the FastAPI backend, allowing for efficient development.

---

## Installation

### Prerequisites

- **Backend**:
  - Python 3.9+
  - [FastAPI](https://fastapi.tiangolo.com/)
  - [Uvicorn](https://www.uvicorn.org/)
  - [Requests](https://docs.python-requests.org/en/master/)
  - Groq API Key for LLaMA integration
  - [Pydantic](https://pydantic-docs.helpmanual.io/)
  - JSON

- **Frontend**:
  - [Node.js](https://nodejs.org/en/)
  - [Vite](https://vitejs.dev/)

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/your-repo/sleepyscholar.git
cd sleepyscholar

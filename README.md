
# Presentation Management Dashboard

This is a full-stack presentation management application built with a Node.js backend and a React frontend. The backend uses PostgreSQL, which is dockerized for easy setup.

## Table of Contents

- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running Tests](#running-tests)
- [License](#license)

## Technologies

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React
- **Testing**: Jest, Supertest
- **Docker**: For containerizing the PostgreSQL database

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Start PostgreSQL with Docker**:
   Make sure you have Docker installed and running. From the `backend` directory, run:
   ```bash
   docker-compose up
   ```

3. **Install Dependencies**:
   Once PostgreSQL is up and running, install the backend dependencies:
   ```bash
   npm install
   ```

4. **Run the Backend Application**:
   You can start the backend application with:
   ```bash
   npm run dev
   ```

5. **Running Tests**:
   To run the tests for the backend, use:
   ```bash
   npm test
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../presentation_frontend
   ```

2. **Install Dependencies**:
   Install the frontend dependencies with:
   ```bash
   npm install
   ```

3. **Run the Frontend Application**:
   Start the frontend application with:
   ```bash
   npm run dev
   ```
## Demo Video

Watch the demo of the application below:

[![Demo Video](https://youtu.be/K4IiKrsYrCA.jpg)](https://youtu.be/K4IiKrsYrCA)

...


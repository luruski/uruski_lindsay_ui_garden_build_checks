# Coding Assignment 13: UI Component Library

## Overview

This project adds code quality checks to the UI component library from Assignment 12. It uses Husky to run pre-commit checks, GitHub Actions to run the same checks on every push, and Docker to host a production build of the application on localhost port 8018.

## How to Run the Application in Docker

1. Make sure Docker Desktop is installed and running on your computer.

2. Clone this repository and move into the project folder:

   git clone git@github.com:luruski/uruski_lindsay_ui_garden_build_checks.git

   cd uruski_lindsay_ui_garden_build_checks

3. Build the Docker image:

   docker build -t uruski_lindsay_ui_garden_build_checks .

4. Run the container with the required name and port:

   docker run -d -p 8018:8018 --name uruski_lindsay_coding_assignment13 uruski_lindsay_ui_garden_build_checks

5. Open your browser and go to http://localhost:8018 to see the component library running.

## Pre-Commit Checks with Husky

Husky runs three checks before every commit. If any check fails, the commit is blocked and the code cannot be submitted.

The checks are:

1. Prettier, which makes sure all code follows consistent formatting rules
2. ESLint, which catches code quality problems and potential bugs
3. Tests, which run the full React Testing Library test suite

To run the checks manually:

npm run format:check

npm run lint

npm run test:ci

## GitHub Actions Workflow

The workflow file is located at .github/workflows/build-checks.yml. It runs on every push and pull request to the main branch. It installs dependencies, then runs the Prettier check, the ESLint check, all tests, and finally the production build. If any step fails, the workflow fails and GitHub sends a notification email. This means the checks are enforced even if the local pre-commit hooks are bypassed.

## Running Locally Without Docker

1. Install dependencies:

   npm install --legacy-peer-deps

2. Start the development server:

   npm start

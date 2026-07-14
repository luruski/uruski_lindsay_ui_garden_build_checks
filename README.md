# Uruski Lindsay UI Garden

A component library built with React, TypeScript, and Storybook.

## Step 1 - Install Dependencies

npm install --legacy-peer-deps

## Step 2 - Run Storybook

npm run storybook

Open http://localhost:6006 to view the component library in Storybook.

## Step 3 - Build the Project

npm run build

This creates a production build in the /build folder.

## Step 4 - Run with Docker

Make sure Docker is running on your machine, then:

Build the container:
docker build -t uruski_lindsay_coding_assignment12 .

Run the container:
docker run -p 8083:8083 uruski_lindsay_coding_assignment12

## Step 5 - Access the Site

Open your browser and go to:
http://127.0.0.1:8083

## Run Tests

npm test

## Components Included

- Button
- Label
- Text
- Table (Table header, Table row, Table cell, Table footer)
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

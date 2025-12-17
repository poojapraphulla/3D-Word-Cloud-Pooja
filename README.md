# 3D Word Cloud Generator

A full-stack web application that analyzes news articles and visualizes the most important words as an interactive 3D word cloud using React Three Fiber and FastAPI.

This project demonstrates an end-to-end pipeline including article extraction, keyword analysis, API design, and real-time 3D visualization, with a clean setup and a single-command development workflow.

## Overview

The application allows users to input a news article URL, processes the article content on the backend to extract key terms, and renders those terms in a visually engaging 3D space on the frontend.

The focus of this project is on:

- Data-to-visualization flow
- Clean separation of frontend and backend responsibilities
- Type safety and modern tooling
- Creative but controlled 3D rendering

## Features

- URL-based news article analysis
- Keyword extraction using TF-IDF
- Custom stop-word filtering for cleaner results
- Interactive 3D word cloud visualization
- Words vary in size, position, and color based on relevance
- Orbit controls for rotation and exploration
- Smooth UI transitions and animations
- Single-command setup to run frontend and backend together

## Tech Stack

### Frontend

- React (TypeScript)
- Vite
- React Three Fiber (Three.js for React)
- @react-three/drei
- Framer Motion
- Three.js

### Backend

- FastAPI
- Python
- Uvicorn
- Newspaper3k (article extraction)
- scikit-learn (TF-IDF keyword extraction)

### Tooling

- Node.js / npm
- Python virtual environment
- concurrently (to run both servers together)

---

## Running the Project

### Prerequisites

- Node.js (v18 or higher recommended)
- Python (v3.10 or higher recommended)
- npm

### Install All Dependencies

From the project root directory:

```bash
npm run install:all
```

This command:

- Installs frontend dependencies inside `Frontend/`
- Sets up a Python virtual environment
- Installs backend dependencies inside `Backend/`

### Start Frontend and Backend Together

```bash
npm run dev
```

This single command:

- Starts the FastAPI backend on http://127.0.0.1:8000
- Starts the React frontend on http://localhost:5173
- Runs both servers concurrently

### Accessing the Application

- Frontend UI: http://localhost:5173
- Backend API documentation (Swagger UI): http://127.0.0.1:8000/docs

## Application Flow

1. User enters a news article URL in the frontend
2. The URL is sent to the backend API
3. Backend fetches and cleans article text
4. Keywords are extracted and weighted using TF-IDF
5. Processed data is returned to the frontend
6. The frontend renders the keywords as a 3D word cloud

## Notes and Design Decisions

- TF-IDF was chosen for keyword extraction due to its simplicity, transparency, and suitability for short-to-medium length articles.

- A custom stop-word list is applied to remove generic news terms and improve keyword quality.

- React Three Fiber was selected to integrate 3D rendering naturally within the React component model.

- The 3D layout prioritizes readability and spatial clarity over dense clustering.

- The project structure is designed to be easily extensible for alternative topic modeling techniques or enhanced visual interactions.

## What This Project Demonstrates

- Full-stack development (API + UI)
- Clean React + TypeScript architecture
- 3D visualization with React Three Fiber
- Data → visualization pipeline
- Production-style setup with unified dev workflow

## Author

### Pooja Praphulla Ande

- Built as part of a take-home assessment to demonstrate full-stack and visualization skills.

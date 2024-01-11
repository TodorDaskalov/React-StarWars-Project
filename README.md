# React Star Wars Project

## Overview

This project is a React application that features a responsive login form and a data table page displaying information from the Star Wars API.

## Features

- **Login Form:**
  - Responsive form with username and password inputs.
  - Basic validation to ensure non-empty fields.
  - Disabled login button when validation fails.

- **React-Router Navigation:**
  - Utilizes `react-router-dom` for navigation.
  - Redirects users to a new page ("/table") upon successful login.

- **Data Table Page:**
  - New page ("/table") displaying a table.
  - Fetches data from the [Star Wars API](https://swapi.dev/api/people).
  - Displays fields: name, mass, height, hair color, and skin color.

- **Table Design:**
  - Visually appealing and responsive table.
  - Loading state displayed while fetching data.
  - Error handling for failed API requests with a retry option.

- **Technologies Used:**
  - React
  - React Router
  - CSS (with modules)
  - Star Wars API

## Project Structure

# React-StarWars-Project

- **src/**
  - **components/**
    - LoginPage.jsx
    - LoginPage.module.css
    - TablePage.jsx
    - TablePage.module.css
  - App.jsx
  - App.css
  - main.jsx

- **index.html**

- **.gitignore**
- **package.json**
- **README.md**

## Installation

To run this Vite project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/TodorDaskalov/React-StarWars-Project.git

2. Navigate to the project directory

3. Install dependencies:

  ```bash
   npm install


4. Run the development server:

  bash
   npm run dev

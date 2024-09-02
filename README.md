# Travel Trucks

Travel Trucks is a web application that allows users to search and view campers
with various filters and features. Users can also add favorite campers to a list
and view detailed information about each camper.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [Links](#links)

## Features

- Browse a list of campers with filters for location, body type, and amenities.
- View detailed information about each camper.
- Add and remove campers from a favorites list.
- View reviews and camper features.
- Search for campers by keywords and characteristics.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository.git
   ```

2. **Navigate to the project directory:**

```bash
   cd travel-trucks
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the project:**

```bash
npm start
```

## Usage

- Visit the application in your browser: http://localhost:3000
- Use the filters on the sidebar to narrow down the list of campers.
- Click on "Show more" to view detailed information about a camper.
- Add campers to your favorites and manage them from the favorites page.

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: Reusable React components.
  - `redux/`: Redux slices and selectors for state management.
  - `pages/`: React components representing different pages.
  - `assets/`: Static assets like icons and images.
  - `styles/`: CSS files for styling the components.
- `public/`: Contains static files and the main HTML file.
- `package.json`: Contains metadata and dependencies for the project.

# Technical Details

- React: Front-end framework for building user interfaces.
- Redux: State management library used for handling application state.
- Formik: Library for managing forms and validation.
- Yup: Schema validation library for Formik.
- CSS Modules: Scoped CSS styling for components.
- Vercel: Hosting platform where the application is deployed.

# Technical Details

[Project Repository](https://github.com/Danilthedjun/travel-trucks-app)
[ Live Application](https://travel-trucks-app-pi.vercel.app/)

Feel free to contribute to the project by submitting pull requests or opening
issues.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

## Description

The app features a home page with intuitive selectors, allowing users to select their preferred car make and year. By clicking the Search button, users are navigated to a results page that displays a list of cars matching their chosen criteria.

## Features
1. Home Page with Filter Selectors
Vehicle Make Selector: Allows users to choose the car make from a dropdown populated with data fetched from an API.
Model Year Selector: Lets users select the model year, with years dynamically generated from 2015 to the current year.
Search Button: A Search button below the selectors that navigates to the results page. The button is disabled until both selectors have values.

2. Results Page
Displays a list of cars based on the selected make and model year from the home page.
Each car is shown with:
Car Name
Model ID
Model Name

## API Usage
The app uses environment variables to store API URL, to handling API requests. API endpoints are defined in the .env.local file, which Next.js loads for use in both client and server code.

## Technologies
Next.js: A React-based framework for server-rendered applications and static websites.
Tailwind CSS: Provides a responsive and customizable styling approach for the UI.
Environment Variables: API URLs and other sensitive information are stored in .env.local.
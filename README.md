This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## features

The main purpose of this car filter application is to allow users to search and filter cars based on two key criteria: Make and Model Year. The application provides an intuitive interface to select a vehicle make (brand) and model year, and then it displays the corresponding car models based on the selected filters. Below are the core features and functionalities:

Select Vehicle Make:

Users can choose a vehicle's make (e.g., Ford, Toyota, Honda) from a dropdown list.
The list of makes is dynamically populated, usually fetched from an API, which contains all the available car brands.
The system should handle cases where the make list is empty or loading, showing appropriate messages to the user.
Select Model Year:

Users can choose the model year for the cars they're interested in (e.g., 2020, 2021, 2022).
The list of available years is typically limited to the range of years that the application supports (e.g., from 2015 to the current year).
It is essential that the application only allows users to select valid years that have associated car models.
Fetch and Display Car Models:

Once the user has selected a make and year, the application will fetch the car models that match these criteria.
This data is usually obtained via an external API (e.g., a vehicle data provider like the National Highway Traffic Safety Administration (NHTSA) API).
After fetching the data, the application will display a list of car models that match the selected make and year.

"Next" Button for Further Navigation:

After the user has selected a make and year, and the corresponding models are loaded, the application will display a "Next" button.
This button will only be enabled if both the make and year have been selected, ensuring the user has made valid selections.
When clicked, the user will be directed to a results page or another screen with further details about the selected vehicles, such as model specifications, images, or additional options.
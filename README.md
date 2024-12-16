# 4Z Cookbook 👩‍🍳

Hey there! Welcome to our frontend technical exercise. We'd love to see you build a recipe app using the Spoonacular API. We've set up a few fun challenges for you to tackle in the next 2 hours!

## Getting Started 🚀

1. Fork this repository
2. Clone your forked repository
3. Create a new branch with your name (e.g. `cookbook/petar-petrovic`)
4. Run `npm install` to install dependencies
5. Add the provided Spoonacular API key to `.env.local`:

```bash
SPOONACULAR_API_KEY=api_key_here
```

6. Start the dev server with `npm run dev`
7. Commit your changes

## What Will You Build? 🤔

We've prepared three pages for you to work on:

### 1. Random Recipes Page 🎲

Located at `/random-recipes`, this page
needs some love! Here's what you need to
do:

**Standard Tasks:**

- Replace mock data with real Spoonacular API integration (show at least 10 recipes)
- Add a "Get New Recipes" button
- Implement basic error handling
- Add loading states
- Style recipe cards
- Make the layout responsive

**Advanced Tasks:**

- Implement adding recipes to favorites (for example, by clicking on a heart icon and saving it to local storage)
- Add loading skeletons
- Implement proper error states with retry options
- Make the page SEO friendly
- Add infinite scroll or pagination

### 2. About Page with Contact Form 📝

Found at `/about`, this page needs a working contact form:

**Standard Tasks:**

- Implement form submission to the API endpoint
- Add basic form validation
- Handle loading states during submission
- Display success/error messages
- Clear form after successful submission
- Make the form pretty

**Advanced Tasks:**

- Add real-time validation
- Implement form state management
- Add email format validation
- Add character limit to message
- Implement retry on API failure
- Save form draft to localStorage

### 3. Recipe Details Page 🍳

Create a new route for displaying detailed recipe information. This page must be server-side rendered for optimal performance and SEO:

**Standard Tasks:**

- Create a dynamic route for recipe details (/recipes/[id])
- Use server-side rendering (SSR) for initial page load
- Fetch and display comprehensive recipe data:
  - Title and images
  - Cooking time and servings
  - Ingredients list with amounts
  - Step by step instructions
- Add loading and error states
- Make it mobile responsive
- Implement proper metadata for SEO

**Advanced Tasks:**

- Add nutritional information
- Implement ingredient unit conversion
- Add a "Similar Recipes" section
- Add a "Jump to Recipe" button for long pages
- Implement ISR (Incremental Static Regeneration) for better performance

## Technical Details 🛠️

- Choose either the App Router (`/app`) or Pages Router (`/pages`) for your implementation
  - We've provided examples for both, but you should pick one and stick with it
  - Move all pages to your chosen router
  - Remove the unused router directory completely
  - ⚠️ The app won't build until you pick one router and delete the other
  - 💡 Tip: Don't forget about the API route as well (/api/contact) you can only have one of these
- Style it however you want (CSS, Tailwind, whatever works for you!)
- Install any additional libraries you'd like to use

## API Docs 🥄

```
https://spoonacular.com/food-api/docs
```

Example endpoints:

```js
https://api.spoonacular.com/recipes/random?number=4&apiKey=${process.env.SPOONACULAR_API_KEY}
```

## Submission 🎯

1. Push your changes to your forked repository
2. Create a Pull Request from your fork back to the original repository
   - Use your name as the PR title (e.g. "Petar Petrovic - 4Zida")

That's it! Pick the tasks you want to tackle first and show us your best work. Good luck! 🚀

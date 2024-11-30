# 4Z Cookbook 👩‍🍳

Hey there! Welcome to our frontend technical exercise. We'd love to see you build a recipe app using the Spoonacular API. Don't worry - there's no strict requirements here, just 2 hours to show us how you like to build user interfaces!

## Getting Started 🚀

1. Clone this repository
2. Run `npm install` to install dependencies
3. Add the provided Spoonacular API key to `.env.local`:

```bash
SPOONACULAR_API_KEY=api_key_here
```

4. Start the dev server with `npm run dev`

## API Docs 🥄

```
https://spoonacular.com/food-api/docs
```

Endpoint examples:

```js
https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=${process.env.SPOONACULAR_API_KEY}

https://api.spoonacular.com/recipes/random?number=4&apiKey=${process.env.SPOONACULAR_API_KEY}
```

## What Should You Build? 🤔

Anything you want! This is your chance to have fun and show off your skills. Build something that gets you excited.

Need some inspiration? Here are some ideas:

- A recipe search that helps people find their next favorite meal
- A detailed recipe viewer with all the cooking info you need
- A meal planner to organize your week
- A nutrition tracker to keep an eye on what you eat
- A random recipe generator for the adventurous chef
- A shopping list maker to prep for your next grocery run

## Technical Stuff 🛠️

- Feel free to use either the App Router (`/app`) or Pages Router (`/pages`) - we've set up examples for both
- Style it however you want (CSS, Tailwind, whatever works for you!)
- TypeScript? Sure, if you want! But no pressure if you prefer JavaScript

## Submission 🎯

1. Create a new branch with your name (e.g. `cookbook/petar-petrovic`)
2. Commit your changes

That's it! We can't wait to see what you create!

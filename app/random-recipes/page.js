"use client";

import styles from "./random.module.css";
import { recipes } from "@/data/random-recipes";

export default function RandomRecipePage() {
  // STANDARD TASKS:
  // [ ] Replace mock data with real Spoonacular API integration (show 10 recipes)
  // [ ] Add a "Get New Recipes" button
  // [ ] Implement basic error handling
  // [ ] Add loading states
  // [ ] Style recipe cards
  // [ ] Make the layout responsive
  // [ ] Show recipe image, cooking time, servings, and title

  // ADVANCED TASKS:
  // [ ] Implement adding recipes to favorites
  // [ ] Add loading skeletons
  // [ ] Implement proper error states with retry options
  // [ ] Add infinite scroll or pagination
  // [ ] Make the page SEO friendly

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>What should I cook?</h1>
        <p className={styles.intro}>
          Stuck in a recipe rut? Let our culinary slot machine surprise you! 🎰
        </p>
        <p className={styles.subtext}>
          Say goodbye to the eternal "What should I cook?" question. Just hit
          the button and let the kitchen magic happen! Warning: May cause
          unexpected cooking adventures and happy taste buds.
        </p>
      </div>

      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.card}>
            <h2>{recipe.title}</h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
            />
            <p>Ready in {recipe.readyInMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        ))}
      </div>

      {recipes.length === 0 && (
        <div className={styles.empty}>
          <p>Our chefs are taking a quick coffee break ☕️</p>
          <p>Hit that button to wake them up!</p>
        </div>
      )}
    </main>
  );
}

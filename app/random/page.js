"use client";

import { useEffect, useState } from "react";
import styles from "./random.module.css";
import { recipesData } from "@/data/random-recipes";

export default function Random() {
  const [recipes] = useState(recipesData);

  useEffect(() => {
    // TODO: fetch recipes from Spoonacular API
    // endpoint: https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&number=4
  }, []);

  return (
    <main className={styles.container}>
      <h1>Random Recipes</h1>

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
    </main>
  );
}

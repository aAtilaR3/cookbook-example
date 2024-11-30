import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Our Recipe Community</h1>

      <div className={styles.intro}>
        <div className={styles.introText}>
          <h2>Welcome to Our Kitchen</h2>
          <p>
            Founded in 2024, we're a passionate community of food lovers, home
            cooks, and culinary explorers. Our journey began with a simple idea:
            to create a space where people can discover, share, and celebrate
            the joy of cooking together.
          </p>
          <p>
            From traditional family recipes to modern culinary innovations,
            we're here to inspire your next kitchen adventure. Join thousands of
            food enthusiasts who call our platform home.
          </p>
        </div>
        <div className={styles.introImage}>
          <img src="/cooking.jpg" alt="Cooking together" />
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            We believe that cooking is more than just preparing meals—it's about
            creating memories, sharing traditions, and bringing people together.
            Our platform is dedicated to making cooking accessible, enjoyable,
            and inspiring for everyone, from beginners to seasoned chefs.
          </p>
        </div>

        <div className={styles.card}>
          <h2>What We Offer</h2>
          <p>
            Our carefully curated collection of recipes spans global cuisines,
            dietary preferences, and skill levels. Each recipe comes with
            detailed instructions, expert tips, and a supportive community ready
            to share their experiences and modifications.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Join Our Community</h2>
          <p>
            Whether you're looking to expand your culinary horizons, share your
            favorite recipes, or connect with fellow food enthusiasts, you've
            found your home. We're constantly growing and evolving, driven by
            our passion for good food and great company.
          </p>
        </div>
      </div>
    </div>
  );
}

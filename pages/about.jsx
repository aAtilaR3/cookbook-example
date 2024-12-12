import styles from "./about.module.css";

export default function About() {
  // STANDARD TASKS:
  // [ ] Implement form submission to /api/contact endpoint
  // [ ] Add basic form validation (all fields required)
  // [ ] Handle loading state during the 2s API delay
  // [ ] Display success/error messages from API response
  // [ ] Clear form after successful submission

  // ADVANCED TASKS:
  // [ ] Show status of form submission in a toast notification
  // [ ] Implement form state management (React Hook Form/Formik)
  // [ ] Add real-time validation with error messages
  // [ ] Add email format validation
  // [ ] Add character limit to message (e.g. 500 chars)
  // [ ] Implement retry on API failure
  // [ ] Save form draft to localStorage
  // [ ] Add keyboard navigation (proper focus management)
  // [ ] Make the page SEO friendly

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

      <div className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="recipe">Recipe Suggestion</option>
              <option value="bug">Report an Issue</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              rows="5"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

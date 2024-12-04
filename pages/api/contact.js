// NOTE: This is the Pages Router version of the API route.
// If you're using App Router, delete this file and use /app/api/contact/route.js instead

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate validation
      const { name, email, subject, message } = req.body;
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      // Randomly succeed or fail
      if (Math.random() > 0.2) {
        // 80% success rate
        res.status(200).json({
          success: true,
          message: "Thanks for your message!",
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
      resolve();
    }, 2000);
  });
}

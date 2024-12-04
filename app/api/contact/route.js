// NOTE: This is the App Router version of the API route.
// If you're using Pages Router, delete this file and use /pages/api/contact.js instead

import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate validation
      const { name, email, subject, message } = body;
      if (!name || !email || !subject || !message) {
        resolve(
          NextResponse.json(
            { success: false, message: "All fields are required" },
            { status: 400 }
          )
        );
        return;
      }

      // Randomly succeed or fail
      if (Math.random() > 0.2) {
        // 80% success rate
        resolve(
          NextResponse.json(
            { success: true, message: "Thanks for your message!" },
            { status: 200 }
          )
        );
      } else {
        resolve(
          NextResponse.json(
            {
              success: false,
              message: "Failed to send message. Please try again.",
            },
            { status: 500 }
          )
        );
      }
    }, 2000);
  });
}

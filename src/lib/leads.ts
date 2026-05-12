import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  firstName: z.string(),
  phone: z.string(),
  email: z.string(),
  type: z.string(),
});

// The URL you provided
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7drsZvw4ClcDewtMQ6YGIrxWtOJDPWBAJqIllu9_zjoi9GTqymNC_6jkXqXldVp6s/exec"; 

export const saveLead = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    // Validate inside the handler
    const validatedData = leadSchema.parse(data);

    if (!GOOGLE_SCRIPT_URL) {
      console.warn("Google Script URL is not set. Lead not saved to Google Sheets.");
      return { success: true, warning: "URL_MISSING" };
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...validatedData,
          date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      return { success: true };
    } catch (error) {
      console.error("Failed to save lead to Google Sheets:", error);
      throw error;
    }
  });


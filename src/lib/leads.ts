import { createServerFn } from "@tanstack/react-start";

// Replace this with your Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = ""; 

export const saveLead = createServerFn({ method: "POST" })
  .validator((data: { firstName: string; phone: string; email: string; type: string }) => data)
  .handler(async ({ data }) => {
    if (!GOOGLE_SCRIPT_URL) {
      console.warn("Google Script URL is not set. Lead not saved to Google Sheets.");
      return { success: true, warning: "URL_MISSING" };
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby7drsZvw4ClcDewtMQ6YGIrxWtOJDPWBAJqIllu9_zjoi9GTqymNC_6jkXqXldVp6s/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script redirects
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      return { success: true };
    } catch (error) {
      console.error("Failed to save lead to Google Sheets:", error);
      throw error;
    }
  });

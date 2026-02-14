import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { storage } from "./storage";
import { log } from "./index";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/signup", async (req, res) => {
    const { email, phone } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM || "Mac & Meadow <onboarding@resend.dev>",
        to: "macandmeadowco@gmail.com",
        subject: "New Newsletter Signup - Mac & Meadow",
        text: [
          "New signup from the Mac & Meadow website:",
          "",
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : "Phone: Not provided",
          "",
          `Signed up at: ${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })}`,
        ].join("\n"),
      });
      log(`Signup notification sent for ${email}`);
      return res.json({ message: "Signup successful." });
    } catch (err) {
      log(`Failed to send signup email: ${err}`);
      return res.status(500).json({ message: "Failed to process signup." });
    }
  });

  return httpServer;
}

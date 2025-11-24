import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";

export async function serveStatic(app: Express, _server: Server) {
  // Try multiple possible locations for the built frontend
  let distPath: string;
  
  const possiblePaths = [
    // When running from dist/index.js
    path.resolve(import.meta.dirname, "../public"),
    // When running from project root
    path.resolve("./dist/public"),
    // Fallback
    path.resolve(process.cwd(), "dist", "public"),
  ];

  distPath = possiblePaths.find(p => fs.existsSync(p)) || possiblePaths[0];

  if (!fs.existsSync(distPath)) {
    console.warn(
      `Frontend build directory not found at: ${distPath}\nTried: ${possiblePaths.join(", ")}`,
    );
  }

  app.use(express.static(distPath, {
    setHeaders: (res) => {
      res.setHeader("Cache-Control", "public, max-age=3600");
    },
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Frontend build not found");
    }
  });
}

(async () => {
  await runApp(serveStatic);
})();

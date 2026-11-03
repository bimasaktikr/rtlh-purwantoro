// 1. Load env paling pertama sebelum file lain di-import
import "dotenv/config"; 
import app, { setupFrontend } from "./server/app.js";

const PORT = process.env.PORT || 8000;

async function startServer() {
  // Hubungkan route frontend/API
  await setupFrontend(app);

  const server = app.listen(PORT, () => {
    console.log(`Backend API    : http://localhost:${PORT}`);
    console.log(`Web Frontend   : http://localhost:5173`);
  });

  const shutdown = (signal) => {
    console.log(`\n[${signal}] Menutup server SIPELITA...`);
    server.close(() => {
      console.log("Server berhenti dengan aman.");
      process.exit(0);
    });
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

startServer().catch((err) => {
  console.error("❌ Gagal memulai server:", err);
  process.exit(1);
});
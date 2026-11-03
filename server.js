// 1. Load env paling pertama sebelum file lain di-import
import "dotenv/config"; 
import app, { setupFrontend } from "./server/app.js";

const PORT = process.env.PORT || 8000;

async function startServer() {
<<<<<<< HEAD
  // Pastikan di dalam setupFrontend(), saat NODE_ENV === 'production',
  // dia hanya menjalankan express.static('dist'), BUKAN vite.createServer()!
  await setupFrontend(app);

  const server = app.listen(PORT, () => {
    console.log("=================================================");
    console.log(`🚀 SIPELITA UNIFIED SERVER AKTIF (${process.env.NODE_ENV || "development"})`);
    console.log(`🌐 Port / Socket   : ${PORT}`);
    console.log(`🗄️ Database MySQL  : ${process.env.DB_NAME || "sipelita_desa"}`);
    console.log("=================================================");
=======
  // Hubungkan route frontend/API
  await setupFrontend(app);

  const server = app.listen(PORT, () => {
    console.log(`Backend API    : http://localhost:${PORT}`);
    console.log(`Web Frontend   : http://localhost:5173`);
>>>>>>> project
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
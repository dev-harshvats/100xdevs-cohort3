// global.d.ts
namespace NodeJS {
  interface ProcessEnv {
    MONGO_URL: string;
    // Add other env variables here as needed
  }
}
